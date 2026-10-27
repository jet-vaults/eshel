"""Responsive image pipeline.

Reads src/content/media.json  ->  {"id": {"src": "<path relative to repo>", "max": 2400, "crop": "16:9"?}}
Writes wwwroot/assets/img/<id>-<width>.avif|.webp and src/content/media.out.json with
real dimensions, so the build can emit width/height/srcset and never shift layout.

Usage:  python -I tools/images.py [--force]
"""
import json, sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'wwwroot' / 'assets' / 'img'
STEPS = [480, 768, 1080, 1440, 1920]
AVIF_Q, WEBP_Q = 52, 74
FORCE = '--force' in sys.argv


def crop_to(im, ratio, focus):
    rw, rh = (float(x) for x in ratio.split(':'))
    w, h = im.size
    target = rw / rh
    fx, fy = focus
    if w / h > target:
        nw = round(h * target)
        x = min(max(round(fx * w - nw / 2), 0), w - nw)
        return im.crop((x, 0, x + nw, h))
    nh = round(w / target)
    y = min(max(round(fy * h - nh / 2), 0), h - nh)
    return im.crop((0, y, w, y + nh))


def main():
    media = json.loads((ROOT / 'src/content/media.json').read_text(encoding='utf-8'))
    out_path = ROOT / 'src/content/media.out.json'
    prev = json.loads(out_path.read_text(encoding='utf-8')) if out_path.exists() else {}
    OUT.mkdir(parents=True, exist_ok=True)
    result, total = {}, 0
    for mid, cfg in media.items():
        src = ROOT / cfg['src']
        if not src.exists():
            print('MISSING', mid, src); continue
        key = [str(src.stat().st_mtime_ns), json.dumps(cfg, sort_keys=True)]
        if not FORCE and prev.get(mid, {}).get('key') == key and all(
                (OUT / f'{mid}-{w}.webp').exists() for w in prev[mid]['widths']):
            result[mid] = prev[mid]; continue
        im = ImageOps.exif_transpose(Image.open(src))
        alpha = im.mode in ('RGBA', 'LA', 'P') and 'A' in im.convert('RGBA').getbands() and \
            im.convert('RGBA').getextrema()[3][0] < 255
        im = im.convert('RGBA' if alpha else 'RGB')
        if cfg.get('trim'):  # logos: cut the white/transparent margin around the artwork
            from PIL import ImageChops
            bg = Image.new(im.mode, im.size, (255, 255, 255, 0) if alpha else (255, 255, 255))
            diff = ImageChops.difference(im, bg).convert('L').point(lambda v: 255 if v > 24 else 0)
            box = diff.getbbox()
            if box:
                pad = 6; im = im.crop((max(box[0]-pad, 0), max(box[1]-pad, 0), min(box[2]+pad, im.width), min(box[3]+pad, im.height)))
        if cfg.get('crop'):
            im = crop_to(im, cfg['crop'], cfg.get('focus', (0.5, 0.5)))
        w0, h0 = im.size
        cap = min(cfg.get('max', 1920), w0)
        widths = [w for w in STEPS if w < cap] + [cap]
        if cfg.get('widths'):
            widths = [w for w in cfg['widths'] if w <= w0] or [w0]
        for w in widths:
            h = round(h0 * w / w0)
            r = im if w == w0 else im.resize((w, h), Image.LANCZOS)
            r.save(OUT / f'{mid}-{w}.avif', 'AVIF', quality=AVIF_Q, speed=6)
            r.save(OUT / f'{mid}-{w}.webp', 'WEBP', quality=WEBP_Q, method=6)
            total += 1
        result[mid] = {'w': w0, 'h': h0, 'widths': widths, 'alpha': bool(alpha), 'key': key}
        print('ok', mid, f'{w0}x{h0}', widths)
    out_path.write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding='utf-8')
    print('done', len(result), 'images,', total, 'new variants')


if __name__ == '__main__':
    main()

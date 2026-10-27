#!/bin/sh
# Dev helper: tools/review.sh <outdir> <viewport WxH> <path...>  -> full-page shots sliced into 1800px-tall parts
export MSYS_NO_PATHCONV=1 PLAYWRIGHT="${PLAYWRIGHT:-$LOCALAPPDATA/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright}"
out=$1; vp=$2; shift 2
VPS=$vp node "$(dirname "$0")/shots.mjs" "$out" "${BASE:-http://127.0.0.1:8787}" "$@" >/dev/null || exit 1
python -I - "$out" <<'PY'
import sys, glob
from PIL import Image
for f in glob.glob(sys.argv[1] + '/*.png'):
    if '__' in f: continue
    im = Image.open(f); w, h = im.size; step = 1800 if w > 800 else 2400
    for i in range(0, h, step):
        im.crop((0, i, w, min(h, i + step))).save(f[:-4] + '__%d.png' % (i // step))
    print(f[-40:], w, h)
PY

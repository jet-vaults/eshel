"""One-off: picks the images used on the site from the crawl in _source/images and writes
src/content/media.json for tools/images.py. Indices refer to each crawl group's image list
(images >= 200px wide, in page order). First entry of each project is its hero.

Images were checked by eye: several old project pages reuse renders of *other* projects
(e.g. Neot Navon's slider includes Rechasim and Dania images). Those were left out here and
listed in CONTENT_REVIEW.md."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / '_source' / 'images'
man = json.loads((SRC / 'manifest.json').read_text(encoding='utf-8'))

def grp(g):
    return [x for x in man[g] if x['w'] >= 200]

PROJECTS = {
    'neot-navon':        ('project-neot-navon-haifa', [2, 6, 7, 8, 9, 10, 11]),
    'kava':              ('project-tiberias-mul-arbel', [5, 3, 2, 6, 7, 8, 9, 10, 11, 12, 4]),
    'elad-center':       ('project-elad-center', [5, 3, 4, 6]),
    'ahuzat-yaar':       ('project-ahuzat-yaar-nofit', [5, 6, 3, 7, 8]),
    'hapharsa':          ('project-hapharsa-rechasim', [2, 7, 6, 4, 5, 3]),
    'rova-alonim':       ('project-rova-alonim', [6, 5, 3, 4]),
    'rova-alonim-villas': ('project-rova-alonim-tzmudei-karka', [5, 2, 6, 7, 8, 9, 10, 11, 12, 4]),
    'nofim':             ('project-nofim', [4, 2, 5, 3, 6]),
    'beit-amichai':      ('project-beit-amichai-akko', [4, 2, 5, 6, 7]),
    'dania':             ('project-dania-hayeruka', [5]),
    'migdalei-hanasi':   ('project-migdalei-hanasi', [5, 3, 6, 4]),
    'terrace':           ('project-terrace', [2, 5, 3, 4]),
    'the-valley':        ('project-the-valley', [3, 2]),
    'shchuna-levana':    ('project-shchuna-levana', [2, 3]),
    'lev-hapisga':       ('project-lev-hapisga', [2, 3, 4]),
    'unew':              ('project-unew', [2, 4, 3]),
    'pisgat-sagi':       ('project-pisgat-sagi', [2]),
    'pisgat-machosh':    ('project-pisgat-machosh', [1]),
}
# Projects whose own pages only carry "coming soon" overlays; clean renders exist on listing pages.
EXTRA = {
    'rechasim': [('projects-planning', 'רכסים-02.jpg'), ('home', 'רכסים-01.jpg')],
    'maar-rechasim': [('projects-planning', 'מרכז-עסקים-ראשי-רכסים-2.jpg')],
}
UR = {  # urban renewal examples (file stems in the urban-renewal group)
    'ur-yokneam': ['diyurmugan-1', 'diyurmugan-2', 'diyurmugan-3', 'diyurmugan-4', 'diyurmugan-5', 'diyurmugan-6'],
    'ur-migdal': ['migdal-1', 'migdal-2', 'migdal-3', 'migdal-4', 'migdal-5', 'migdal-6'],
    'ur-haifa': ['haifa-1', 'haifa-2', 'haifa-3', 'haifa-4', 'haifa-5', 'haifa-6'],
}
PARTNERS = {  # names read off the logo artwork itself
    'mohs': 'Untitled-4-01.jpg', 'fibi': 'Untitled-4-02-2.jpg', 'discount': 'Untitled-4-03-2.jpg',
    'horowitz': 'Untitled-4-04-2.jpg', 'jerusalem': 'Untitled-4-05-2.jpg', 'hapoalim': 'Untitled-4-08-2.jpg',
    'geshem': 'Untitled-4-09-2.jpg', 'megid': 'partners-1.png', 'ravitz': 'partners-2.png',
    'yedidut': 'partners-3.png', 'leumi': 'partners-4.png',
}

media = {}
def add(mid, item, **kw):
    media[mid] = {'src': '_source/images/' + item['file'], **kw}

for slug, (g, idx) in PROJECTS.items():
    items = grp(g)
    for n, i in enumerate(idx):
        add(f'{slug}-{n}', items[i])
for slug, files in EXTRA.items():
    for n, (g, f) in enumerate(files):
        add(f'{slug}-{n}', next(x for x in man[g] if x['file'].endswith('/' + f)))
for mid, stems in UR.items():
    for n, s in enumerate(stems):
        add(f'{mid}-{n}', next(x for x in man['urban-renewal'] if x['file'].split('/')[-1].startswith(s + '.')))
for mid, f in PARTNERS.items():
    media[f'partner-{mid}'] = {'src': '_source/images/home/' + f, 'widths': [320], 'trim': True}

(ROOT / 'src/content').mkdir(parents=True, exist_ok=True)
(ROOT / 'src/content/media.json').write_text(json.dumps(media, ensure_ascii=False, indent=1), encoding='utf-8')
print(len(media), 'images selected')

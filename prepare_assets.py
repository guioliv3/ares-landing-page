"""Create web derivatives of the supplied client assets. Requires Pillow."""
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import json

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / 'assets-source'
OUT = ROOT / 'public' / 'images'
OUT.mkdir(parents=True, exist_ok=True)
selections = {
    'hero': 'fachada-tecido.png',
    'pool': '*21_PISCINA ADULTO*',
    'gourmet': '*20_AREA DO CHURRASCO*',
    'fitness': '*19_FITNESS*',
    'kids': '*11_ESPAÇO KIDS*',
    'party': '*15_SALAO DE FESTAS*',
    'living': '*26_LIVING*',
    'suite': '*27_SUITE*',
    'balcony': '*28_SACADA*',
    'access': '*06_ACESSO_EF2*',
    'lobby': '*07_LOBBY*',
    'region': '*01_FOTOMONTAGEM*',
    'region-2': '*02_FOTOMONTAGEM*',
    'plan-a': '*05_PH_APTO A_EF-V2*',
    'plan-b': '*06_PH_APTO B_EF-V2*',
}
manifest = []
contact = Image.new('RGB', (900, 240 * 5), '#eeeae2')
draw = ImageDraw.Draw(contact)
for index, (name, pattern) in enumerate(selections.items()):
    source = next(SOURCE.rglob(pattern))
    with Image.open(source) as original:
        original = ImageOps.exif_transpose(original).convert('RGB')
        for suffix, size in [('', 1920 if name == 'hero' else 1600), ('-small', 720)]:
            resized = original.copy()
            resized.thumbnail((size, size), Image.Resampling.LANCZOS)
            resized.save(OUT / f'{name}{suffix}.webp', quality=86, method=6)
        preview = ImageOps.contain(original, (290, 205))
        x, y = (index % 3) * 300, (index // 3) * 240
        contact.paste(preview, (x, y))
        draw.text((x + 8, y + 210), name, fill='#122321')
        manifest.append({'name': name, 'source': str(source.relative_to(ROOT)), 'width': original.width, 'height': original.height})
contact.save(SOURCE / 'contact-sheet.jpg', quality=85)
(SOURCE / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(manifest, ensure_ascii=False, indent=2))

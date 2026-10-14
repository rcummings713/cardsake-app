"""Build original vector stickers and opt-in animated GIFs. Asset tooling only.

Requires Pillow, Node and the project's Playwright installation. Asset tooling only.
All shapes below are original project artwork; no external catalog is copied.
"""
from pathlib import Path
import math
import subprocess
import tempfile
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / 'public' / 'gifs'
ROOT.mkdir(parents=True, exist_ok=True)
COLORS = ['#a76568', '#b48a58', '#788269', '#caa79e', '#8d737b']

def heart(x, y, scale, color):
    return f'<path transform="translate({x} {y}) scale({scale})" fill="{color}" d="M0 8C-34-16-34-43-13-43C-5-43 0-37 0-31C4-46 27-49 31-30C35-13 15 1 0 8Z"/>'

def artwork(name, t):
    wave = math.sin(t * math.tau)
    parts = []
    if name == 'hearts':
        for i, (x,y,s) in enumerate([(128,155,1.4),(65,100,.65),(194,90,.55),(190,190,.4)]):
            parts.append(heart(x, y+wave*(6+i*2), s, COLORS[i]))
    elif name == 'confetti':
        parts.append('<path d="M83 180L105 105L160 162Z" fill="#caa79e" stroke="#805b48" stroke-width="2"/>')
        for i in range(18):
            angle=i*2.399
            x=137+math.cos(angle)*(43+i*2)
            y=89+math.sin(angle)*(28+i*2)+wave*(4+i%3)
            parts.append(f'<rect x="{x}" y="{y}" width="5" height="11" rx="1" fill="{COLORS[i%5]}" transform="rotate({i*27+wave*8} {x} {y})"/>')
    elif name == 'flowers':
        parts.append('<g fill="none" stroke="#6a7b58" stroke-width="4"><path d="M125 207Q128 155 90 81M125 207L144 72M125 207Q148 157 179 122"/><path d="M121 172Q88 142 86 165Q92 183 121 180M135 166Q172 146 166 166Q159 180 132 181"/></g>')
        for i,(x,y) in enumerate([(88,79),(144,69),(179,120)]):
            parts.append(f'<g transform="rotate({wave*3} {x} {y})">')
            for a in range(0,360,60):
                parts.append(f'<ellipse cx="{x}" cy="{y-12}" rx="9" ry="15" fill="{COLORS[i]}" transform="rotate({a} {x} {y})"/>')
            parts.append(f'<circle cx="{x}" cy="{y}" r="9" fill="#d9ba70"/></g>')
        parts.append('<path d="M103 196Q128 183 150 196L138 223H115Z" fill="#dfcac4"/>')
    elif name == 'stars':
        for i,(x,y,s) in enumerate([(128,120,45),(65,65,18),(192,78,24),(185,190,16),(63,181,23)]):
            scale=1+wave*.08*(1 if i%2 else -1)
            parts.append(f'<path fill="{COLORS[i%5]}" transform="translate({x} {y}) scale({scale})" d="M0 {-s}Q5-5 {s} 0Q5 5 0 {s}Q-5 5 {-s} 0Q-5-5 0 {-s}Z"/>')
    elif name == 'cheers':
        for i in [0,1]:
            angle=(-16 if i==0 else 16)+wave*3
            x=91 if i==0 else 165
            parts.append(f'<g transform="rotate({angle} {x} 130)" stroke="#8f725b" stroke-width="3" fill="none"><path d="M{x-20} 68H{x+20}L{x+15} 132Q{x} 151 {x-15} 132Z" fill="#f2e6ce"/><path d="M{x} 146V192M{x-23} 197Q{x} 187 {x+23} 197"/><path d="M{x-18} 93H{x+18}"/></g>')
        parts.append('<path d="M126 40V25M110 47L102 35M146 47L154 35" stroke="#b48a58" stroke-width="3"/>')
    else:
        parts.append(heart(130,150,1.7,'#caa79e'))
        parts.append(f'<g fill="none" stroke="#805b48" stroke-width="6" stroke-linecap="round"><path d="M60 {144+wave*3}Q104 194 149 153M196 {144-wave*3}Q153 195 107 153"/><path d="M111 107v1M145 107v1"/><path d="M120 124Q128 132 137 124"/></g>')
    return '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><rect width="256" height="256" rx="128" fill="#faf4ed"/>'+''.join(parts)+'</svg>'

with tempfile.TemporaryDirectory(prefix='dcb-stickers-') as temp:
    folder=Path(temp)
    names=['hearts','confetti','flowers','stars','cheers','hug']
    for name in names:
        (ROOT / f'{name}.svg').write_text(artwork(name,0))
        for frame in range(16):
            (folder/f'{name}-{frame:02}.svg').write_text(artwork(name,frame/16))
    subprocess.run(['node',str(Path(__file__).with_name('render-sticker-frames.mjs')),temp],check=True)
    for name in names:
        frames=[Image.open(folder/f'{name}-{i:02}.png').convert('RGB').quantize(colors=64) for i in range(16)]
        frames[0].save(ROOT / f'{name}.gif',save_all=True,append_images=frames[1:],duration=100,loop=0,optimize=False)
print('Built six original GIFs and their static vector posters.')

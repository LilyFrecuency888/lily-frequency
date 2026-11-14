"""Genera íconos, splash y gráficos de tienda. Uso: python3 tools/iconos.py (desde la carpeta del proyecto)"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, glob
BG=(18,15,26); LILA=(201,167,255); ROSA=(255,159,210); MENTA=(143,240,208)
def motif(size, bg=True, scale=1.0):
    S=size*4; im=Image.new("RGBA",(S,S),BG+(255,) if bg else (0,0,0,0)); cx=cy=S/2; R=S*0.30*scale
    glow=Image.new("RGBA",(S,S),(0,0,0,0)); gd=ImageDraw.Draw(glow)
    gd.ellipse([cx-R*1.3,cy-R*1.3,cx+R*1.3,cy+R*1.3],fill=LILA+(90,)); im.alpha_composite(glow.filter(ImageFilter.GaussianBlur(S*0.05)))
    d=ImageDraw.Draw(im)
    for k in range(5):
        a=-math.pi/2+k*2*math.pi/5; px=cx+math.cos(a)*R*0.55; py=cy+math.sin(a)*R*0.55; pr=R*0.48
        d.ellipse([px-pr,py-pr,px+pr,py+pr],fill=(LILA if k%2==0 else ROSA)+(235,))
    d.ellipse([cx-R*0.32,cy-R*0.32,cx+R*0.32,cy+R*0.32],fill=BG+(255,))
    pts=[(cx-R*0.26+i*(R*0.52)/60, cy+math.sin(i/60*2*math.pi*1.5)*R*0.12) for i in range(61)]
    d.line(pts,fill=MENTA+(255,),width=int(S*0.018*scale),joint="curve")
    return im.resize((size,size),Image.LANCZOS)
res="android/app/src/main/res"
for dpi,px in {"mdpi":48,"hdpi":72,"xhdpi":96,"xxhdpi":144,"xxxhdpi":192}.items():
    ic=motif(px); m=Image.new("L",(px,px),0); ImageDraw.Draw(m).rounded_rectangle([0,0,px-1,px-1],radius=px*0.22,fill=255)
    sq=ic.copy(); sq.putalpha(m); sq.save(f"{res}/mipmap-{dpi}/ic_launcher.png")
    rm=Image.new("L",(px,px),0); ImageDraw.Draw(rm).ellipse([0,0,px-1,px-1],fill=255); rd=ic.copy(); rd.putalpha(rm); rd.save(f"{res}/mipmap-{dpi}/ic_launcher_round.png")
    motif(int(px*108/48),bg=False,scale=0.72).save(f"{res}/mipmap-{dpi}/ic_launcher_foreground.png")
open(f"{res}/values/ic_launcher_background.xml","w").write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#120F1A</color>\n</resources>\n')
for f in glob.glob(f"{res}/drawable*/splash.png"):
    w,h=Image.open(f).size; sp=Image.new("RGBA",(w,h),BG+(255,)); s=int(min(w,h)*0.35); sp.alpha_composite(motif(s,bg=False),((w-s)//2,(h-s)//2)); sp.convert("RGB").save(f)
motif(512).convert("RGB").save("store/icono-512.png")
fg=Image.new("RGBA",(1024,500),BG+(255,)); fg.alpha_composite(motif(380,bg=False),(60,60)); d=ImageDraw.Draw(fg)
try: F=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",72); F2=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",34)
except Exception: F=F2=ImageFont.load_default()
d.text((470,170),"Lily Frequency",font=F,fill=(244,238,255)); d.text((474,270),"Bienestar sonoro",font=F2,fill=LILA)
fg.convert("RGB").save("store/grafico-destacado-1024x500.png")
print("íconos listos")

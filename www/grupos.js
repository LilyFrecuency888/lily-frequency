/* Lily Frequency · navegación en dos niveles: grupo → categoría */
(function(){
"use strict";
if(typeof CATS==="undefined"||typeof renderCats!=="function")return;
var caja=document.getElementById("cats"); if(!caja)return;

var GRUPOS=[
 {n:"Para hoy", i:"✦", c:["Todos","Favoritos","Guiadas"]},
 {n:"Mente",    i:"◎", c:["Aprendizaje y memoria","Mente","Equilibrio mental","Ondas","Hemisferios"]},
 {n:"Emoción",  i:"♡", c:["Balance emocional","Emociones","Fuerza interior","Amor y relaciones","Subliminales"]},
 {n:"Cuerpo",   i:"✿", c:["Cuerpo y vitalidad","Cuerpo","Belleza total","Bioenergética","Sueño","Energía"]},
 {n:"Energía",  i:"≋", c:["Equilibrio energético","Blindaje energético","Resiliencia energética","Chakras","Planetas","Diapasones","Solfeggio"]},
 {n:"Espíritu", i:"✡", c:["ADN Punto Cero","ADN y conciencia","Conexión espiritual","Espiritual","Abundancia"]},
 {n:"Míos",     i:"♪", c:["Tarareo","Música","Acompañamiento"]}
];

var st=document.createElement("style");
st.textContent=[
 ".grupos{display:flex;gap:6px;overflow-x:auto;margin-bottom:8px;padding-bottom:2px}",
 ".grupos button{flex:none;display:flex;align-items:center;gap:5px;padding:8px 14px;border-radius:14px;",
   "background:var(--surface2);border:1px solid var(--line);font:700 .84rem Quicksand,inherit;color:var(--muted);cursor:pointer}",
 ".grupos button b{font-weight:400;opacity:.85}",
 ".grupos button.on{background:linear-gradient(135deg,rgba(201,167,255,.3),rgba(255,159,210,.2));",
   "border-color:var(--lila);color:var(--fg)}",
 ".cats{margin-bottom:12px}",
 ".catvacia{color:var(--muted);font-size:.86rem;padding:6px 2px}"
].join("");
document.head.appendChild(st);

var fila=document.createElement("div");
fila.className="grupos";
caja.parentNode.insertBefore(fila,caja);

function vivos(g){
  var r=[];
  for(var i=0;i<g.c.length;i++)if(CATS.indexOf(g.c[i])>=0)r.push(g.c[i]);
  return r;
}
function sueltas(){
  var usadas={};
  GRUPOS.forEach(function(g){g.c.forEach(function(c){usadas[c]=1})});
  return CATS.filter(function(c){return !usadas[c]});
}
function lista(){
  var L=[];
  GRUPOS.forEach(function(g){var v=vivos(g);if(v.length)L.push({n:g.n,i:g.i,c:v})});
  var s=sueltas();
  if(s.length)L.push({n:"Otros",i:"•",c:s});
  return L;
}

var gIdx=0;
try{var guardado=store.get("lf-grupo",null);}catch(e){}
function buscaGrupo(c){
  var L=lista();
  for(var i=0;i<L.length;i++)if(L[i].c.indexOf(c)>=0)return i;
  return 0;
}

function pintaGrupos(){
  var L=lista();
  if(gIdx>=L.length)gIdx=0;
  fila.innerHTML=L.map(function(g,i){
    return '<button type="button" data-g="'+i+'" class="'+(i===gIdx?"on":"")+'"><b>'+g.i+'</b>'+esc(g.n)+'</button>'}).join("");
}
fila.onclick=function(e){
  var b=e.target.closest("[data-g]"); if(!b)return;
  gIdx=+b.dataset.g;
  try{store.set("lf-grupo",lista()[gIdx].n)}catch(x){}
  var g=lista()[gIdx];
  if(g.c.indexOf(cat)<0){cat=g.c[0];}
  pintaGrupos();renderCats();renderLib();
};

/* la fila de categorías ahora solo muestra las del grupo activo */
window.renderCats=function(){
  var L=lista(), g=L[gIdx]||L[0];
  if(!g){caja.innerHTML="";return}
  caja.innerHTML=g.c.map(function(c){
    return '<button type="button" aria-pressed="'+(c===cat)+'" data-c="'+esc(c)+'">'+esc(c)+'</button>'}).join("");
};
caja.onclick=function(e){
  var b=e.target.closest("button"); if(!b||!b.dataset.c)return;
  cat=b.dataset.c; renderCats(); renderLib();
};

/* arranque: respeta el grupo guardado */
(function(){
  var L=lista();
  if(guardado){for(var i=0;i<L.length;i++)if(L[i].n===guardado){gIdx=i;break}}
  var g=L[gIdx]||L[0];
  if(g&&g.c.indexOf(cat)<0)cat=g.c[0];
  pintaGrupos();renderCats();renderLib();
})();

window.LilyG={refrescar:function(){
  gIdx=buscaGrupo(cat);pintaGrupos();renderCats();renderLib()}};
})();

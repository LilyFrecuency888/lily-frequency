/* Lily Frequency · Belleza y presencia, Acompañamiento del dolor,
   Balance mental, Balance emocional, Blindaje energético, Amor y relaciones */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].split("|").map(function(s){
    var p=s.split(","),f=+p[0],b=+p[1];
    return {f:f,b:b,mode:b>0?"binaural":"pure",dur:+p[2]*60,label:p[3]}})})})}

/* ============ 5 · BELLEZA Y PRESENCIA ============ */
mk("Belleza y presencia",[
["bel-interior","Belleza interior","Lo que se nota antes que la cara: cómo te sientes contigo. 528 y 639","528,8,8,Aprecio|639,8,8,Ternura"],
["bel-vitalidad","Vitalidad y frescura","Para cuando te ves cansada en el espejo. Descanso real, que es lo que de verdad se nota","285,8,8,Reparar|432,10,8,Frescura|528,10,6,Brillo"],
["bel-ritual-piel","Fondo para tu ritual de piel","Ponla mientras te haces tu rutina de cara. Convierte cinco minutos en un momento tuyo","528,10,6,Cuidado|639,8,6,Suavidad"],
["bel-ritual-cabello","Fondo para tu ritual de cabello","Para el cepillado o el tratamiento. Veinte minutos de cuidado sin prisa","432,9,10,Calma|528,8,10,Cuidado"],
["bel-ritual-unas","Fondo para tu ritual de manos","Mientras te arreglas las uñas. Corta y agradable","528,10,8,Manos"],
["bel-elasticidad","Elasticidad y movimiento","Fondo para estirar. Ponla y acompaña cada estiramiento con la exhalación","174,6,6,Soltar|285,8,8,Aflojar|432,9,6,Soltar más"],
["bel-rostro","Rostro relajado","La mandíbula, el entrecejo y los ojos. Ahí se guarda la tensión que sí se ve","741,8,6,Mandíbula|852,7,6,Entrecejo|432,9,6,Soltar la cara"],
["bel-magnetico","Cuerpo magnético","No cambia tu cuerpo: cambia cómo lo habitas. Postura, presencia y seguridad","396,10,5,Piso|528,12,8,Habitar|639,10,5,Presencia"],
["bel-voz","Voz dulce e inspiradora","Garganta suelta y respiración baja. Antes de hablar en público o grabar","741,8,8,Garganta|432,9,6,Respiración baja|639,8,5,Calidez"],
["bel-energia-mag","Energía magnética y atractiva","Lo que hace que la gente se acerque es la calma, no el esfuerzo. Plexo y corazón","528,10,8,Plexo|639,9,8,Corazón"],
["bel-frescura","Frescura y presencia limpia","Ritual de ducha o de cambio de ropa. Para marcar el antes y el después del día","285,9,6,Limpiar|432,10,6,Fresco"]
]);

/* ============ 6 · ACOMPAÑAMIENTO DEL DOLOR ============ */
mk("Acompañamiento del dolor",[
["dol-local","Acompañamiento local","Para una zona concreta. Pon la mano ahí y respira hacia ese punto. Acompaña, no trata","174,0,6,Tono de alivio|285,6,8,Respirar hacia la zona|136.1,5,6,Quietud"],
["dol-fondo","Acompañamiento de fondo","Sesión larga para días difíciles. No quita el dolor: te ayuda a sobrellevarlo","174,0,8,Suelo|174,5,12,Theta|285,5,10,Reparar|136.1,4,8,Reposo"],
["dol-muscular","Dolor muscular","Después de esfuerzo o de un día tenso. Pulso de cuerpo con theta","128,0,6,Tono de cuerpo|174,6,10,Soltar|285,6,8,Recuperar"],
["dol-articulaciones","Articulaciones rígidas","Para la rigidez de la mañana o del frío. Muévete despacio mientras suena","128,0,5,Cuerpo|174,5,10,Aflojar|285,7,8,Movilidad"],
["dol-general","Malestar general","Cuando no sabes dónde duele exactamente. Bajar todo el sistema","174,0,5,Piso|285,5,10,Calma|136.1,4,10,Reposo"],
["dol-noche","Dolor de noche","Para las noches en que el dolor no deja dormir. Delta largo, volumen bajo","174,5,10,Theta|174,3,15,Bajar|174,2,20,Delta"],
["dol-piel","Piel irritada","Acompaña la molestia de la piel sensible. Frecuencias suaves y frescas","285,7,8,Calma|528,7,8,Reparar"],
["dol-tension","Tensión de cuello y hombros","La zona donde cae el estrés. Suelta la mandíbula mientras suena","741,8,6,Garganta|174,6,8,Hombros|432,9,6,Soltar"],
["dol-cabeza","Pesadez de cabeza","Para la presión del día frente a pantallas. Baja el estímulo","852,6,5,Entrecejo|432,8,8,Bajar|136.1,5,6,Quietud"]
]);

/* ============ 7 · BALANCE MENTAL ============ */
mk("Balance mental",[
["bm-fuerza","Fuerza interior · de fondo","Sesión larga para reconstruir cuando te sientes sin recursos","396,8,8,Raíz|528,9,10,Plexo|639,8,8,Corazón|963,7.83,5,Amplitud"],
["bm-bienestar","Bienestar emocional","El estado base al que quieres volver. Ponla como mantenimiento","528,9,10,Bienestar|639,9,10,Calidez"],
["bm-sentirse-bien","Sentirse bien · de fondo","Para días grises sin motivo. No te obliga a estar alegre, solo abre un poco","432,10,8,Abrir|528,11,8,Ánimo|639,10,6,Suavidad"],
["bm-satisfaccion-sist","Satisfacción · de fondo","Para la sensación de que nunca es suficiente. Trabaja el recibir y el soltar la exigencia","396,8,8,Soltar la exigencia|528,9,10,Suficiencia|639,8,6,Gratitud"],
["bm-satisfaccion-agudo","Satisfacción · inmediato","Ocho minutos para cerrar el día reconociendo lo que sí hiciste","528,10,4,Reconocer|639,9,4,Agradecer"],
["bm-unidad","Unidad interior","Para cuando te sientes partida entre lo que quieres y lo que haces","432,8,8,Reunir|528,7,8,Integrar|963,7.83,6,Unidad"],
["bm-alma","Bienestar del alma","La sesión silenciosa. Poco estímulo, mucho espacio","963,7.83,10,Amplitud|432,6,10,Silencio"],
["bm-equilibrio-agudo","Equilibrio mental · inmediato","Siete minutos para recuperar el eje a media crisis","396,10,3,Bajar|432,9,4,Centro"]
]);

/* ============ 16 · BALANCE EMOCIONAL ============ */
mk("Balance emocional",[
["be-aceptacion","Aceptación","Para lo que no puedes cambiar. No es resignarse: es dejar de pelear con lo que ya pasó","396,8,8,Soltar la lucha|639,8,8,Aceptar"],
["be-concentracion","Concentración emocional","Cuando la emoción no te deja pensar. Primero el cuerpo, después la cabeza","174,6,5,Cuerpo|432,10,6,Despejar|432,14,6,Pensar"],
["be-desapego","Desapego","Soltar sin cerrar el corazón. Para personas, resultados y expectativas","396,7,8,Soltar|639,8,8,Querer sin aferrar"],
["be-serenidad","Serenidad","El punto quieto. Para después de una tormenta emocional","432,9,10,Calma|136.1,7.83,10,Quietud"],
["be-equilibrio","Equilibrio emocional","Ni apagada ni desbordada. Mantenimiento para quien siente mucho","432,10,10,Centro|528,9,10,Sostener"],
["be-valor","Valor","Para antes de lo que te da miedo. Raíz firme y plexo encendido","396,12,6,Piso firme|528,14,8,Fuerza"],
["be-confianza","Confianza","En ti y en el proceso. Para cuando dudas de cada paso","528,10,8,En mí|963,7.83,6,En el proceso"],
["be-armonia","Armonía","Para que las partes de ti dejen de discutir entre sí","432,9,8,Armonizar|639,8,8,Acordar"],
["be-gratitud","Gratitud profunda","Nombra tres cosas mientras suena. Sencillo y poderoso","528,9,8,Agradecer|639,8,8,Recibir"],
["be-alegria","Alegría","Alfa alto, sin acelerar. La alegría tranquila, no la eufórica","528,11,8,Ánimo|432,12,8,Ligereza"],
["be-intuicion","Intuición","Para escuchar lo que ya sabes. Theta con 852","852,6,10,Escuchar|963,6,8,Confirmar"],
["be-paz","Paz interior","La más silenciosa de todas. Veinte minutos sin nada que hacer","136.1,7,10,Paz|432,6,10,Silencio"]
]);

/* ============ 11 · BLINDAJE ENERGÉTICO ============ */
mk("Blindaje energético",[
["bli-general","Protección general","Antes de salir, de dar sesión o de un día con mucha gente. Raíz y corona juntas","396,7.83,6,Raíz|963,7.83,6,Corona|432,7.83,5,Sellar"],
["bli-pantallas","Saturación de pantallas","Para cuando el día de dispositivos te dejó con la cabeza zumbando","432,8,8,Bajar el ruido|136.1,7.83,10,Ritmo natural"],
["bli-celular","Blindaje celular","Enfocada en el cuerpo. Tono grave y constante con pulso de tierra","174,7.83,8,Cuerpo|285,7.83,8,Células"],
["bli-mental","Blindaje mental","Para no absorber el drama ajeno. Especial para terapeutas y para quien escucha mucho","741,8,8,Filtro|852,7,8,Discernir"],
["bli-sueno","Blindaje del sueño","Para dormir sin absorber. Ponla al acostarte y déjala","396,6,8,Soltar el día|174,4,12,Protección en delta"],
["bli-geopatia","Equilibrio del lugar","Para el espacio: cuarto, consultorio u oficina. Ponla en parlante","136.1,7.83,15,Armonizar el espacio|432,7.83,10,Asentar"],
["bli-sutil","Blindaje sutil","El más ligero. Para usar seguido, de fondo, sin que pese","963,7.83,15,Campo sutil"],
["bli-planetario","Blindaje planetario","Los tonos de Tierra, Sol y Saturno: piso, centro y límite","194.18,0,6,Tierra|126.22,0,6,Sol|147.85,0,6,Saturno"]
]);

/* ============ 12 · AMOR Y RELACIONES ============ */
mk("Amor y relaciones",[
["amo-abrir","Abrirse al amor","Para dejar de cerrar la puerta sin darte cuenta. 639 con corazón","639,8,10,Abrir|528,8,8,Merecer"],
["amo-pareja","Para la pareja","Escúchenla juntos si pueden. Si no, escúchala pensando en el vínculo","639,8,10,Vínculo|528,8,8,Ternura"],
["amo-reconciliar","Reconciliación","Antes de la conversación difícil. Baja la defensa","396,8,6,Soltar la defensa|639,8,10,Acercarse"],
["amo-limites","Límites con amor","Decir que no sin romper el vínculo. Plexo y corazón a la vez","528,10,8,Mi lugar|639,9,8,Sin romper"],
["amo-desapego","Desapego sano","Para el vínculo que te tiene esperando. Soltar sin odiar","396,7,10,Soltar|639,7,8,Desde el cariño"],
["amo-familia","Vínculo familiar","Para la relación con padres, hijos o hermanos. Incluye lo heredado","396,6,8,Lo heredado|639,8,10,El vínculo de hoy"],
["amo-perdonar","Perdonar","A otro o a ti. No obliga a nada, solo abre espacio","396,6,8,Lo que pesa|639,7,10,Soltar la deuda"],
["amo-duelo","Duelo de una relación","Para cuando terminó. No busca animarte: te acompaña","174,5,8,Sostener|285,6,10,Cuidar|639,7,8,Agradecer lo que fue"],
["amo-amistad","Amistades","Para cuidar a los que eliges. 639 en alfa, ligera","639,10,12,Amistad"],
["amo-reencuentro","Reencuentro contigo","La relación más larga de tu vida. Antes de cualquier otra","528,9,10,Conmigo|963,7.83,8,En paz"]
]);

/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Belleza y presencia","Acompañamiento del dolor","Balance mental","Balance emocional","Blindaje energético","Amor y relaciones"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();

/* Lily Frequency · Ciclos y tiempos
   Portado de la zona de miembros de la web. Cada paso conserva su texto guiado. */
(function(){
"use strict";
if(typeof PROGRAMS==="undefined"||typeof CATS==="undefined")return;
var OUT=[];
/* pasos: [frecuencia, pulso, minutos, etiqueta, texto guiado] ; pulso 0 = tono puro */
function mk(cat,arr){arr.forEach(function(a){
  OUT.push({id:a[0],cat:cat,name:a[1],desc:a[2],steps:a[3].map(function(s){
    return {f:s[0],b:s[1],mode:s[1]>0?"binaural":"pure",dur:s[2]*60,label:s[3],g:s[4]||""}})})})}

mk("Fases de la luna",[
 ["cic-01-luna-nueva-sembrar","Luna nueva · Sembrar","La noche de luna nueva. Para poner intención, no para pedir",[
  [174,6,3,"Oscuridad","No hay luna. Todo está por empezar. Quédate en lo oscuro un rato sin llenarlo."],
  [528,7,10,"Sembrar","Una sola intención para este ciclo. Dila en voz baja, en presente."],
  [136.1,6,5,"Enterrarla","Déjala en lo oscuro. No la revises mañana."]]],
 ["cic-02-luna-creciente-empujar","Luna creciente · Empujar","Los días en que hay que hacer. Para sostener el esfuerzo",[
  [432,10,3,"Mirar","Va creciendo. Lo tuyo también."],
  [528,9,10,"Actuar","Qué paso toca hoy. Uno concreto."],
  [639,10,4,"Empujar","Hazlo hoy, no mañana."]]],
 ["cic-03-luna-llena-ver","Luna llena · Ver","La noche de más luz. Para mirar lo que ya no se puede esconder",[
  [963,8,3,"Luz","Todo se ve. Eso incluye lo que no querías ver."],
  [852,6,12,"Mirarlo","Qué se te está mostrando este mes. Sin taparlo."],
  [639,7,5,"Agradecer","Agradece lo que llegó y lo que no."]]],
 ["cic-04-luna-llena-soltar","Luna llena · Soltar","La otra cara de la llena. Para dejar ir",[
  [396,7,3,"Nombrar","Qué sueltas este ciclo. Una cosa."],
  [417,6,12,"Soltar","No lo pelees. Solo abre la mano."],
  [963,7,5,"Cerrar","Lo que se fue, se fue."]]],
 ["cic-05-luna-menguante-limpiar","Luna menguante · Limpiar","Los días de quitar, no de poner",[
  [432,8,3,"Revisar","Qué sobra en tu vida ahora mismo."],
  [741,7,10,"Quitar","Una cosa que vas a quitar esta semana. Decídela aquí."],
  [528,8,4,"Aligerar","Se siente más liviano. Así se queda."]]],
 ["cic-06-luna-oscura-descansar","Luna oscura · Descansar","Los dos días antes de la nueva. Para no hacer nada",[
  [174,6,4,"Parar","Hoy no se empuja. No es flojera: es parte del ciclo."],
  [136.1,4,14,"Vacío",""],
  [136.1,5,4,"Quedarte","Mañana tampoco."]]],
 ["cic-07-eclipse","Eclipse","Para los días de eclipse, cuando todo se siente raro",[
  [432,8,3,"Reconocer","Se siente desordenado. Es normal estos días."],
  [417,6,10,"No decidir","No es día de decisiones grandes. Solo de observar."],
  [963,7,5,"Esperar","Pasa. Siempre pasa."]]],
 ["cic-08-ciclo-completo","Ciclo completo","Veintiocho minutos recorriendo todas las fases, uno por día",[
  [174,6,5,"Nueva","Siembra."],
  [528,9,7,"Creciente","Empuja."],
  [963,7,7,"Llena","Mira."],
  [741,7,6,"Menguante","Limpia."],
  [136.1,5,3,"Oscura","Descansa."]]]
]);

mk("Zodiaco",[
 ["cic-09-aries","Aries","Arranque y coraje. Para empezar algo que llevas posponiendo",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [528,10,10,"Fuego","Qué has estado evitando empezar. Hoy das el primer paso, aunque sea torpe."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-10-tauro","Tauro","Cuerpo y disfrute. Para volver a los sentidos",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [174,8,10,"Tierra","Qué te da gusto de verdad, con el cuerpo. Date una de esas hoy, sin justificarte."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-11-geminis","Géminis","Palabra y curiosidad. Para decir y preguntar",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [741,10,10,"Aire","Hay algo que quieres preguntar y no preguntas. Pregúntalo."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-12-cancer","Cáncer","Casa y memoria. Para lo de adentro y lo de atrás",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [639,7,10,"Agua","Trae tu casa de la infancia. Qué sigue vivo de ahí, para bien y para mal."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-13-leo","Leo","Brillo y dignidad. Para dejar de achicarse",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [528,9,10,"Fuego","Dónde te estás haciendo chiquita para que nadie se incomode. Ocupa tu tamaño."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-14-virgo","Virgo","Orden y servicio. Para acomodar lo que está revuelto",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [432,10,10,"Tierra","Una cosa pequeña y concreta que puedes dejar ordenada hoy."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-15-libra","Libra","Vínculo y justicia. Para las relaciones desparejas",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [639,8,10,"Aire","En qué vínculo estás dando más de lo que recibes. Míralo sin culpar a nadie."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-16-escorpio","Escorpio","Fondo y transformación. Para lo que no se dice",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [417,6,10,"Agua","Qué sabes de ti que no le has dicho a nadie. No lo digas: solo míralo."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-17-sagitario","Sagitario","Horizonte y sentido. Para cuando todo se siente chico",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [963,9,10,"Fuego","Hacia dónde quieres ir que ni siquiera te has permitido nombrar."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-18-capricornio","Capricornio","Estructura y tiempo largo. Para construir con paciencia",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [174,8,10,"Tierra","Qué estás construyendo que no se va a ver este año. Sostenlo igual."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-19-acuario","Acuario","Libertad y comunidad. Para salirte del molde",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [852,10,10,"Aire","Qué haces solo porque se espera de ti. Qué pasaría si dejaras de hacerlo."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]],
 ["cic-20-piscis","Piscis","Disolver y soñar. Para soltar los bordes",[
  [432,9,3,"Entrar","Cierra los ojos. Este mes el cielo trabaja este tema."],
  [136.1,5,10,"Agua","Deja de ser alguien por diez minutos. No tienes nombre ni historia aquí."],
  [963,8,4,"Llevarlo","Sal con eso puesto el resto del mes."]]]
]);

mk("Días planetarios",[
 ["cic-21-lunes-luna","Lunes · Luna","El día de lo emocional y lo doméstico. Para empezar la semana desde adentro",[
  [210.42,8,3,"Entrar","Lunes es día de luna: de sentir antes de hacer."],
  [210.42,7,9,"Sentir","Cómo llegas a esta semana, de verdad. No cómo deberías llegar."],
  [174,8,4,"Ordenar","Una cosa de tu casa o de tu cuerpo que vas a atender hoy."]]],
 ["cic-22-martes-marte","Martes · Marte","Acción y empuje. Para lo que requiere agallas",[
  [144.72,12,3,"Entrar","Martes es de Marte: lo que pide fuerza va hoy."],
  [144.72,14,9,"Empujar","Qué conversación o qué tarea has estado evitando. Hoy va."],
  [528,12,3,"Salir","Ve a hacerlo ahora, no mañana."]]],
 ["cic-23-miercoles-mercurio","Miércoles · Mercurio","Palabra, trámite y aprendizaje. Para lo que se comunica",[
  [141.27,12,3,"Entrar","Miércoles es de Mercurio: hoy se habla, se escribe y se arregla papel."],
  [141.27,13,9,"Ordenar","Qué mensaje, qué trámite, qué llamada. Haz la lista aquí."],
  [741,12,3,"Empezar","El primero de la lista, ahora."]]],
 ["cic-24-jueves-jupiter","Jueves · Júpiter","Expansión y abundancia. Para pensar en grande",[
  [183.58,9,3,"Entrar","Jueves es de Júpiter: el día de abrir, no de cerrar."],
  [183.58,8,10,"Abrir","Qué posibilidad has estado descartando por chiquita que te sientes."],
  [963,9,4,"Permitir","Permítela. Nada más eso hoy."]]],
 ["cic-25-viernes-venus","Viernes · Venus","Amor, belleza y placer. Para lo que da gusto",[
  [221.23,8,3,"Entrar","Viernes es de Venus: hoy toca lo que te gusta."],
  [221.23,7,9,"Disfrutar","Algo bonito o rico, hoy, sin productividad de por medio."],
  [639,8,4,"Recibir","Y recíbelo sin devolver nada."]]],
 ["cic-26-sabado-saturno","Sábado · Saturno","Límite y estructura. Para poner orden y decir que no",[
  [147.85,7,3,"Entrar","Sábado es de Saturno: el día de los límites."],
  [147.85,7,10,"Limitar","A qué o a quién le tienes que decir que no. Ensáyalo aquí."],
  [396,8,4,"Sostener","Un límite se pone una vez y se sostiene muchas."]]],
 ["cic-27-domingo-sol","Domingo · Sol","Centro y descanso. Para volver a ti antes de la semana",[
  [126.22,8,3,"Entrar","Domingo es del Sol: hoy vuelves a tu centro."],
  [126.22,7,10,"Centrarte","Quién eres cuando nadie te está pidiendo nada."],
  [528,8,4,"Descansar","Y descansa. Mañana es lunes y eso ya se verá."]]]
]);

mk("Duelo",[
 ["cic-28-los-primeros-dias","Los primeros días","Cuando acaba de pasar y no se puede ni pensar",[
  [396,6,4,"Respirar","No hay nada que hacer hoy. Solo respirar."],
  [136.1,5,16,"Estar",""],
  [432,6,5,"Un poco de aire","Cuando puedas, una respiración más honda. Nada más."]]],
 ["cic-29-hablarle","Hablarle","Para decirle lo que no alcanzaste a decir",[
  [639,7,4,"Traerlo","Trae a esa persona. Siéntala frente a ti."],
  [639,6,12,"Decirlo","Dile lo que no dijiste. En voz alta si puedes, aunque se quiebre."],
  [963,7,5,"Dejarlo ir","Ya está dicho. Déjalo irse por hoy."]]],
 ["cic-30-el-dia-que-duele-mas","El día que duele más","Un cumpleaños, un aniversario, una fecha",[
  [396,7,4,"Reconocer la fecha","Hoy es ese día. Claro que duele."],
  [639,6,12,"Recordar","Trae un recuerdo bueno. Uno solo, completo, con detalles."],
  [528,7,5,"Agradecer","Agradece que existió."]]],
 ["cic-31-cuando-ya-no-se-nota-afuera","Cuando ya no se nota afuera","Meses después, cuando el mundo siguió y tú no",[
  [396,7,4,"Nombrarlo","Los demás siguieron. Tú todavía no. Eso es normal y nadie te lo dice."],
  [136.1,5,12,"Permitirte","No tienes que estar bien en el plazo de nadie."],
  [528,8,5,"Un paso","Una cosa pequeña que sí puedes hacer hoy."]]],
 ["cic-32-duelo-que-no-es-muerte","Duelo que no es muerte","Una separación, un trabajo, una casa, una etapa",[
  [396,7,4,"Nombrarlo","Esto también es duelo, aunque nadie lo llame así."],
  [417,6,12,"Despedirlo","Despídete de eso como si fuera una persona. Porque fue parte de ti."],
  [963,7,5,"Cerrar","Lo que termina deja espacio, aunque hoy el espacio duela."]]],
 ["cic-33-seguir","Seguir","Para cuando empieza a doler menos y da culpa",[
  [639,7,4,"La culpa","Sentirte mejor no es traicionar a nadie."],
  [528,8,10,"Permiso","Date permiso de volver a reírte."],
  [963,8,5,"Llevarlo","Lo que amaste se va contigo, no se queda atrás."]]]
]);


/* ---------- registrar ---------- */
var hay={};
for(var i=0;i<PROGRAMS.length;i++)hay[PROGRAMS[i].id]=1;
for(var j=0;j<OUT.length;j++)if(!hay[OUT[j].id])PROGRAMS.push(OUT[j]);
["Fases de la luna","Zodiaco","Días planetarios","Duelo"].forEach(function(c){
  if(CATS.indexOf(c)<0)CATS.push(c)});
})();

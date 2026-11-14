# Lily Frequency: app Android

## Qué contiene
- `www/index.html`: toda la app (programas, guiadas, intuición, sesiones a distancia, membresía).
- `www/privacidad.html`: política de privacidad. Play Store la pide publicada en una web.
- `android/`: proyecto Android (Capacitor 8, Android 16 / API 36) listo para abrir en Android Studio, con ícono y pantalla de inicio.
- `store/`: ícono de 512 px, gráfico destacado de 1024×500 y textos de la ficha.

## 1. Antes de publicar (obligatorio)
Abre `www/index.html` y, al inicio del script, cambia el bloque `CONFIGURACIÓN`:
- `secret`: una frase secreta tuya. Con ella se generan los códigos mensuales de membresía.
- `adminPin`: tu PIN de terapeuta, que viene en 2468.
- `trialDays`: días de prueba gratis (14).
- `whatsapp`: tu número con código de país, por ejemplo 50255555555, para el botón Pregúntame.
- `free`: los programas abiertos sin membresía.

Después ejecuta `npx cap sync android` para copiar los cambios al proyecto Android.

**Cómo funciona la membresía:** en Cuenta → Modo terapeuta (con tu PIN) ves el código del mes y el del mes siguiente. Ese código se lo envías a quienes pagaron (por Recurrente, PayPal, etc.). El código cambia solo cada mes. Hay 5 días de gracia al iniciar el mes.

## 2A. Generar la app en GitHub (sin instalar nada) — recomendado
1. Crea una cuenta gratis en github.com.
2. Arriba a la derecha toca **+ → New repository**. Nómbralo `lily-frequency`, márcalo **Private** y toca **Create repository**.
3. Toca **uploading an existing file**. Descomprime `lily-frequency.zip`, entra a la carpeta y arrastra **todo su contenido** al navegador (no la carpeta, sino lo que hay dentro). Al final toca **Commit changes**.
4. Revisa si se subió la carpeta `.github`. Si no aparece (algunas computadoras ocultan las carpetas que empiezan con punto): toca **Add file → Create new file**, escribe como nombre `.github/workflows/construir-app.yml`, pega el contenido del archivo `construir-app.yml` y toca **Commit changes**.
5. Firma para Play Store: en **Settings → Secrets and variables → Actions → New repository secret**, crea los 4 secretos que vienen en `LLAVE-PRIVADA-no-compartir.txt` (dentro de `llave-lily-frequency.zip`).
6. Ve a la pestaña **Actions**, entra a **Construir app Android** y toca **Run workflow**. Tarda unos 5 a 8 minutos.
7. Cuando salga el check verde, entra a la ejecución y abajo, en **Artifacts**, descarga:
   - `lily-frequency-apk-prueba`: el `.apk` para instalar en tu celular.
   - `lily-frequency-aab-playstore`: el `.aab` para subir a Play Console.

Cada vez que cambies algo y lo subas, GitHub vuelve a construir la app y sube solo el número de versión.

**La llave de firma** (`lily-frequency-upload.jks`) es la "llave de subida" de tu app. Guárdala junto con el archivo de texto en un lugar seguro, como tu Drive personal, y no la compartas. Como Play Store usa "Firma de apps de Google Play", si algún día la pierdes puedes pedir a Google que la reemplace.

## 2B. Generar la app en tu computadora (Android Studio)
1. Instala Node.js y Android Studio.
2. En esta carpeta, ejecuta `npm install` y luego `npx cap sync android`.
3. Abre la carpeta `android` en Android Studio y espera a que termine Gradle.
4. Para probar: conecta tu celular con depuración USB y toca ▶ Run.
5. Para Play Store: Build → Generate Signed App Bundle → crea tu *keystore*. **Guárdalo junto con su contraseña. Si lo pierdes, no podrás actualizar la app.** El resultado es un archivo `.aab`.

Para cambiar la versión en cada actualización, edita `versionCode` (en GitHub sube solo; en Android Studio súbelo 1) y `versionName` en `android/app/build.gradle`.

## 3. Publicar en Google Play
1. Crea una cuenta en Google Play Console. Es un pago único de USD 25.
2. Si la cuenta es personal y nueva, Google exige una **prueba cerrada con al menos 12 testers durante 14 días** antes de abrir la app al público. Con una cuenta de organización (requiere número D-U-N-S) no aplica.
3. Crea la app con el nombre **Lily Frequency** y súbele el `.aab`.
4. Completa:
   - **Seguridad de los datos:** "No recopila ni comparte datos".
   - **Clasificación de contenido:** el cuestionario.
   - **Política de privacidad:** el enlace donde publicaste `privacidad.html`.
   - **Ficha:** usa los textos de `store/ficha-play-store.md` y las imágenes de `store/`, más 2 a 8 capturas de tu celular.
   - **Apps de salud:** si te pregunta, decláralo como bienestar o relajación. No es un dispositivo médico.
5. Envíala a revisión.

## Recomendaciones para que la aprueben
- En la ficha y los anuncios habla de **bienestar, relajación y acompañamiento**. Google rechaza apps que prometen curar, eliminar enfermedades o reemplazar tratamientos.
- No uses nombres, logos ni listas de programas de otras marcas.
- Los cobros de la membresía van fuera de la app (Recurrente, PayPal) y en la app solo se ingresa el código. Si más adelante quieres cobrar *dentro* de la app, Google exige usar su sistema de facturación.

## Para revisar en tu celular
- Pon la sesión con la pantalla encendida. La app pide mantener la pantalla activa mientras suena. Prueba si en tu modelo el sonido sigue con la pantalla bloqueada.
- Los binaurales solo funcionan con audífonos. Sin audífonos, activa "Sin audífonos (binaural → pulsos)".

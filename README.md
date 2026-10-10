# STEAMLab Merge Cube — Visor v4 (diagnóstico de anclajes)

Esta versión reconstruye los seis anclajes de MindAR **antes** de que A-Frame inicialice
la escena. En la versión anterior el mensaje «Cara detectada» podía mostrarse aun si
el objeto 3D no estaba registrado correctamente.

## Actualización
1. Sustituye `visor.html` y `surface.js` en tu repositorio `steamlab-merge`.
2. No modifiques `targets.mind` ni vuelvas a generarlo.
3. Abre `https://luisctito-sketch.github.io/steamlab-merge/visor.html?v=4`
   en Chrome, selecciona tu archivo `.mind` local y activa la cámara.
4. Al detectar una cara, comprueba si aparece el **cuadrado fucsia opaco**.
   Junto a él debe verse una superficie térmica de colores.

Si vuelve a aparecer «Cara detectada» pero no aparece el cuadrado fucsia, el
problema probablemente es de inicialización de renderizado/capa de video del
dispositivo: envía una captura para el siguiente diagnóstico. Esta versión no
ha sido probada en tu teléfono y sigue siendo experimental.

El laboratorio original Hiro (`steamlab-ra`) no cambia. Los diseños originales
de Merge y tu archivo `.mind` permanecen privados.

# STEAMLab Merge Cube — visor corregido

Se ha corregido la orientación de la superficie respecto al plano del objetivo reconocido por MindAR.
La superficie está ahora representada en XY con relieve en Z, e incluye un punto de prueba
fucsia. El visor conserva la carga privada de `targets.mind` desde el celular.

## Actualización en GitHub

En `steamlab-merge`, reemplaza **dos archivos solamente**: `surface.js` y
`visor.html`. No toques el repositorio `steamlab-ra` que utiliza Hiro.

Abre en Chrome una ventana privada o visita `visor.html?v=3` después de publicar
los cambios para evitar versiones guardadas en caché.

1. Selecciona el mismo `targets.mind` (no es necesario recompilar).
2. Activa cámara y muestra de frente una cara ya entrenada.
3. Debe aparecer la superficie multicolor y una esfera fucsia en su esquina.
4. Si el estado dice «Cara detectada» pero la pantalla sigue vacía, comprueba
   si se ve al menos la esfera fucsia y comparte una captura. Puede indicar
   un problema adicional de anclaje o renderización no reproducible aquí.

**Advertencia:** esta versión es experimental, no seguimiento geométrico de
seis caras como un solo cubo. Con algunas caras se perderá el seguimiento.
**Privacidad:** las imágenes de las caras y `targets.mind` no se incorporan ni
se deben subir a un repositorio público.

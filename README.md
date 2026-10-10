# STEAMLab Merge Cube V5 — Visor Three.js

Se sustituyó únicamente la capa A-Frame de visualización del visor por **MindARThree/Three.js**. El objetivo es resolver el problema donde aparece «Cara detectada», pero no la cámara ni ningún objeto 3D.

## Actualización

En el repositorio `steamlab-merge` sustituye **solo `visor.html`** con este archivo. Conserva todos los demás archivos y el `targets.mind` privado. Abre `visor.html?v=5` en Chrome del celular y carga el `targets.mind` de las seis caras.

## Diagnóstico

Si funciona, verás **video real** detrás del HUD, la superficie térmica y un cuadrado fucsia sobre la cara detectada. Si hay video pero no objeto, reporta el texto del rótulo superior derecho. Si no hay video, reporta el error visible.

### Nota

El código necesita conexión para cargar `three` y `mind-ar`. Todavía no se ha verificado el comportamiento de esta versión en tu celular. Las seis caras se detectan por separado, no constituyen seguimiento multicara continuo. No publiques imágenes ni archivos `targets.mind` de Merge en un repositorio público.

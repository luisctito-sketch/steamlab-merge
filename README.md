# STEAMLab · Merge Cube original — experimento WebAR

Este proyecto es **independiente** del visor Hiro publicado anteriormente. No usa ni requiere una app oficial Merge EDU; explora reconocer imágenes de las caras originales del Merge Cube mediante MindAR.

## Estado real

**Prototipo experimental, no probado con las seis caras de tu cubo.** La foto inclinada de tres caras que compartiste no basta para un entrenamiento fiable. Para que funcione, se necesitan imágenes rectas, nítidas y completas, una por cara. El archivo `targets.mind` **no viene incluido**: se genera mediante `entrenar.html` y se sube a GitHub. Antes de generarlo, `visor.html` no reconocerá ninguna cara.

MindAR reconoce **objetivos planos individuales**. Aunque entrenes las seis caras, todavía **NO** existe seguimiento volumétrico continuo ni fusión de poses de un cubo 3D. Cuando una cara se oculte, puede perderse la RA hasta que detecte otra. Tampoco garantiza reconocer todas las caras: depende del patrón, brillo, fotografías y cámara. Un cubo Merge no se convierte automáticamente en un marcador Hiro ni en seis marcadores AR.js.

## 1. Crea otro repositorio

Crea uno nuevo llamado `steamlab-merge` (público). No toques tu repositorio `steamlab-ra`. Sube a la raíz de `steamlab-merge` los archivos `index.html`, `entrenar.html`, `visor.html`, `surface.js`, `style.css`, `README.md`.

Activa **Settings → Pages → Deploy from a branch → main → /(root)**.

Dirección probable: `https://TU-USUARIO.github.io/steamlab-merge/`.

## 2. Fotografía las caras originales

- Una fotografía **de frente** por cara, teléfono paralelo a la cara, sin perspectiva oblicua.
- Luz difusa y constante, evitar brillos, sombras y desenfoque.
- Recorta ajustando al cuadrado de cada cara; elimina mesa/fondo y mantén todos sus símbolos visibles.
- Nombra las imágenes `cara01.jpg` a `cara06.jpg` para asegurar un orden estable. Puedes empezar únicamente con `cara01.jpg`.
- Si el patrón es brillante o muy repetitivo puede dar reconocimiento inestable. Prueba otra cara.

## 3. Compila el reconocimiento

Abre `https://TU-USUARIO.github.io/steamlab-merge/entrenar.html` en Chrome desde una computadora, elige fotografías, pulsa **Generar targets.mind**. El entrenamiento puede tardar. Descarga `targets.mind` y súbelo a **la raíz del repositorio** en GitHub. Haz Commit changes. Si solo cargas una cara, los otros cinco índices del visor no son objetivos válidos; comienza probando la cara 1.

## 4. Usa el cubo en la cámara

Abre `https://TU-USUARIO.github.io/steamlab-merge/visor.html` desde Chrome en el celular, concede permiso de cámara y apunta a la cara fotografiada. Con reconocimiento efectivo verás la superficie térmica de prueba. Inclina ligeramente, evita tapar patrones. Cuando cambies de cara puede perder seguimiento.

## Limitaciones y diagnóstico

- Si aparece 404 de `targets.mind`: faltó subir el archivo compilado.
- Si cámara no aparece: usa HTTPS y permite cámara.
- Si no detecta ninguna cara: vuelve a fotografiar cara plana, recortar y recompilar una sola imagen; revisa brillo, orientación y distancia.
- Si el archivo `.mind` falla o el navegador se queda sin memoria, compila menos caras en computadora.
- El laboratorio ofrece una superficie **simulada** T(x,y), no medidas industriales reales.

## Fuente técnica

MindAR: https://github.com/hiukim/mind-ar-js ; compilador: https://hiukim.github.io/mind-ar-js-doc/tools/compile . Tecnología de terceros bajo sus respectivas licencias. Sin afiliación a Merge EDU.

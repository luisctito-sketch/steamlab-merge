# STEAMLab Merge Cube — Caras corregidas

## ¿Hay que rehacer la aplicación?
No. El visor y el compilador admiten imágenes JPG, PNG y WebP.
Las seis nuevas caras ya están bien separadas; lo necesario es GENERAR OTRA VEZ
`targets.mind`, utilizando exclusivamente las seis imágenes JPG corregidas.

## Cómo proceder
1. Publica los archivos de esta carpeta en tu repositorio **steamlab-merge**,
   sin subir fotografías, patrones, ni el archivo `targets.mind`.
   Si ya publicaste la aplicación anterior, basta con sustituir `entrenar.html`.
2. Abre `https://luisctito-sketch.github.io/steamlab-merge/entrenar.html`
   desde una computadora.
3. Elige, juntas, las imágenes originales que facilitaste:
   `Cara-merge-01.jpg` a `Cara-merge-06.jpg`.
   Se ordenarán automáticamente por el número del nombre.
4. Pulsa **Generar targets.mind**. Descarga el archivo a tu dispositivo.
5. Abre `https://luisctito-sketch.github.io/steamlab-merge/visor.html`
   en Chrome del celular, selecciona el NUEVO archivo `targets.mind`,
   y concede permiso a la cámara.
6. Enfoca una cara completa del cubo con luz uniforme, y gira lentamente.

**No reutilices el archivo `targets.mind` generado con los recortes incorrectos.**

## Limitaciones técnicas
MindAR trata las seis caras como **seis objetivos de imagen independientes**.
Eso permite ensayar la detección de cada cara, pero NO equivale a seguimiento
continuo de un cubo con geometría multicara. La aplicación sigue siendo
experimental; un cambio de cara puede hacer perder temporalmente el modelo.
Tampoco se ha verificado su funcionamiento con las seis caras en tu dispositivo.

## Protección de las imágenes de Merge
Las imágenes de caras provienen del material aportado por el usuario y de su
plantilla bajo condiciones de Merge Labs. Úsalas solamente de acuerdo con los
permisos de ese material; no las publiques en GitHub ni en sitios abiertos.
El archivo `targets.mind` generado a partir de ellas también debe mantenerse
privado.

El primer visor con marcador Hiro (`steamlab-ra`) no cambia.

## Corrección del compilador
Se usa la distribución oficial de MindAR alojada en la rama de versión 1.2.5.
Si el compilador embebido no se carga, utilice el compilador oficial:
https://hiukim.github.io/mind-ar-js-doc/tools/compile/
Seleccione las seis caras en orden 01 a 06 y descargue `targets.mind`.
El compilador oficial es una página de terceros; revise sus condiciones antes de
cargar imágenes sujetas a restricciones de licencia.

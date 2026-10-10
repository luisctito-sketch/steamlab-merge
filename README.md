# STEAMLab · Merge Cube original — versión con plantilla

Este repositorio es **independiente** de `steamlab-ra` (Hiro). Muestra una superficie térmica simulada mediante reconocimiento experimental de las caras originales del cubo.

## Sin fotografías

Las seis imágenes de referencia ya se extrajeron de la plantilla PDF aportada por el usuario y se proporcionan **por separado, para uso personal**. El código publicado en GitHub **no contiene** las caras de Merge ni `targets.mind`.

## Publicar en GitHub Pages

1. Crear repositorio público nuevo, por ejemplo `steamlab-merge`.
2. Subir solo los archivos de este paquete de GitHub: `index.html`, `entrenar.html`, `visor.html`, `surface.js`, `style.css`, `README.md`. No subir imágenes del Merge Cube ni `targets.mind`.
3. Settings → Pages → Deploy from branch → main / (root) → Save.
4. En tu computadora, abrir `https://TU-USUARIO.github.io/steamlab-merge/entrenar.html`.
5. Seleccionar las **seis imágenes** del paquete personal de referencia, desde tu computadora. Pulsar **Generar targets.mind**. Requiere internet y puede utilizar bastante memoria.
6. Transferir `targets.mind` al celular mediante USB, Drive o mecanismo de transferencia de archivos. No hace falta subirlo a GitHub.
7. En el teléfono, abrir `https://TU-USUARIO.github.io/steamlab-merge/visor.html`, seleccionar el `targets.mind` transferido y pulsar **Activar cámara y visor RA**. Conceder permiso a la cámara.
8. Apuntar la cámara a una cara del cubo original, con iluminación uniforme.

## Advertencias técnicas

- **Prototipo experimental sin validación en tu teléfono todavía.** Puede requerir ajustes.
- El archivo de reconocimiento se selecciona desde el teléfono y permanece local; no se sube a servidores de STEAMLab.
- Este MVP reconoce imágenes de caras **de manera independiente**; **no** calcula una pose conjunta estable del cubo multicara, ni garantiza transiciones suaves entre caras o reconocimiento bajo oblicuidad intensa.
- MindAR, A-Frame y sus componentes requieren conexión de internet. Se usa un modelo térmico simulado: no hay datos industriales reales.
- En caso de fallar, sigue disponible la aplicación Hiro `steamlab-ra`, que permanece independiente.

## Derechos de uso

La plantilla entregada advierte que sus diseños pertenecen a Merge Labs, y restringe distribución y obras derivadas. Por eso **no se incluyen sus imágenes ni un descriptor derivado** en el repositorio público. El paquete con las seis caras se entrega aparte al usuario para pruebas personales de su propio material; no debe compartirse ni republicarse sin autorización. Este prototipo no está afiliado a Merge EDU.

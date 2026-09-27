# Victoria Cafetería — Landing del Menú

Sitio de una sola página (HTML + CSS + JS puro, sin frameworks ni build step).

## Cómo verlo

Abre `index.html` directamente en el navegador, o sirve la carpeta con
cualquier servidor estático (por ejemplo `npx serve .`).

## Estructura

```
index.html
css/
  variables.css      colores, tipografía, espaciados
  base.css            reset + tipografía base
  layout.css           contenedor y grillas
  components.css       navbar, botones, badges, cards
  sections/*.css        un archivo por sección (hero, galería, menu, etc.)
js/
  config.js             datos del negocio + link de reseñas de Google
  data/
    menu-data.js          categorías y platillos del menú (precios reales, ₡)
    content-data.js        galería, "por qué elegirnos" y testimonios
  modules/                un módulo por comportamiento (nav, filtros, etc.)
  main.js                inicializa todos los módulos
assets/
  img/hero/               foto de fondo del hero
  img/menu/                fotos de los platillos (algunas ya reales)
  img/logo/                 logo de Victoria Cafetería
```

El menú (`js/data/menu-data.js`) ya tiene el contenido real tomado del
menú físico del local: ~100 platillos con precios en colones. Unos 27
platillos ya tienen foto real (recortada de las fotos del menú físico);
el resto muestra automáticamente una tarjeta con el nombre del platillo
mientras no se suba su foto — el sitio nunca se ve roto.

No se recibió video del restaurante, así que la sección 2 ("Showreel")
se resolvió como una **galería de fotos reales** (`css/sections/gallery.css`,
`js/modules/gallery-render.js`, datos en `GALLERY_ITEMS` dentro de
`content-data.js`). Si más adelante hay un video, esa sección se puede
volver a cambiar por un reproductor.

## Pendientes para dejarlo 100% real

1. **Más fotos de platillos**: agrega imágenes en `assets/img/menu/`
   con el nombre de archivo que ya referencia cada platillo en
   `menu-data.js` (por ejemplo `assets/img/menu/cortado.jpg`).

2. **Link directo de reseñas de Google**: para que el botón abra
   directo el formulario de estrellas (no solo la ficha de Maps),
   Google necesita el **Place ID** del restaurante:
   - Búscalo en https://developers.google.com/maps/documentation/places/web-service/place-id-finder
   - Pégalo en `js/config.js` → `SITE_CONFIG.google.placeId`
   Hasta que se configure, el botón usa el link corto de Maps que ya
   nos diste como respaldo (funcional, pero no abre el formulario
   directo de estrellas).

3. **Datos de contacto/horarios**: son de ejemplo. Edita
   `SITE_CONFIG.business` en `js/config.js` y la sección `<footer>` de
   `index.html` con la dirección, teléfono y horarios reales.

4. **Testimonios**: los de `js/data/content-data.js`
   (`TESTIMONIALS`) son de ejemplo. Reemplázalos por reseñas reales
   (con permiso del cliente) si quieres destacarlas en la página.

5. **Rating de Google (4.8★)** en el hero es un placeholder — actualízalo
   con la calificación real una vez configurado el Place ID.

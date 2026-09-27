# Café Victoria — Landing del Menú

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
  sections/*.css        un archivo por sección (hero, menu, etc.)
js/
  config.js             datos del negocio + link de reseñas de Google
  data/
    menu-data.js          categorías y platillos del menú
    content-data.js        "por qué elegirnos" + testimonios
  modules/                un módulo por comportamiento (nav, filtros, etc.)
  main.js                inicializa todos los módulos
assets/
  img/hero/               foto de fondo del hero + poster del video
  img/menu/                fotos de cada platillo
  video/                    video del showreel
```

## Pendientes para dejarlo 100% real

1. **Imágenes y video**: agrega tus archivos en `assets/img/hero/`,
   `assets/img/menu/` y `assets/video/` respetando los nombres que ya
   usa `index.html` y `menu-data.js` (o cambia las rutas ahí).
   Mientras una imagen no exista, el sitio muestra automáticamente una
   tarjeta con el nombre del platillo en su lugar, así nunca se ve roto.

2. **Menú real**: edita `js/data/menu-data.js`. Cada objeto es un
   platillo (nombre, descripción, precio, categoría, imagen). Agregar o
   quitar categorías se hace en `MENU_CATEGORIES`.

3. **Link directo de reseñas de Google**: para que el botón abra
   directo el formulario de estrellas (no solo la ficha de Maps),
   Google necesita el **Place ID** del restaurante:
   - Búscalo en https://developers.google.com/maps/documentation/places/web-service/place-id-finder
   - Pégalo en `js/config.js` → `SITE_CONFIG.google.placeId`
   Hasta que se configure, el botón usa el link corto de Maps que ya
   nos diste como respaldo (funcional, pero no abre el formulario
   directo de estrellas).

4. **Datos de contacto/horarios**: edita `SITE_CONFIG.business` en
   `js/config.js` y la sección `<footer>` de `index.html`.

5. **Testimonios**: reemplaza los de ejemplo en
   `js/data/content-data.js` por reseñas reales (con permiso del
   cliente) si quieres destacarlas en la página.

# Victoria Cafetería — Landing del Menú

Sitio de una sola página (HTML + CSS + JS, sin build step). Usa
[GSAP](https://gsap.com) + ScrollTrigger para las animaciones (auto-hospedado
en `assets/vendor/gsap/`, sin depender de un CDN externo).

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
  preloader.css         pantalla de carga inicial
  sections/*.css        un archivo por sección (hero, showreel, menu, etc.)
js/
  config.js             datos del negocio + link de reseñas de Google
  data/
    menu-data.js          categorías y platillos del menú (precios reales, ₡)
    content-data.js        "por qué elegirnos" y testimonios
  modules/                un módulo por comportamiento (nav, filtros, etc.)
  main.js                inicializa todos los módulos
assets/
  img/hero/               foto de fondo del hero
  img/logo/                logo de Victoria Cafetería
  video/                   video del showreel (pendiente)
  vendor/gsap/             GSAP + ScrollTrigger auto-hospedados
```

El menú (`js/data/menu-data.js`) tiene el contenido real tomado del menú
físico del local: 149 platillos con precios en colones, en 10 categorías
(sin una pestaña "Todos": se eligió no incluirla porque abarrotaba mucho
la vista — la primera categoría se muestra por defecto). Las tarjetas son
solo texto (nombre, descripción, precio) — a propósito no llevan foto por
platillo.

**Detalles de la experiencia:**
- **Pantalla de carga** (`css/preloader.css`, `js/modules/preloader.js`):
  se muestra un mínimo de 3 segundos con el logo, un spinner y una barra
  de progreso, antes de revelar la página.
- **Menú animado** (`js/modules/menu-render.js`): el filtro tiene un
  indicador que se desliza hasta la categoría activa, las tarjetas entran
  y salen en cascada con GSAP al cambiar de categoría, y cada tarjeta se
  inclina sutilmente (tilt 3D) siguiendo el cursor al pasar el mouse.

## Pendientes para dejarlo 100% real

1. **Video del showreel**: la sección 2 ya está lista para reproducir un
   video (`assets/video/showreel.mp4` + poster en
   `assets/img/hero/showreel-poster.jpg`). Mientras no exista el archivo,
   el reproductor se ve como un panel vacío con degradado — no rompe la
   página. Intenté sacar fotos/video mejores de la página de Facebook que
   compartiste, pero ese dominio está bloqueado desde este entorno; súbelos
   directo aquí en el chat o al repo cuando los tengas.

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

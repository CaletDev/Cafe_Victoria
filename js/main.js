/**
 * main.js
 * Punto de entrada: inicializa todos los módulos del sitio una vez que
 * el DOM está listo. Cada módulo vive en js/modules/ y es independiente,
 * asi que agregar o quitar secciones no rompe el resto.
 */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("[data-current-year]") &&
    (document.querySelector("[data-current-year]").textContent = new Date().getFullYear());

  NavModule.init();
  GalleryRenderModule.init();
  MenuRenderModule.init();
  WhyUsRenderModule.init();
  ReviewsRenderModule.init();
  RevealModule.init();
});

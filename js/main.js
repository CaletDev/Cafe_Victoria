/**
 * main.js
 * Punto de entrada: inicializa todos los módulos del sitio una vez que
 * el DOM está listo. Cada módulo vive en js/modules/ y es independiente:
 * se inicializa dentro de su propio try/catch para que un error en un
 * módulo (por ejemplo, uno que no llegó a cargar) no deje en blanco el
 * resto de las secciones.
 */

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const modules = [
    ["NavModule", typeof NavModule !== "undefined" && NavModule],
    ["ShowreelModule", typeof ShowreelModule !== "undefined" && ShowreelModule],
    ["MenuRenderModule", typeof MenuRenderModule !== "undefined" && MenuRenderModule],
    ["WhyUsRenderModule", typeof WhyUsRenderModule !== "undefined" && WhyUsRenderModule],
    ["ReviewsRenderModule", typeof ReviewsRenderModule !== "undefined" && ReviewsRenderModule],
    ["RevealModule", typeof RevealModule !== "undefined" && RevealModule],
  ];

  modules.forEach(([name, mod]) => {
    if (!mod) {
      console.error(`[main.js] ${name} no está definido (su script no cargó).`);
      return;
    }
    try {
      mod.init();
    } catch (err) {
      console.error(`[main.js] ${name}.init() falló:`, err);
    }
  });
});

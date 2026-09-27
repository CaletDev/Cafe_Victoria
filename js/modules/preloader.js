/**
 * preloader.js
 * Controla la pantalla de carga inicial: se muestra al menos 3 segundos
 * (para que la animación se note, no se sienta como un parpadeo) y
 * nunca menos de lo que tarde la página en terminar de cargar.
 */

const PreloaderModule = (() => {
  const MIN_DISPLAY_MS = 3000;

  function init() {
    const el = document.querySelector("[data-preloader]");
    if (!el) return;

    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      setTimeout(hide, remaining);
    };

    function hide() {
      el.classList.add("is-hidden");
      document.documentElement.classList.remove("is-loading");
      el.addEventListener("transitionend", () => el.remove(), { once: true });
      // Respaldo por si transitionend no llega a disparar (ej. con
      // prefers-reduced-motion, donde la transición puede estar desactivada).
      setTimeout(() => el.remove(), 900);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }
  }

  return { init };
})();

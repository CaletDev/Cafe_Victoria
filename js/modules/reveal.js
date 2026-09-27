/**
 * reveal.js
 * Anima la aparición de elementos marcados con la clase `.reveal`
 * cuando entran en el viewport (usa IntersectionObserver).
 *
 * observe(root) puede llamarse otra vez después de insertar contenido
 * nuevo dinámicamente (por ejemplo al cambiar el filtro del menú), para
 * que esos elementos también queden vigilados por el observer y no se
 * queden invisibles para siempre.
 */

const RevealModule = (() => {
  let observer = null;

  function getObserver() {
    if (observer || !("IntersectionObserver" in window)) return observer;
    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    return observer;
  }

  function observe(root = document) {
    const items = root.querySelectorAll
      ? root.querySelectorAll(".reveal")
      : [];
    if (!items.length) return;

    const obs = getObserver();
    if (!obs) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    items.forEach((el) => obs.observe(el));
  }

  function init() {
    observe(document);
  }

  return { init, observe };
})();

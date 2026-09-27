/**
 * reveal.js
 * Anima la aparición de elementos marcados con la clase `.reveal` cuando
 * entran en el viewport, usando GSAP + ScrollTrigger (con fallback a un
 * simple fade si GSAP no llegó a cargar).
 *
 * observe(root) puede llamarse otra vez después de insertar contenido
 * nuevo dinámicamente, para que esos elementos también queden animados.
 * Cada elemento se marca con [data-revealed] para no procesarlo dos
 * veces si observe() se llama sobre una zona ya vigilada.
 */

const RevealModule = (() => {
  const hasGsap = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";

  function animate(el) {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  }

  function observe(root = document) {
    if (!root.querySelectorAll) return;
    const items = root.querySelectorAll(".reveal:not([data-revealed])");
    if (!items.length) return;

    items.forEach((el) => {
      el.setAttribute("data-revealed", "true");
      if (hasGsap) {
        animate(el);
      } else {
        el.classList.add("is-visible");
      }
    });
  }

  function init() {
    observe(document);
  }

  return { init, observe };
})();

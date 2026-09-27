/**
 * nav.js
 * Comportamiento de la barra de navegación: fondo al hacer scroll,
 * menú móvil y resaltado del link activo según la sección visible.
 */

const NavModule = (() => {
  function init() {
    const navbar = document.querySelector("[data-navbar]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const links = document.querySelector("[data-nav-links]");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 12);
    });

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("is-open");
      });
      links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => links.classList.remove("is-open"));
      });
    }

    highlightActiveLink();
  }

  function highlightActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("[data-nav-links] a");
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  return { init };
})();

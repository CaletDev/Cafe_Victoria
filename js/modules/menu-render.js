/**
 * menu-render.js
 * Renderiza las categorías y los platillos del menú a partir de
 * MENU_CATEGORIES y MENU_ITEMS (js/data/menu-data.js), maneja el filtro
 * por categoría (con un indicador deslizante) y anima la entrada/salida
 * de las tarjetas con GSAP para que el menú se sienta vivo.
 */

const MenuRenderModule = (() => {
  const hasGsap = typeof gsap !== "undefined";
  let currentCategory = null;
  let isAnimating = false;

  function init() {
    const filtersEl = document.querySelector("[data-menu-filters]");
    const gridEl = document.querySelector("[data-menu-grid]");
    if (!filtersEl || !gridEl) return;

    renderFilters(filtersEl);
    currentCategory = MENU_CATEGORIES[0].id;
    renderItems(gridEl, currentCategory, { animateIn: false });
    positionIndicator(filtersEl, filtersEl.querySelector(".menu-filter.is-active"));

    filtersEl.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-category]");
      if (!btn || isAnimating || btn.dataset.category === currentCategory) return;

      currentCategory = btn.dataset.category;
      filtersEl
        .querySelectorAll(".menu-filter")
        .forEach((el) => el.classList.remove("is-active"));
      btn.classList.add("is-active");
      positionIndicator(filtersEl, btn);

      swapItems(gridEl, currentCategory);
    });

    window.addEventListener("resize", () => {
      positionIndicator(filtersEl, filtersEl.querySelector(".menu-filter.is-active"));
    });

    bindTilt(gridEl);
  }

  function renderFilters(container) {
    container.innerHTML =
      '<span class="menu-filters__indicator" data-menu-indicator></span>' +
      MENU_CATEGORIES.map(
        (cat, index) => `
          <button
            type="button"
            class="menu-filter${index === 0 ? " is-active" : ""}"
            data-category="${cat.id}"
          >${cat.label}</button>
        `
      ).join("");
  }

  // Mueve el fondo resaltado (el "pill") hasta el botón activo, en vez de
  // simplemente cambiarle el color: un detalle que hace que el filtro se
  // sienta como un control físico y no un simple toggle de CSS.
  function positionIndicator(filtersEl, activeBtn) {
    const indicator = filtersEl.querySelector("[data-menu-indicator]");
    if (!indicator || !activeBtn) return;

    const target = {
      x: activeBtn.offsetLeft,
      y: activeBtn.offsetTop,
      width: activeBtn.offsetWidth,
      height: activeBtn.offsetHeight,
    };

    if (hasGsap) {
      gsap.to(indicator, {
        x: target.x,
        y: target.y,
        width: target.width,
        height: target.height,
        duration: 0.45,
        ease: "power3.out",
      });
    } else {
      indicator.style.transform = `translate(${target.x}px, ${target.y}px)`;
      indicator.style.width = `${target.width}px`;
      indicator.style.height = `${target.height}px`;
    }
  }

  // Anima la salida de las tarjetas actuales, cambia el contenido y anima
  // la entrada de las nuevas en cascada (stagger).
  function swapItems(container, categoryId) {
    const cards = container.querySelectorAll(".dish-card");

    if (!hasGsap || !cards.length) {
      renderItems(container, categoryId);
      return;
    }

    isAnimating = true;
    gsap.to(cards, {
      opacity: 0,
      y: -14,
      scale: 0.97,
      duration: 0.18,
      // `amount` reparte el stagger total entre todas las tarjetas, así
      // una categoría con muchos platillos (ej. Almuerzos, 35 items) no
      // tarda más en total que una con pocos: el tope queda fijo.
      stagger: { amount: 0.12, from: "start" },
      ease: "power1.in",
      onComplete: () => {
        renderItems(container, categoryId, {
          onDone: () => {
            isAnimating = false;
          },
        });
      },
    });
  }

  function renderItems(container, categoryId, { animateIn = true, onDone } = {}) {
    const items = MENU_ITEMS.filter((item) => item.category === categoryId);
    container.innerHTML = items.map(dishCardTemplate).join("");

    const cards = container.querySelectorAll(".dish-card");
    if (hasGsap && animateIn) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 22, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.42,
          stagger: { amount: 0.35, from: "start" },
          ease: "back.out(1.6)",
          onComplete: onDone,
        }
      );
    } else {
      RevealModule.observe(container);
      if (onDone) onDone();
    }
  }

  // Inclinación sutil de la tarjeta según la posición del cursor: un
  // detalle "premium" muy barato de hacer y que se nota mucho.
  function bindTilt(container) {
    if (!hasGsap || window.matchMedia("(pointer: coarse)").matches) return;

    let activeCard = null;
    let quickX, quickY;

    container.addEventListener("pointermove", (event) => {
      const card = event.target.closest(".dish-card");
      if (!card) return;

      if (card !== activeCard) {
        activeCard = card;
        quickX = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3.out" });
        quickY = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3.out" });
      }

      const rect = card.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      quickX(relX * 8);
      quickY(relY * -8);
    });

    // pointerout sí burbujea (a diferencia de pointerleave), así que
    // detectamos que realmente se salió de la tarjeta comparando con
    // relatedTarget en vez de escuchar en fase de captura.
    container.addEventListener("pointerout", (event) => {
      const card = event.target.closest(".dish-card");
      if (!card) return;
      if (event.relatedTarget && card.contains(event.relatedTarget)) return;

      gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: "power3.out" });
      if (activeCard === card) activeCard = null;
    });
  }

  function dishCardTemplate(item) {
    const priceLabel = item.price > 0 ? `₡${item.price.toLocaleString("es-CR")}` : "Consultar";
    const badge = item.tags && item.tags.length
      ? `<span class="badge dish-card__badge">${escapeHtml(item.tags[0])}</span>`
      : "";

    return `
      <article class="dish-card card reveal">
        <div class="dish-card__top">
          <h3 class="dish-card__name">${escapeHtml(item.name)}</h3>
          <span class="dish-card__price">${priceLabel}</span>
        </div>
        ${badge}
        <p class="dish-card__desc">${escapeHtml(item.description)}</p>
      </article>
    `;
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  return { init };
})();

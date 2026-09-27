/**
 * menu-render.js
 * Renderiza las categorías y los platillos del menú a partir de
 * MENU_CATEGORIES y MENU_ITEMS (js/data/menu-data.js), y maneja el
 * filtro por categoría. Las tarjetas son solo texto (nombre, precio,
 * descripción): no todos los platillos necesitan foto.
 */

const MenuRenderModule = (() => {
  function init() {
    const filtersEl = document.querySelector("[data-menu-filters]");
    const gridEl = document.querySelector("[data-menu-grid]");
    if (!filtersEl || !gridEl) return;

    renderFilters(filtersEl);
    renderItems(gridEl, "todos");

    filtersEl.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-category]");
      if (!btn) return;

      filtersEl
        .querySelectorAll(".menu-filter")
        .forEach((el) => el.classList.remove("is-active"));
      btn.classList.add("is-active");

      renderItems(gridEl, btn.dataset.category);
    });
  }

  function renderFilters(container) {
    container.innerHTML = MENU_CATEGORIES.map(
      (cat, index) => `
        <button
          type="button"
          class="menu-filter${index === 0 ? " is-active" : ""}"
          data-category="${cat.id}"
        >${cat.label}</button>
      `
    ).join("");
  }

  function renderItems(container, categoryId) {
    const items =
      categoryId === "todos"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.category === categoryId);

    container.innerHTML = items.map(dishCardTemplate).join("");
    // Las tarjetas son elementos nuevos en el DOM: hay que volver a
    // registrarlas en el observer de scroll-reveal, o se quedarían
    // invisibles para siempre (el observer inicial solo vio las que
    // existían al cargar la página).
    RevealModule.observe(container);
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

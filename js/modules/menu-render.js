/**
 * menu-render.js
 * Renderiza las categorías y los platillos del menú a partir de
 * MENU_CATEGORIES y MENU_ITEMS (js/data/menu-data.js), y maneja el
 * filtro por categoría. Si una imagen de platillo no existe todavía,
 * se sustituye por una tarjeta con el nombre del platillo para que el
 * sitio nunca muestre un ícono de imagen rota.
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
    attachImageFallbacks(container);
  }

  function dishCardTemplate(item) {
    const priceLabel = item.price > 0 ? `$${item.price.toFixed(2)}` : "Consultar";
    const badge = item.tags && item.tags.length
      ? `<span class="badge dish-card__badge">${escapeHtml(item.tags[0])}</span>`
      : "";

    return `
      <article class="dish-card card reveal">
        <div class="dish-card__media">
          ${badge}
          <img
            src="${item.image}"
            alt="${escapeHtml(item.name)}"
            loading="lazy"
            data-dish-name="${escapeHtml(item.name)}"
          />
        </div>
        <div class="dish-card__body">
          <div class="dish-card__top">
            <h3 class="dish-card__name">${escapeHtml(item.name)}</h3>
            <span class="dish-card__price">${priceLabel}</span>
          </div>
          <p class="dish-card__desc">${escapeHtml(item.description)}</p>
        </div>
      </article>
    `;
  }

  // Si la imagen de un platillo no existe todavía (assets pendientes de
  // subir), la reemplazamos por una tarjeta con el nombre del platillo
  // en vez de dejar el ícono de imagen rota del navegador.
  function attachImageFallbacks(container) {
    container.querySelectorAll("img[data-dish-name]").forEach((img) => {
      img.addEventListener("error", () => {
        const placeholder = document.createElement("div");
        placeholder.className = "dish-card__placeholder";
        placeholder.textContent = img.dataset.dishName;
        img.replaceWith(placeholder);
      });
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  return { init };
})();

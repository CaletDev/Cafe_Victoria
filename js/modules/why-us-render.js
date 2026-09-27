/**
 * why-us-render.js
 * Renderiza las tarjetas de la sección "Por qué Café Victoria" a partir
 * de WHY_US_ITEMS (js/data/content-data.js).
 */

const WhyUsRenderModule = (() => {
  const ICONS = {
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21c8 0 14-6 14-14V5h-2C9 5 3 11 3 19v2z"/><path d="M5 21c2-6 6-10 12-12"/></svg>',
    "chef-hat": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 18v-6.5A4.5 4.5 0 0 1 8.2 8a4.5 4.5 0 0 1 8.6-2.1A4.5 4.5 0 0 1 17 18"/><path d="M7 18h10"/><path d="M8 18v3h8v-3"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  };

  function init() {
    const grid = document.querySelector("[data-why-us-grid]");
    if (!grid) return;

    grid.innerHTML = WHY_US_ITEMS.map(
      (item) => `
        <div class="why-card reveal">
          <div class="why-card__icon">${ICONS[item.icon] || ""}</div>
          <h3 class="why-card__title">${escapeHtml(item.title)}</h3>
          <p class="why-card__desc">${escapeHtml(item.description)}</p>
        </div>
      `
    ).join("");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  return { init };
})();

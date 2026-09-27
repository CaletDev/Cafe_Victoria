/**
 * gallery-render.js
 * Renderiza la galería de fotos reales del local y los platillos
 * (GALLERY_ITEMS en js/data/content-data.js). Reemplaza al video de
 * "showreel" mientras el restaurante no tenga uno grabado.
 */

const GalleryRenderModule = (() => {
  function init() {
    const grid = document.querySelector("[data-gallery-grid]");
    if (!grid) return;

    grid.innerHTML = GALLERY_ITEMS.map(
      (item, index) => `
        <figure class="gallery-item reveal${index === 0 ? " gallery-item--wide" : ""}">
          <img src="${item.image}" alt="${escapeHtml(item.caption)}" loading="lazy" />
          <figcaption>${escapeHtml(item.caption)}</figcaption>
        </figure>
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

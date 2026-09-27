/**
 * reviews-render.js
 * Renderiza los testimonios (TESTIMONIALS) y conecta el botón principal
 * de reseñas con la URL calculada en config.js (getGoogleReviewUrl()).
 */

const ReviewsRenderModule = (() => {
  function init() {
    renderTestimonials();
    wireReviewButtons();
  }

  function renderTestimonials() {
    const grid = document.querySelector("[data-testimonials-grid]");
    if (!grid) return;

    grid.innerHTML = TESTIMONIALS.map(
      (t) => `
        <article class="testimonial card reveal">
          <div class="testimonial__stars stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
          <p class="testimonial__text">“${escapeHtml(t.text)}”</p>
          <p class="testimonial__name">${escapeHtml(t.name)}</p>
        </article>
      `
    ).join("");
  }

  function wireReviewButtons() {
    const url = getGoogleReviewUrl();
    document.querySelectorAll("[data-google-review-link]").forEach((el) => {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  return { init };
})();

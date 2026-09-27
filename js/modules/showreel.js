/**
 * showreel.js
 * Controla el reproductor de video de la sección "Showreel":
 * el video empieza pausado con un botón de play superpuesto.
 */

const ShowreelModule = (() => {
  function init() {
    const player = document.querySelector("[data-showreel-player]");
    const playBtn = document.querySelector("[data-showreel-play]");
    const video = player ? player.querySelector("video") : null;
    if (!player || !playBtn || !video) return;

    playBtn.addEventListener("click", () => {
      video.play();
      player.classList.add("is-playing");
    });

    video.addEventListener("pause", () => player.classList.remove("is-playing"));
    video.addEventListener("ended", () => player.classList.remove("is-playing"));
  }

  return { init };
})();

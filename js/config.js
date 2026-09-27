/**
 * config.js
 * Configuracion global del sitio: datos del negocio y enlaces externos.
 * Edita este archivo para actualizar informacion de contacto, horarios
 * y el enlace de reseñas de Google sin tocar el resto del codigo.
 */

const SITE_CONFIG = {
  business: {
    name: "Victoria Cafetería",
    tagline: "La casa del café",
    phone: "+50000000000",
    whatsapp: "+50000000000",
    address: "Dirección del restaurante, Ciudad, País",
    hours: [
      { day: "Lunes a Viernes", time: "7:00 am - 9:00 pm" },
      { day: "Sábado y Domingo", time: "8:00 am - 10:00 pm" },
    ],
    socials: {
      instagram: "https://instagram.com/cafevictoria",
      facebook: "https://facebook.com/cafevictoria",
    },
  },

  // --- Google Maps / Reseñas ---
  // El link corto que nos diste (https://maps.app.goo.gl/4wqbj7rGC3gq21dr6)
  // no pudo resolverse automaticamente desde este entorno (sin acceso a
  // internet externo). Para que el boton de reseñas abra DIRECTAMENTE el
  // formulario de estrellas de Google (en vez de solo la ficha del lugar),
  // Google requiere el "Place ID" del negocio, no el link corto.
  //
  // Como obtener el Place ID (2 minutos):
  // 1. Entra a https://developers.google.com/maps/documentation/places/web-service/place-id-finder
  // 2. Busca "Café Victoria" (o pega la direccion del restaurante)
  // 3. Copia el "Place ID" que aparece (ej: ChIJN1t_tDeuEmsRUsoyG83frY4)
  // 4. Pega ese valor abajo en GOOGLE_PLACE_ID
  //
  // Mientras tanto, dejamos el link corto original como respaldo: llevará
  // a la ficha de Maps del restaurante (no abre el formulario de estrellas
  // directo), para que el boton nunca quede roto.
  google: {
    placeId: "", // <-- PEGA AQUI el Place ID cuando lo tengas
    fallbackMapsUrl: "https://maps.app.goo.gl/4wqbj7rGC3gq21dr6",
  },
};

/**
 * Devuelve la URL que abre directamente el formulario de "Escribir reseña"
 * de Google (estrellas + texto). Si aun no hay Place ID configurado, cae
 * de vuelta al link de Maps normal para no romper el boton.
 */
function getGoogleReviewUrl() {
  const { placeId, fallbackMapsUrl } = SITE_CONFIG.google;
  if (placeId && placeId.trim().length > 0) {
    return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(
      placeId.trim()
    )}`;
  }
  return fallbackMapsUrl;
}

/**
 * content-data.js
 * Contenido editable de las secciones "Por qué Café Victoria" y "Reseñas".
 * Reemplaza los textos placeholder con informacion real del restaurante.
 */

// Fotos reales del local y de los platillos (recortadas del menú físico).
// No teníamos un video del restaurante, así que la sección "Showreel"
// se resolvió como una galería de fotos reales en su lugar.
const GALLERY_ITEMS = [
  { image: "assets/img/menu/hamburguesa_victoria.jpg", caption: "Hamburguesa Victoria" },
  { image: "assets/img/menu/salmon_plancha.jpg", caption: "Salmón a la plancha" },
  { image: "assets/img/menu/ambiance_cafes.jpg", caption: "Café Don Fabio" },
  { image: "assets/img/menu/tortilla_alinada.jpg", caption: "Tortilla con queso" },
  { image: "assets/img/menu/ensalada_cobb.jpg", caption: "Ensalada Cobb" },
  { image: "assets/img/menu/lomo_saltado.jpg", caption: "Lomo saltado" },
  { image: "assets/img/menu/paris_brest.jpg", caption: "Paris Brest" },
  { image: "assets/img/menu/deliciosos_sandwiches.jpg", caption: "Sándwiches de la casa" },
];

const WHY_US_ITEMS = [
  {
    icon: "leaf",
    title: "Ingredientes frescos",
    description: "Seleccionamos productos locales y de temporada para garantizar sabor autentico en cada platillo.",
  },
  {
    icon: "chef-hat",
    title: "Recetas caseras",
    description: "Preparaciones con años de tradición familiar, hechas al momento y con dedicación.",
  },
  {
    icon: "heart",
    title: "Ambiente cálido",
    description: "Un espacio pensado para compartir en familia, con amigos o para disfrutar solo un buen café.",
  },
  {
    icon: "clock",
    title: "Servicio rápido",
    description: "Cuidamos tu tiempo sin sacrificar calidad: tu pedido en la mesa en minutos.",
  },
];

// Testimonios de ejemplo. Se recomienda reemplazarlos por reseñas reales
// (con permiso de los clientes) o eliminarlos cuando existan reseñas
// reales en Google que se puedan destacar aqui.
const TESTIMONIALS = [
  {
    name: "Cliente frecuente",
    rating: 5,
    text: "La comida siempre está deliciosa y el servicio es excelente. Mi lugar favorito para desayunar.",
  },
  {
    name: "Cliente frecuente",
    rating: 5,
    text: "Ambiente muy agradable y los platillos tienen un sabor casero que se nota al instante.",
  },
  {
    name: "Cliente frecuente",
    rating: 5,
    text: "Variedad en el menú para todos los gustos, y los precios son muy justos.",
  },
];

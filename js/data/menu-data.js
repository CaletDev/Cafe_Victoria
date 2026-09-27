/**
 * menu-data.js
 * Fuente unica de datos del menu. Para agregar, quitar o editar platillos
 * solo se necesita modificar este arreglo: el resto del sitio (filtros,
 * tarjetas, precios) se genera automaticamente desde aqui.
 *
 * image: ruta dentro de assets/img/menu/. Si el archivo no existe todavia,
 * se muestra automaticamente una tarjeta de reemplazo con el nombre del
 * platillo (ver js/modules/menu-render.js), asi el sitio nunca se ve roto.
 */

const MENU_CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "entradas", label: "Entradas" },
  { id: "fuertes", label: "Platos Fuertes" },
  { id: "postres", label: "Postres" },
  { id: "bebidas", label: "Bebidas" },
];

const MENU_ITEMS = [
  {
    id: "item-01",
    category: "entradas",
    name: "Nombre del platillo",
    description: "Descripción corta del platillo: ingredientes principales y estilo de preparación.",
    price: 0.0,
    image: "assets/img/menu/entrada-01.jpg",
    tags: [], // ej: ["popular", "vegetariano", "picante"]
  },
  {
    id: "item-02",
    category: "entradas",
    name: "Nombre del platillo",
    description: "Descripción corta del platillo.",
    price: 0.0,
    image: "assets/img/menu/entrada-02.jpg",
    tags: [],
  },
  {
    id: "item-03",
    category: "fuertes",
    name: "Nombre del platillo",
    description: "Descripción corta del platillo.",
    price: 0.0,
    image: "assets/img/menu/fuerte-01.jpg",
    tags: ["popular"],
  },
  {
    id: "item-04",
    category: "fuertes",
    name: "Nombre del platillo",
    description: "Descripción corta del platillo.",
    price: 0.0,
    image: "assets/img/menu/fuerte-02.jpg",
    tags: [],
  },
  {
    id: "item-05",
    category: "postres",
    name: "Nombre del postre",
    description: "Descripción corta del postre.",
    price: 0.0,
    image: "assets/img/menu/postre-01.jpg",
    tags: [],
  },
  {
    id: "item-06",
    category: "bebidas",
    name: "Nombre de la bebida",
    description: "Descripción corta de la bebida.",
    price: 0.0,
    image: "assets/img/menu/bebida-01.jpg",
    tags: [],
  },
];

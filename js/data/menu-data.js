/**
 * menu-data.js
 * Fuente unica de datos del menu real de Victoria Cafetería (precios en
 * colones costarricenses, tomados del menú físico del local). Para
 * agregar, quitar o editar platillos solo se necesita modificar este
 * arreglo: el resto del sitio (filtros, tarjetas, precios) se genera
 * automáticamente desde aquí.
 *
 * Todos los precios están sujetos a un 10% de servicio adicional
 * (ver nota junto al menú en index.html).
 *
 * image: ruta dentro de assets/img/menu/. Si el archivo no existe todavía
 * (la mayoría de platillos aún no tiene foto propia), se muestra
 * automáticamente una tarjeta de reemplazo con el nombre del platillo
 * (ver js/modules/menu-render.js), así el sitio nunca se ve roto.
 */

const MENU_CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "cafe-caliente", label: "Café caliente" },
  { id: "cafe-frio", label: "Café frío" },
  { id: "bebidas", label: "Bebidas" },
  { id: "rapidas", label: "Comida rápida" },
  { id: "sandwiches", label: "Sándwiches" },
  { id: "boca", label: "Boca y típicos" },
  { id: "saludable", label: "Ensaladas y bowls" },
  { id: "almuerzo", label: "Almuerzos" },
  { id: "postres", label: "Postres" },
];

const MENU_ITEMS = [
  // ---------- Café caliente ----------
  { id: "cc-01", category: "cafe-caliente", name: "Espresso", description: "Doble ₡1850.", price: 1350, image: "assets/img/menu/espresso.jpg", tags: [] },
  { id: "cc-02", category: "cafe-caliente", name: "Cortado", description: "", price: 1750, image: "assets/img/menu/cortado.jpg", tags: [] },
  { id: "cc-03", category: "cafe-caliente", name: "Macchiato", description: "", price: 1750, image: "assets/img/menu/macchiato.jpg", tags: [] },
  { id: "cc-04", category: "cafe-caliente", name: "Café Don Fabio", description: "En leche más intenso.", price: 2250, image: "assets/img/menu/ambiance_cafes.jpg", tags: ["popular"] },
  { id: "cc-05", category: "cafe-caliente", name: "Café Doña Rosita", description: "Fuerte en leche y chocolate.", price: 2250, image: "assets/img/menu/dona-rosita.jpg", tags: [] },
  { id: "cc-06", category: "cafe-caliente", name: "Flat White", description: "", price: 1700, image: "assets/img/menu/flat-white.jpg", tags: [] },
  { id: "cc-07", category: "cafe-caliente", name: "Café con leche", description: "", price: 1650, image: "assets/img/menu/cafe-con-leche.jpg", tags: [] },
  { id: "cc-08", category: "cafe-caliente", name: "Americano", description: "Fuerte ₡1900.", price: 1450, image: "assets/img/menu/americano.jpg", tags: [] },
  { id: "cc-09", category: "cafe-caliente", name: "Latte", description: "", price: 1700, image: "assets/img/menu/latte.jpg", tags: [] },
  { id: "cc-10", category: "cafe-caliente", name: "Capuchino", description: "Pequeño ₡1700 · Grande ₡2400.", price: 1700, image: "assets/img/menu/capuchino.jpg", tags: [] },
  { id: "cc-11", category: "cafe-caliente", name: "Moka", description: "", price: 2400, image: "assets/img/menu/moka.jpg", tags: [] },
  { id: "cc-12", category: "cafe-caliente", name: "Latte irlandés", description: "", price: 2700, image: "assets/img/menu/latte-irlandes.jpg", tags: [] },
  { id: "cc-13", category: "cafe-caliente", name: "Latte sabor a elegir", description: "", price: 2450, image: "assets/img/menu/latte-sabor.jpg", tags: [] },
  { id: "cc-14", category: "cafe-caliente", name: "Matcha Latte", description: "", price: 2500, image: "assets/img/menu/matcha-latte.jpg", tags: [] },
  { id: "cc-15", category: "cafe-caliente", name: "Darlin", description: "", price: 1800, image: "assets/img/menu/darlin.jpg", tags: [] },
  { id: "cc-16", category: "cafe-caliente", name: "Café chorreado", description: "Disponible de lunes a viernes.", price: 1900, image: "assets/img/menu/chorreado.jpg", tags: [] },
  { id: "cc-17", category: "cafe-caliente", name: "Vandola", description: "", price: 2600, image: "assets/img/menu/vandola.jpg", tags: [] },
  { id: "cc-18", category: "cafe-caliente", name: "Prensa francesa", description: "", price: 2500, image: "assets/img/menu/prensa.jpg", tags: [] },
  { id: "cc-19", category: "cafe-caliente", name: "Chocolate caliente", description: "", price: 1800, image: "assets/img/menu/chocolate.jpg", tags: [] },
  { id: "cc-20", category: "cafe-caliente", name: "Chocomenta", description: "", price: 2200, image: "assets/img/menu/chocomenta.jpg", tags: [] },
  { id: "cc-21", category: "cafe-caliente", name: "Agua dulce negra", description: "", price: 1450, image: "assets/img/menu/agua-dulce.jpg", tags: [] },
  { id: "cc-22", category: "cafe-caliente", name: "Agua dulce con leche", description: "", price: 1700, image: "assets/img/menu/agua-dulce-leche.jpg", tags: [] },
  { id: "cc-23", category: "cafe-caliente", name: "Té chai", description: "", price: 1950, image: "assets/img/menu/te-chai.jpg", tags: [] },

  // ---------- Café frío ----------
  { id: "cf-01", category: "cafe-frio", name: "Afogato", description: "", price: 2200, image: "assets/img/menu/afogato.jpg", tags: [] },
  { id: "cf-02", category: "cafe-frio", name: "Frapé", description: "Sabor a elegir.", price: 3500, image: "assets/img/menu/frape.jpg", tags: [] },
  { id: "cf-03", category: "cafe-frio", name: "Capuchino Victoria", description: "Estilo s'more.", price: 3800, image: "assets/img/menu/capuchino-victoria.jpg", tags: ["popular"] },
  { id: "cf-04", category: "cafe-frio", name: "Capuchino frío", description: "", price: 3700, image: "assets/img/menu/capuchino-frio.jpg", tags: [] },
  { id: "cf-05", category: "cafe-frio", name: "Moka frío", description: "", price: 3800, image: "assets/img/menu/moka-frio.jpg", tags: [] },
  { id: "cf-06", category: "cafe-frio", name: "Oreo", description: "", price: 3800, image: "assets/img/menu/oreo.jpg", tags: [] },
  { id: "cf-07", category: "cafe-frio", name: "Avellanas", description: "Chocolate, maní, avellanas y chantilly.", price: 3800, image: "assets/img/menu/avellanas.jpg", tags: [] },
  { id: "cf-08", category: "cafe-frio", name: "Frapino", description: "Crema irlandesa, chocolate y chantilly.", price: 3500, image: "assets/img/menu/frapino.jpg", tags: [] },
  { id: "cf-09", category: "cafe-frio", name: "Café higos", description: "", price: 3550, image: "assets/img/menu/cafe-higos.jpg", tags: [] },
  { id: "cf-10", category: "cafe-frio", name: "Iced Latte", description: "Sabor a elegir.", price: 2650, image: "assets/img/menu/iced-latte.jpg", tags: [] },
  { id: "cf-11", category: "cafe-frio", name: "Iced Matcha", description: "", price: 3000, image: "assets/img/menu/iced-matcha.jpg", tags: [] },
  { id: "cf-12", category: "cafe-frio", name: "Cold Brew", description: "", price: 2650, image: "assets/img/menu/cold-brew.jpg", tags: [] },
  { id: "cf-13", category: "cafe-frio", name: "Batido de cacao", description: "", price: 2200, image: "assets/img/menu/batido-cacao.jpg", tags: [] },
  { id: "cf-14", category: "cafe-frio", name: "Té chai frío", description: "", price: 2400, image: "assets/img/menu/te-chai-frio.jpg", tags: [] },
  { id: "cf-15", category: "cafe-frio", name: "Latte irlandés frío", description: "", price: 3800, image: "assets/img/menu/latte-irlandes-frio.jpg", tags: [] },
  { id: "cf-16", category: "cafe-frio", name: "Darlin Iced", description: "", price: 2750, image: "assets/img/menu/darlin-iced.jpg", tags: [] },
  { id: "cf-17", category: "cafe-frio", name: "Milk shake", description: "Vainilla, fresa u oreo.", price: 3500, image: "assets/img/menu/milkshake.jpg", tags: [] },
  { id: "cf-18", category: "cafe-frio", name: "Capricho tropical", description: "Frutos rojos, maracuyá y mango.", price: 3200, image: "assets/img/menu/capricho-tropical.jpg", tags: [] },

  // ---------- Bebidas ----------
  { id: "beb-01", category: "bebidas", name: "Fresco natural en agua", description: "Papaya, mora, fresa, sandía, mango, piña, guanábana, limonada, melón o maracuyá. Grande ₡2400.", price: 1600, image: "assets/img/menu/fresco-agua.jpg", tags: [] },
  { id: "beb-02", category: "bebidas", name: "Fresco natural en leche", description: "Papaya, melón, fresa, guanábana o maracuyá.", price: 2750, image: "assets/img/menu/fresco-leche.jpg", tags: [] },
  { id: "beb-03", category: "bebidas", name: "Mixtos de frutas", description: "Limón hierbabuena, hierbabuena-piña, hierbabuena-fresa, hierbabuena-guanábana, fresa-limón, papaya-limón, mango-melón y más combinaciones.", price: 2500, image: "assets/img/menu/mixtos.jpg", tags: [] },
  { id: "beb-04", category: "bebidas", name: "Ponche de frutas", description: "", price: 2500, image: "assets/img/menu/ponche.jpg", tags: [] },
  { id: "beb-05", category: "bebidas", name: "Té frío de la casa", description: "", price: 1900, image: "assets/img/menu/te-frio.jpg", tags: [] },
  { id: "beb-06", category: "bebidas", name: "Jugo de naranja", description: "", price: 1500, image: "assets/img/menu/jugo-naranja.jpg", tags: [] },
  { id: "beb-07", category: "bebidas", name: "Horchata", description: "", price: 2750, image: "assets/img/menu/horchata.jpg", tags: [] },
  { id: "beb-08", category: "bebidas", name: "Crema", description: "", price: 2750, image: "assets/img/menu/crema.jpg", tags: [] },
  { id: "beb-09", category: "bebidas", name: "Gaseosas", description: "", price: 1750, image: "assets/img/menu/gaseosas.jpg", tags: [] },

  // ---------- Comida rápida ----------
  { id: "rap-01", category: "rapidas", name: "Hamburguesa Victoria", description: "Torta de carne angus, pan artesanal, tocineta, cebolla caramelizada y mozzarella.", price: 6800, image: "assets/img/menu/hamburguesa_victoria.jpg", tags: ["popular"] },
  { id: "rap-02", category: "rapidas", name: "Hamburguesa de pollo", description: "Filete de pollo empanizado, lechuga, tomate, queso mozzarella y jamón, mayonesa de la casa.", price: 5400, image: "assets/img/menu/hamburguesa-pollo.jpg", tags: [] },
  { id: "rap-03", category: "rapidas", name: "Hamburguesa de pescado", description: "Filete de pescado empanizado, lechuga, tomate, pepinillos, queso mozzarella y salsa de la casa.", price: 5450, image: "assets/img/menu/hamburguesa-pescado.jpg", tags: [] },
  { id: "rap-04", category: "rapidas", name: "Wraps", description: "De pollo o carne.", price: 5800, image: "assets/img/menu/wrap.jpg", tags: [] },
  { id: "rap-05", category: "rapidas", name: "Wrap de camarón", description: "", price: 6450, image: "assets/img/menu/wrap-camaron.jpg", tags: [] },
  { id: "rap-06", category: "rapidas", name: "Orden de aros de cebolla", description: "", price: 2850, image: "assets/img/menu/aros-cebolla.jpg", tags: [] },
  { id: "rap-07", category: "rapidas", name: "Orden de quesitos fritos", description: "", price: 2850, image: "assets/img/menu/quesitos-fritos.jpg", tags: [] },
  { id: "rap-08", category: "rapidas", name: "Orden de papas", description: "", price: 2850, image: "assets/img/menu/papas.jpg", tags: [] },
  { id: "rap-09", category: "rapidas", name: "Orden de patacones", description: "", price: 2400, image: "assets/img/menu/patacones.jpg", tags: [] },
  { id: "rap-10", category: "rapidas", name: "Menú de niños", description: "Fajitas de pollo o pescado empanizado con papas, hamburguesa de pollo con papas, casado pequeño o pasta a la mantequilla.", price: 4100, image: "assets/img/menu/menu-ninos.jpg", tags: [] },

  // ---------- Sándwiches ----------
  { id: "san-01", category: "sandwiches", name: "Sandwich premium", description: "Pan ciabatta, filet de lomo o pollo a la plancha, hongos, queso mozzarella, cebolla caramelizada y papas en gajo.", price: 7200, image: "assets/img/menu/sandwich-premium.jpg", tags: [] },
  { id: "san-02", category: "sandwiches", name: "Sandwich de churrasco", description: "Filete de churrasco, pan ciabatta, mostaza dijon, chimichurri argentino y mozzarella, papas en gajo.", price: 6750, image: "assets/img/menu/sandwich-churrasco.jpg", tags: [] },
  { id: "san-03", category: "sandwiches", name: "Sandwich de salmón", description: "Salmón ahumado, arúgula, queso crema con eneldo, pepino y cebolla encurtida dulce.", price: 7800, image: "assets/img/menu/sandwich-salmon.jpg", tags: [] },
  { id: "san-04", category: "sandwiches", name: "Club Sandwich", description: "Pan ciabatta, mayonesa de la casa, lechuga, tomate, jamón de pavo, jamón, pechuga de pollo y mozzarella, con papas a la francesa.", price: 6200, image: "assets/img/menu/deliciosos_sandwiches.jpg", tags: [] },
  { id: "san-05", category: "sandwiches", name: "Sandwich de la casa", description: "Pan de la casa, mayonesa de la casa, lechuga, tomate, cebolla caramelizada y mozzarella. A elegir: mano de piedra con chimichurri, filete de pollo o filet de lomo.", price: 5800, image: "assets/img/menu/sandwich_casa.jpg", tags: ["popular"] },
  { id: "san-06", category: "sandwiches", name: "Sandwich Monte Cristo", description: "Pan brioche rebosado en mezcla de tostada francesa, doble queso, doble jamón, cebolla caramelizada y papas salteadas.", price: 5000, image: "assets/img/menu/montecristo.jpg", tags: ["popular"] },
  { id: "san-07", category: "sandwiches", name: "Sandwich tradicional - Pollo mechado", description: "", price: 4300, image: "assets/img/menu/sandwich-pollo-mechado.jpg", tags: [] },
  { id: "san-08", category: "sandwiches", name: "Sandwich tradicional - Carne mechada", description: "", price: 4600, image: "assets/img/menu/sandwich-carne-mechada.jpg", tags: [] },
  { id: "san-09", category: "sandwiches", name: "Sandwich tradicional - Carne y frijol", description: "", price: 5200, image: "assets/img/menu/sandwich-carne-frijol.jpg", tags: [] },
  { id: "san-10", category: "sandwiches", name: "Sandwich del cafetal", description: "Torta de huevo, aguacate, frijoles molidos y queso tierno.", price: 4500, image: "assets/img/menu/sandwich-cafetal.jpg", tags: [] },
  { id: "san-11", category: "sandwiches", name: "Sandwich integral", description: "Carne, pollo o jamón y queso.", price: 3300, image: "assets/img/menu/sandwich-integral.jpg", tags: [] },

  // ---------- Boca y típicos ----------
  { id: "boc-01", category: "boca", name: "Tostadas con clase", description: "Pan artesanal. A elegir: aguacate jamón y albahaca, pollo y queso, o guacamole tocineta y tomate.", price: 2850, image: "assets/img/menu/bruschetas.jpg", tags: [] },
  { id: "boc-02", category: "boca", name: "Bruschetta Caprecce", description: "Tomate, mozzarella y pesto.", price: 3200, image: "assets/img/menu/bruschetta-caprecce.jpg", tags: [] },
  { id: "boc-03", category: "boca", name: "Bruschetta champiñones parmegiana", description: "Hongos salteados, parmesano y mozzarella.", price: 3200, image: "assets/img/menu/bruschetta-champinones.jpg", tags: [] },
  { id: "boc-04", category: "boca", name: "Bruschetta griega", description: "Tomate, queso y aceitunas.", price: 3200, image: "assets/img/menu/bruschetta-griega.jpg", tags: [] },
  { id: "boc-05", category: "boca", name: "Bruschetta de camarones", description: "Camarones, arúgula, tomate y oliva.", price: 3900, image: "assets/img/menu/bruschetta-camarones.jpg", tags: [] },
  { id: "boc-06", category: "boca", name: "Bruschetta de salmón ahumado", description: "Salmón ahumado, arúgula, cebolla morada, alcaparra y oliva.", price: 3900, image: "assets/img/menu/bruschetta-salmon.jpg", tags: [] },
  { id: "boc-07", category: "boca", name: "Empanada", description: "Carne, pollo, papa, queso, frijoles o frijol con queso.", price: 2600, image: "assets/img/menu/empanadas.jpg", tags: [] },
  { id: "boc-08", category: "boca", name: "Bizcocho", description: "Dos unidades.", price: 2300, image: "assets/img/menu/biscocho.jpg", tags: [] },
  { id: "boc-09", category: "boca", name: "Tortilla con queso", description: "", price: 3900, image: "assets/img/menu/tortilla_alinada.jpg", tags: ["popular"] },
  { id: "boc-10", category: "boca", name: "Gallo picadillo", description: "", price: 2800, image: "assets/img/menu/gallo-picadillo.jpg", tags: [] },
  { id: "boc-11", category: "boca", name: "Maduro con queso y natilla", description: "", price: 2950, image: "assets/img/menu/maduro.jpg", tags: [] },
  { id: "boc-12", category: "boca", name: "Prensada con queso", description: "Dos unidades.", price: 2300, image: "assets/img/menu/prensada.jpg", tags: [] },

  // ---------- Ensaladas y bowls ----------
  { id: "sal-01", category: "saludable", name: "Bowl de salmón", description: "Mix de lechuga, hongos, pasas, uchuvas, tomate, aguacate, zanahoria, pepino, rábano, queso y crotones.", price: 9850, image: "assets/img/menu/bowl_salmon.jpg", tags: [] },
  { id: "sal-02", category: "saludable", name: "Bowl de camarones", description: "Mix de lechuga, hongos, pasas, uchuvas, tomate, aguacate, zanahoria, pepino, rábano, queso y crotones.", price: 7850, image: "assets/img/menu/bowl-camarones.jpg", tags: [] },
  { id: "sal-03", category: "saludable", name: "Bowl de pollo", description: "Mix de lechuga, hongos, pasas, uchuvas, tomate, aguacate, zanahoria, pepino, rábano, queso y crotones.", price: 7550, image: "assets/img/menu/bowl_pollo.jpg", tags: ["popular"] },
  { id: "sal-04", category: "saludable", name: "Bowl de churrasco", description: "Mix de lechuga, hongos, pasas, uchuvas, tomate, aguacate, zanahoria, pepino, rábano, queso y crotones.", price: 11000, image: "assets/img/menu/bowl-churrasco.jpg", tags: [] },
  { id: "sal-05", category: "saludable", name: "Ensalada Victoria", description: "Mix de lechuga, repollo morado, zanahoria, cebolla morada, semilla caramelizada, chips, aderezo del chef y proteína a escoger. Con lomo ₡8650.", price: 7550, image: "assets/img/menu/ensalada-victoria.jpg", tags: [] },
  { id: "sal-06", category: "saludable", name: "Ensalada Cobb", description: "Aguacate, huevo cocido, tomate cherry, cebolla morada, lechuga, tocineta crispy y aderezo cobb. Con lomo ₡9000.", price: 7850, image: "assets/img/menu/ensalada_cobb.jpg", tags: ["popular"] },
  { id: "sal-07", category: "saludable", name: "Ensalada César", description: "Lechuga romana, crotones de pan, queso parmesano, aderezo césar, gajos de tomate y filete de pollo a la plancha.", price: 6600, image: "assets/img/menu/ensalada-cesar.jpg", tags: [] },
  { id: "sal-08", category: "saludable", name: "Ensalada de salmón al limón", description: "Trozos de salmón, mix de lechuga, pepino, cebolla morada, tomate cherry, toque crujiente y citronela de limón.", price: 9000, image: "assets/img/menu/ensalada-salmon.jpg", tags: [] },
  { id: "sal-09", category: "saludable", name: "Ensalada mexicana", description: "Mix de lechuga, cebolla morada, frijoles, maíz asado, aguacate, pico de gallo, chips de tortilla, pollo a la parrilla y medio chile toreado.", price: 7850, image: "assets/img/menu/ensalada-mexicana.jpg", tags: [] },
  { id: "sal-10", category: "saludable", name: "Ensalada de berrys", description: "Mix de lechuga, pollo o lomo, fresas, cerezas, mora, tomate cherry, zanahoria, semilla caramelizada y aderezo de frutos rojos.", price: 9350, image: "assets/img/menu/ensalada_berry.jpg", tags: [] },
  { id: "sal-11", category: "saludable", name: "Sopa de pollo de la abuela", description: "", price: 5500, image: "assets/img/menu/sopa-pollo.jpg", tags: [] },
  { id: "sal-12", category: "saludable", name: "Crema de ayote", description: "Pequeña ₡2400 · Grande ₡4000.", price: 2400, image: "assets/img/menu/crema-ayote.jpg", tags: [] },
  { id: "sal-13", category: "saludable", name: "Crema de tomate", description: "Pequeña ₡2400 · Grande ₡4000.", price: 2400, image: "assets/img/menu/crema-tomate.jpg", tags: [] },
  { id: "sal-14", category: "saludable", name: "Sopa azteca", description: "", price: 4600, image: "assets/img/menu/sopa_azteca.jpg", tags: [] },

  // ---------- Almuerzos ----------
  { id: "alm-01", category: "almuerzo", name: "Casado Victoria", description: "Pollo asado, corvina empanizada, costilla de cerdo, pollo caribeño o churrasco. Acompañado de arroz, frijoles, picadillo, maduro y ensalada.", price: 7600, image: "assets/img/menu/casado-victoria.jpg", tags: [] },
  { id: "alm-02", category: "almuerzo", name: "Casado típico", description: "Pollo en salsa, carne en salsa, cerdo, lomo, pescado empanizado o pollo a la plancha. Acompañado de arroz, frijoles, picadillo, maduro y ensalada.", price: 5700, image: "assets/img/menu/casado-tipico.jpg", tags: [] },
  { id: "alm-03", category: "almuerzo", name: "Fajitas de pollo a la plancha", description: "Pollo jugoso en tiras con chile, cebolla y hongos, con frijoles molidos y ensalada.", price: 6300, image: "assets/img/menu/fajitas-plancha.jpg", tags: [] },
  { id: "alm-04", category: "almuerzo", name: "Fajitas de pollo empanizadas", description: "Con papas y ensalada.", price: 6500, image: "assets/img/menu/fajitas-empanizadas.jpg", tags: [] },
  { id: "alm-05", category: "almuerzo", name: "Pechuga de pollo a la plancha", description: "Acompañada de vegetales y puré.", price: 6100, image: "assets/img/menu/pechuga-plancha.jpg", tags: [] },
  { id: "alm-06", category: "almuerzo", name: "Fajitas de churrasco y pollo", description: "A la plancha con chile, cebolla y hongos, ensalada, guacamole y tortillas.", price: 7300, image: "assets/img/menu/fajitas-churrasco.jpg", tags: [] },
  { id: "alm-07", category: "almuerzo", name: "Cordón bleu", description: "Filet de pollo relleno con queso mozzarella y tocineta, bañado en salsa blanca con hongos, con puré y vegetales.", price: 7500, image: "assets/img/menu/cordon_bleu.jpg", tags: ["popular"] },
  { id: "alm-08", category: "almuerzo", name: "Pollo a la naranja", description: "Pechuga empanizada bañada en salsa de naranja, sobre puré de papa y vegetales salteados.", price: 7400, image: "assets/img/menu/pollo_naranja.jpg", tags: [] },
  { id: "alm-09", category: "almuerzo", name: "Pollo a la Florentina", description: "Pechuga a la plancha en salsa cremosa de queso y espinaca, con ensalada y puré.", price: 8500, image: "assets/img/menu/pollo-florentina.jpg", tags: [] },
  { id: "alm-10", category: "almuerzo", name: "Milanesa de pollo", description: "Filete empanizado gratinado con mozzarella y salsa pomodoro, puré de papa y ensalada.", price: 8800, image: "assets/img/menu/milanesa_pollo.jpg", tags: ["popular"] },
  { id: "alm-11", category: "almuerzo", name: "Corvina Victoria", description: "Empanizada o a la plancha, al ajillo o en salsa roja, con vegetales y puré.", price: 7900, image: "assets/img/menu/corvina-victoria.jpg", tags: [] },
  { id: "alm-12", category: "almuerzo", name: "Corvina empanizada", description: "Con patacones, ensalada y frijolitos.", price: 7900, image: "assets/img/menu/corvina-empanizada.jpg", tags: [] },
  { id: "alm-13", category: "almuerzo", name: "Corvina en salsa de camarones", description: "Bañada en camarones, con puré y ensalada.", price: 9600, image: "assets/img/menu/corvina-camarones.jpg", tags: [] },
  { id: "alm-14", category: "almuerzo", name: "Camarones al ajillo estilo Victoria", description: "Ajillo cremoso, arroz con culantro y ensalada.", price: 9600, image: "assets/img/menu/camarones_ajillo.jpg", tags: ["popular"] },
  { id: "alm-15", category: "almuerzo", name: "Salmón a la plancha", description: "Salsa de mango o finas hierbas, con puré y vegetales.", price: 11800, image: "assets/img/menu/salmon_plancha.jpg", tags: ["popular"] },
  { id: "alm-16", category: "almuerzo", name: "Salmón en salsa de camarones", description: "Filete sobre papas cocotte y ensalada verde.", price: 14200, image: "assets/img/menu/salmon-camarones.jpg", tags: [] },
  { id: "alm-17", category: "almuerzo", name: "Fish and chips", description: "Salsa tártara, ensalada y papitas.", price: 5750, image: "assets/img/menu/fish-chips.jpg", tags: [] },
  { id: "alm-18", category: "almuerzo", name: "Cuartillo de arroz con pollo", description: "Con ensalada y papas.", price: 5300, image: "assets/img/menu/cuartillo-arroz-pollo.jpg", tags: [] },
  { id: "alm-19", category: "almuerzo", name: "Cajuela de arroz con pollo", description: "Con ensalada y papas.", price: 6500, image: "assets/img/menu/cajuela-arroz-pollo.jpg", tags: [] },
  { id: "alm-20", category: "almuerzo", name: "Arroz con camarones", description: "Medio ₡5500 · Entero ₡6700. Con ensalada y papas.", price: 5500, image: "assets/img/menu/arroz_camarones.jpg", tags: [] },
  { id: "alm-21", category: "almuerzo", name: "Camarones con arroz", description: "", price: 8500, image: "assets/img/menu/camarones-arroz.jpg", tags: [] },
  { id: "alm-22", category: "almuerzo", name: "Pasta con pollo", description: "Fettuccini o rigatoni. Pesto, amatricciana, aurora o alfredo.", price: 7200, image: "assets/img/menu/pasta-pollo.jpg", tags: [] },
  { id: "alm-23", category: "almuerzo", name: "Pasta con camarones", description: "Fettuccini o rigatoni. Pesto, amatricciana, aurora o alfredo.", price: 8300, image: "assets/img/menu/pasta-camarones.jpg", tags: [] },
  { id: "alm-24", category: "almuerzo", name: "Pasta con salmón", description: "Fettuccini o rigatoni. Pesto, amatricciana, aurora o alfredo.", price: 9500, image: "assets/img/menu/pasta-salmon.jpg", tags: [] },
  { id: "alm-25", category: "almuerzo", name: "Mar y tierra", description: "Camarones jumbo al ajillo montados en un rib eye corte tagliata, sobre puré de papa gratinado, vegetales a la parrilla.", price: 15000, image: "assets/img/menu/mar-tierra.jpg", tags: [] },
  { id: "alm-26", category: "almuerzo", name: "Rib eye", description: "", price: 12900, image: "assets/img/menu/rib-eye.jpg", tags: [] },
  { id: "alm-27", category: "almuerzo", name: "New York", description: "", price: 13200, image: "assets/img/menu/new-york.jpg", tags: [] },
  { id: "alm-28", category: "almuerzo", name: "Churrasco", description: "", price: 11800, image: "assets/img/menu/churrasco.jpg", tags: [] },
  { id: "alm-29", category: "almuerzo", name: "Lomo en salsa pimienta", description: "Medallón de lomo en salsa pimienta ahumada, con puré de papa y vegetales.", price: 8600, image: "assets/img/menu/lomito_pimienta.jpg", tags: [] },
  { id: "alm-30", category: "almuerzo", name: "Lomo saltado", description: "Trozos de lomo al estilo peruano, con arroz y papas en gajo.", price: 8700, image: "assets/img/menu/lomo_saltado.jpg", tags: ["popular"] },
  { id: "alm-31", category: "almuerzo", name: "Lomo jalapeño", description: "Suave lomo bañado en salsa jalapeña, con arroz y ensalada.", price: 7500, image: "assets/img/menu/lomo-jalapeno.jpg", tags: [] },
  { id: "alm-32", category: "almuerzo", name: "Gallo de lomo", description: "Encebollado, con ensalada y frijolitos.", price: 6400, image: "assets/img/menu/gallo-lomo.jpg", tags: [] },
  { id: "alm-33", category: "almuerzo", name: "Lomo Zarcero", description: "Jugoso lomo glaseado con queso mozzarella, cebolla caramelizada, papas en gajo y pico de gallo.", price: 9000, image: "assets/img/menu/lomo_zarcero.jpg", tags: [] },
  { id: "alm-34", category: "almuerzo", name: "Lomito de cerdo hawaiano", description: "Sobre papas salteadas y ensalada, bañado en salsa estilo hawaiana de piña y manzana.", price: 8500, image: "assets/img/menu/lomito-hawaiano.jpg", tags: [] },
  { id: "alm-35", category: "almuerzo", name: "Costilla de cerdo BBQ", description: "Con papas en gajo y vegetales.", price: 9000, image: "assets/img/menu/costilla-cerdo.jpg", tags: [] },

  // ---------- Postres ----------
  { id: "pos-01", category: "postres", name: "Tres leches", description: "Receta original de la casa.", price: 3500, image: "assets/img/menu/tres_leches.jpg", tags: ["popular"] },
  { id: "pos-02", category: "postres", name: "Queque de chocolate", description: "", price: 3700, image: "assets/img/menu/queque-chocolate.jpg", tags: [] },
  { id: "pos-03", category: "postres", name: "Crocante", description: "", price: 2600, image: "assets/img/menu/crocante.jpg", tags: [] },
  { id: "pos-04", category: "postres", name: "Tiramisú", description: "", price: 3500, image: "assets/img/menu/tiramisu.jpg", tags: [] },
  { id: "pos-05", category: "postres", name: "Torta chilena", description: "", price: 3100, image: "assets/img/menu/torta-chilena.jpg", tags: [] },
  { id: "pos-06", category: "postres", name: "Cheesecake", description: "Maracuyá o frutos rojos.", price: 3500, image: "assets/img/menu/cheesecake.jpg", tags: [] },
  { id: "pos-07", category: "postres", name: "Copa de helado", description: "", price: 2500, image: "assets/img/menu/copa-helado.jpg", tags: [] },
  { id: "pos-08", category: "postres", name: "Paris Brest", description: "Solo fines de semana.", price: 3300, image: "assets/img/menu/paris_brest.jpg", tags: ["popular"] },
  { id: "pos-09", category: "postres", name: "Flan", description: "Pequeño ₡1500 · Grande ₡2500.", price: 1500, image: "assets/img/menu/flan.jpg", tags: [] },
  { id: "pos-10", category: "postres", name: "Arroz con leche", description: "", price: 1000, image: "assets/img/menu/arroz-con-leche.jpg", tags: [] },
  { id: "pos-11", category: "postres", name: "Queque de zanahoria", description: "", price: 2900, image: "assets/img/menu/queque-zanahoria.jpg", tags: [] },
  { id: "pos-12", category: "postres", name: "Queque seco", description: "Limón o naranja.", price: 2700, image: "assets/img/menu/queque-seco.jpg", tags: [] },
  { id: "pos-13", category: "postres", name: "Pan de elote", description: "", price: 2000, image: "assets/img/menu/pan-elote.jpg", tags: [] },
  { id: "pos-14", category: "postres", name: "Brownie", description: "Con helado ₡3500.", price: 2600, image: "assets/img/menu/brownie.jpg", tags: [] },
  { id: "pos-15", category: "postres", name: "Rollo de canela", description: "Con glaseado de queso crema.", price: 2550, image: "assets/img/menu/rollo-canela.jpg", tags: [] },
  { id: "pos-16", category: "postres", name: "Red Velvet", description: "", price: 3100, image: "assets/img/menu/red-velvet.jpg", tags: [] },
  { id: "pos-17", category: "postres", name: "Croquem bouche", description: "Solo fines de semana.", price: 2200, image: "assets/img/menu/croquem-bouche.jpg", tags: [] },
];

/* =====================================================================
   CONFIG DEL SITIO
   Aquí dejé todos los datos del negocio juntos para que sea fácil
   cambiarlos sin andar buscando en todo el código.

   Donde veas un TODO es algo que tenemos que poner o corregir entre todos.
   Casi todo lo que está aquí lo inventé yo para que la página se viera
   completa, así que pongan la info real jaja. (Busquen "TODO" con Ctrl+Shift+F)
   ===================================================================== */
window.SITE = {
  // TODO: pongan el nombre real del negocio, "Verde Espina" me lo inventé yo
  nombre: "Verde Espina",
  // TODO: el eslogan, cambien el que quieran
  eslogan: "Cactus, suculentas y macetas hechas con cariño",
  // TODO: WhatsApp real del negocio. Va con 52 y los 10 dígitos, sin espacios ni signos. Ese número es inventado
  whatsapp: "523300000000",
  // TODO: pongan la liga de la página de Facebook del negocio
  facebook: "https://www.facebook.com/",
  // TODO: liga de Instagram, si tienen. Si no, la quitamos
  instagram: "https://www.instagram.com/",
  // TODO: correo del negocio, el que puse es de mentiras
  correo: "hola@verdeespina.mx",
  // TODO: dirección real
  direccion: "Colonia Agua Fría, Zapopan, Jalisco, México",
  // TODO: lo que busca el mapa de Google. Entre más exacta la dirección, mejor sale
  mapa: "Agua Fría, Zapopan, Jalisco, México",
  // TODO: horario real, el que puse es inventado
  horario: "Lunes a sábado de 10:00 a 18:00 h",
  // TODO: costo del envío y desde cuánto es gratis (también inventé estos)
  envio: { costo: 60, gratisDesde: 600 },

  // TODO (importante): aquí va el ID del video de YouTube cuando lo subamos.
  videoYoutubeId: "RMSnOe6kxa4",

  // TODO (importante): cuando tengamos nuestras fotos las guardamos en /img y
  // cambiamos esto a true. Piden que las imágenes sean de nuestra autoría,
  // así que las ilustraciones que están ahora son solo para que se vea algo.
  usarFotos: false,

  // Las 3 diapositivas del inicio. "producto" es el producto que se dibuja
  // mientras no hay foto y "foto" es la ruta de la foto nuestra.
  // TODO: cambien los textos y pongan las fotos (img/slide-1.jpg, slide-2.jpg y slide-3.jpg)
  slides: [
    { titulo: "Plantas pequeñas, mucho carácter",
      texto: "Cactus y suculentas que cuidamos una por una en Zapopan.",
      cta: "Ver cactus", href: "tienda.html?tipo=cactus", producto: "c01", foto: "img/slide-1.jpg" },
    { titulo: "Macetas pintadas a mano",
      texto: "Cada maceta es única: la decoramos con colores vivos y diseños propios.",
      cta: "Ver macetas", href: "tienda.html?tipo=maceta", producto: "m01", foto: "img/slide-2.jpg" },
    { titulo: "Kits para regalar",
      texto: "Tres suculentas, sus macetas y una guía de cuidados lista para obsequiar.",
      cta: "Ver kits", href: "tienda.html?tipo=kit", producto: "k01", foto: "img/slide-3.jpg" }
  ],

  // TODO: estos testimonios los inventé. Pongan opiniones de clientes reales
  testimonios: [
    { nombre: "Cliente de ejemplo 1", texto: "Mi echeveria llegó perfecta y bien empacada. Me explicaron cómo regarla.", estrellas: 5 },
    { nombre: "Cliente de ejemplo 2", texto: "Las macetas pintadas están hermosas, ideales para regalo.", estrellas: 5 },
    { nombre: "Cliente de ejemplo 3", texto: "Atención rápida por WhatsApp y entrega a tiempo.", estrellas: 4 }
  ]
};

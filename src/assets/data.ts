export type Event = {
  id: string;
  type: string;
  title: string;
  description: string[];
  date: string;
  place: string;
  images: string[];
  partners: string;
  price: string;
  finalized: boolean;
  attendees: number;
};

export const eventsData: Event[] = [
  {
    id: '1ce87fa2-9fad-11ee-8c90-0242ac120002',
    type: "Conferencia",
    title: "Evento de Lanzamiento Oficial",
    description: [
      "👋 ¡Hola!, ¿Te imaginas un lugar donde se reúnen apasionados de la programación y la innovación nunca se detiene?🤔🤯",
      "Te invitamos a unirte a la Comunidad de Desarrollo de Software (CDS)😎💻💯🔥",
      "Si eres un entusiasta del código y buscas un espacio para aprender, crear y conectarte con mentes brillantes, ¡CDS es tu destino!",
      "🌐💻 Ven al evento y unete a nosotros, y seamos parte de la revolución digital juntos.",
    ],
    date: "Sabado, 02 Septiembre",
    place: "Auditorio, modulo 236, FICCT-UAGRM",
    images: ["/evento-de-lanzamiento.jpg"],
    partners: "",
    price: "0.0",
    finalized: true,
    attendees: 70,
  },
  {
    id: '2a36e37e-9fad-11ee-8c90-0242ac120002',
    type: "Taller",
    title: "Node con Express",
    description: [
      "En esta ocasión te traemos este taller gratuito y con cupos limitados, donde aprenderás a crear un backend decente y bien hecho😌💻🚀",
      "Los únicos requisitos para entrar son:",
      "- Llevar su Laptop💻🔥",
      "- Saber un poco de JS🥴👌🏻",
      "- Saber un poco de BD (sin importar el SGBD)🤓",
      "- Tener conocimiento de POO⏱️",
      "- Prestar mucha atención y practicar lo aprendido en el taller😎",
      "- Hacer las instalaciones que se les irá indicando en el grupo de WhatsApp⚙️💻📲",
    ],
    date: "Miercoles, 30 Octubre",
    place: "Auditorio, modulo 236, FICCT-UAGRM",
    images: ["/node.jpeg"],
    partners: "",
    price: "0.0",
    finalized: true,
    attendees: 0,
  },
  {
    id: 'da1d9390-9fae-11ee-8c90-0242ac120002',
    type: "Conferencia",
    title: "¡Evento de Navidad del CDS!",
    description: [
      "🌟 Descubre el Futuro Juntos 🌟",
      "✨ Presentación de novedades: Descubre las emocionantes actualizaciones y enfoques del CDS para el próximo año. ¡Prepárate para un viaje aún más emocionante en nuestra comunidad de desarrollo de software!.",
      "✨ Alianzas Estratégicas: Nos complace anunciar nuestras nuevas alianzas con instituciones destacadas en el ámbito tech y startups. Conéctate con representantes de estas organizaciones y descubre las oportunidades que están surgiendo para nuestra comunidad.",
      "¡Tu futuro en el desarrollo de software comienza aquí!",
      "✨ Networking Festivo: Celebremos juntos la temporada navideña con un ambiente festivo y oportunidades de networking. Conoce a otros miembros de la comunidad, comparte experiencias y establece conexiones valiosas.",
      "✨ Más sorpresas...",
    ],
    date: "Jueves, 21 Diciembre",
    place: "Modulo 236, 4to piso, Auditorio FICCT-UAGRM",
    images: ["/evento-navidad.jpg"],
    partners: "",
    price: "0.0",
    finalized: true,
    attendees: 0,
  }
];

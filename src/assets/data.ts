export type Event = {
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
    type: "Conferencia",
    title: "Evento de Lanzamiento Demo",
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
    attendees: 0,
  },
  {
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
    attendees: 0,
  },

  {
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
    finalized: false,
    attendees: 0,
  },
];

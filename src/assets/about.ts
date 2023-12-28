/* eslint-disable import/no-anonymous-default-export */
import { HREF_JOIN, HREF_LEVELS, HREF_REGULATION } from "./hrefs";

export default [
  {
    title: "¿Quiénes somos?",
    content: [
      "Somos un espacio de colaboración donde compartimos recursos académicos, oportunidades laborales eventos y noticias relevantes en el mundo del desarrollo. Juntos, creamos un ambiente propicio para el aprendizaje y el networking. Si eres un apasionado del código, la innovación y el desarrollo de software, únete a nosotros y sé parte de esta emocionante travesía. ¡Juntos llevaremos nuestras habilidades al siguiente nivel! 🤝",
    ],
    links: null,
  },
  {
    title: "Staff",
    content: [
      "En CDS, estamos respaldados por un equipo apasionado y dedicado que trabaja incansablemente para hacer de nuestra comunidad un lugar vibrante y en constante crecimiento. Conoce a los miembros de nuestro equipo, cuya misión es facilitar un ambiente propicio para el aprendizaje, la colaboración y la innovación en el desarrollo de software.",
      "[Aquí irá una card que contenga al equipo completo.]",
    ],
    links: null,
  },
  {
    title: "Miembros",
    content: [
      "Nuestra comunidad se enorgullece de contar con miembros apasionados y talentosos que comparten el amor por el desarrollo de software. Descubre quiénes son los individuos que forman parte de esta emocionante travesía y conéctate con mentes brillantes.",
      "¿Eres apasionado por el código, la innovación y el desarrollo de software? ¡Entonces, la Comunidad de Desarrollo de Software es el lugar perfecto para ti! En CDS, nos esforzamos por crear un entorno donde cada miembro pueda crecer, aprender y contribuir al mundo del desarrollo de software.",
    ],
    links: [
      { href: HREF_JOIN, content: "¿Cómo unirte?" },
      { href: HREF_LEVELS, content: "Niveles" },
    ],
  },
  {
    title: "Vision",
    content: [
      "Ser la comunidad de desarrollo de software líder y referente a nivel global, donde cada miembro encuentra inspiración, apoyo y recursos para alcanzar su máximo potencial. Buscamos ser un espacio donde la innovación y la colaboración florezcan, impulsando el crecimiento colectivo y contribuyendo al avance constante del mundo del desarrollo de software.",
    ],
    links: null,
  },
  {
    title: "Mision",
    content: [
      "En CDS - Comunidad de Desarrollo de Software, nos comprometemos a proporcionar un entorno dinámico y enriquecedor para todos los apasionados por el desarrollo de software. Nuestra misión es fomentar el aprendizaje continuo, la colaboración activa y el crecimiento profesional. Buscamos ser el punto de encuentro donde las ideas se convierten en soluciones, donde las habilidades se perfeccionan y donde cada miembro encuentra las herramientas y el apoyo necesario para sobresalir en su trayectoria de desarrollo.",
    ],
    links: [{ href: HREF_REGULATION, content: "Reglamento" }],
  },
];
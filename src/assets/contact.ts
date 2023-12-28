import { HREF_JOIN } from "./hrefs";

/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    title: "Información de Contacto",
    content: [
      `<ul>
        <li><strong>Correo Electrónico:</strong> cds.devs.community@gmail.com</li>
        <li><strong>WhatsApp:</strong> <a class="text-green-500" target="_blank" href="https://wa.me/75020808?text=Hola%20CDS%20Community,%20">¡Enviar Mensaje por WhatsApp!</a></li>
      </ul>`
    ],
    links: null,
  },
  {
    title: "Redes Sociales",
    content: [
      "Síguenos en nuestras redes sociales para mantenerte al tanto de las últimas noticias, eventos y actualizaciones:",
      `<ul>
        <li><a href="https://www.facebook.com/cds.devs.community" target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/cds.devs" target="_blank">Instagram</a></li>
      </ul>`,
    ],
    links: null,
  },
  {
    title: "Oficina Central",
    content: [
      `Santa Cruz, Bolivia`,
    ],
    links: null,
  },
  {
    title: "¡Únete a la Conversación!",
    content: [
      "No olvides unirte a nuestras reuniones semanales y participar en la comunidad. Tu opinión es importante para nosotros, y estamos aquí para apoyarte en tu viaje de desarrollo de software.",
      "¡Esperamos saber de ti pronto!"
    ],
    links: [{ href: HREF_JOIN, content: "Unirse a CDS" }],
  },
]
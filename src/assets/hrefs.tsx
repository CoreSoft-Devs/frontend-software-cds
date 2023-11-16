import { Github, Instagram, Facebook } from "../components/shared/icons";

export const HREF_HOME = "/";
export const HREF_EVENTS = "/cds/eventos";
export const HREF_CONTACT = "/cds/contacto";
export const HREF_ABOUT = "/cds";
export const HREF_JOIN = "/cds/unirse";

const hrefs = [
  {
    href: "https://sauterdev.vercel.app",
    name: <Github />,
    icon: true,
    title: "Desarrollado por Luis Gabriel Janco",
  },
  {
    href: "https://www.instagram.com/cds.devs",
    name: <Instagram />,
    icon: true,
    title: "Instagram Comunidad de Desarrolladores de Software",
  },
  {
    href: "https://www.facebook.com/cds.devs.community",
    name: <Facebook />,
    icon: true,
    title: "Facebook Comunidad de Desarrolladores de Software",
  },
  { href: HREF_HOME, name: "Inicio", icon: false },
  { href: HREF_JOIN, name: "Unirse", icon: false },
  { href: HREF_EVENTS, name: "Eventos", icon: false },
  { href: HREF_CONTACT, name: "Contacto", icon: false },
  { href: HREF_ABOUT, name: "Acerca de nosotros", icon: false },
];

export default hrefs;

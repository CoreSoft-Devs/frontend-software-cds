import { Github, Instagram, Facebook } from "../components/shared/icons";

export const HREF_HOME = "/";
export const HREF_UNIRSE = "/unirse";
export const HREF_EVENTOS = "/#eventos";

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
  { href: HREF_UNIRSE, name: "Unirse", icon: false },
  { href: HREF_EVENTOS, name: "Eventos", icon: false },
];

export default hrefs;

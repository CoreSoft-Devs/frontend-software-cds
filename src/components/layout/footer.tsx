import Image from "next/image";
import Link from "next/link";
import React from "react";
import Copyright from "../copyright";
import { Facebook, Github, Instagram } from "../shared/icons";

const hrefs = [
  {
    href: "https://github.com/LuiSauter",
    name: <Github />,
    icon: true,
    title: "Desarollador",
  },
  { href: "/", name: <Instagram />, icon: true, title: "" },
  { href: "/", name: <Facebook />, icon: true, title: "" },
  { href: "/", name: "Inicio", icon: false },
  { href: "/", name: "Descripción", icon: false },
  { href: "/", name: "Eventos", icon: false },
];

const Footer = () => {
  return (
    <footer className="p-6 flex flex-col dark:bg-[#0a0a0a] border-t dark:border-gray-500/30 gap-4 overflow-hidden">
      <nav className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <Link href="/" scroll={true}>
            <Image
              src="/logo.png"
              alt="cds logo"
              width={30}
              height={30}
              className=""
            />
          </Link>
          <Copyright />
        </div>
        <div>dark, light</div>
      </nav>
      <ul className="flex flex-row flex-wrap gap-1 justify-between sm:justify-start sm:gap-6 text-gray-400">
        {hrefs.map((link, index) => (
          <li
            key={index}
            className={`hover:dark:text-white cursor-pointer py-2 md:min-w-fit ${
              link.icon
                ? "min-w-fit pr-4 sm:pr-1"
                : "min-w-[120px] sm:min-w-fit"
            } ${link.name === "Inicio" && "md:ml-4"}`}
          >
            {link.icon ? (
              <a href={link.href} target="_blank" title={link.title}>
                {link.name}
              </a>
            ) : (
              <Link href={link.href}>{link.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

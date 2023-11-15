"use client";
import { HREF_CONTACT, HREF_EVENTS, HREF_JOIN } from "@/assets/hrefs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-1 text-sm">
      <Link
        href="/cds"
        className={`${
          pathname === "/cds"
            ? "dark:bg-sky-500/10 bg-sky-500/5 dark:text-sky-500 text-sky-600 font-semibold hover:bg-sky-500/5 dark:hover:bg-sky-500/10"
            : "hover:bg-lightHover dark:hover:bg-darkHover"
        } px-3 py-2 rounded-md transition`}
      >
        Introducción
      </Link>
      <Link
        href={HREF_EVENTS}
        className={`${
          pathname === HREF_EVENTS
            ? "dark:bg-sky-500/10 bg-sky-500/5 dark:text-sky-500 text-sky-600 font-semibold hover:bg-sky-500/5 dark:hover:bg-sky-500/10"
            : "hover:bg-lightHover dark:hover:bg-darkHover"
        } px-3 py-2 rounded-md transition`}
      >
        Eventos
      </Link>
      <Link
        href={HREF_JOIN}
        className={`${
          pathname === HREF_JOIN
            ? "dark:bg-sky-500/10 bg-sky-500/5 dark:text-sky-500 text-sky-600 font-semibold hover:bg-sky-500/5 dark:hover:bg-sky-500/10"
            : "hover:bg-lightHover dark:hover:bg-darkHover"
        } px-3 py-2 rounded-md transition`}
      >
        Unirse
      </Link>
      <Link
        href={HREF_CONTACT}
        className={`${
          pathname === HREF_CONTACT
            ? "dark:bg-sky-500/10 bg-sky-500/5 dark:text-sky-500 text-sky-600 font-semibold hover:bg-sky-500/5 dark:hover:bg-sky-500/10"
            : "hover:bg-lightHover dark:hover:bg-darkHover"
        } px-3 py-2 rounded-md transition`}
      >
        Contacto
      </Link>
    </ul>
  );
};

export default Navigation;

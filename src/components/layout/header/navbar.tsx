import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSignInModal } from "@/hooks/useSignInModal";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import Image from "next/image";
import hrefs from "@/assets/hrefs";
import Dropdown from "@/components/shared/dropdown";

const Navbar = () => {
  const [openPopover, setOpenPopover] = useState(false);
  const { setShowSignModal, SignInModal } = useSignInModal();
  const { scrolled } = useScroll(50);
  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center backdrop-blur-3xl dark:border-gray-500/30 ${
          scrolled
            ? "border-b bg-white/70 dark:bg-black/70 transition-all"
            : "border-none"
        } z-20 transition-all duration-75`}
      >
        <nav className="px-6 flex h-16 max-w-screen-xl items-center justify-between w-full overflow-hidden">
          <Link
            href="/"
            className="flex items-center h-auto shrink-0 select-none touch-none"
          >
            <Image
              src="/logo-cds2.png"
              alt="cds logo"
              width="128"
              height="29"
              priority
              className="h-full w-fit min-w-fit select-none touch-none pointer-events-none object-contain"
            />
          </Link>
          <ul className="hidden sm:flex flex-row gap-6 dark:text-gray-400 text-gray-600 w-full [&>a]:hover:transition-all sm:justify-center">
            {hrefs.map(
              (href, index) =>
                !href.icon &&
                !["/contacto", "/acerca-de-nosotros"].includes(href.href) && (
                  <li
                    key={index}
                    className="hover:dark:text-white hover:text-black flex items-center"
                  >
                    <Link className="h-auto" href={href.href}>
                      {href.name}
                    </Link>
                  </li>
                )
            )}
            <li>
              <Dropdown
                openPopover={openPopover}
                setOpenPopover={setOpenPopover}
                content={
                  <div className="w-full rounded-md bg-white dark:bg-black p-2 sm:w-40">
                    <Link
                      href="/contacto"
                      className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-500/10 dark:hover:bg-gray-300/30 active:bg-gray-200"
                    >
                      Contacto
                    </Link>
                    <Link
                      href="/acerca-de-nosotros"
                      className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-500/10 dark:hover:bg-gray-300/30 active:bg-gray-200"
                    >
                      Acerca de Nosotros
                    </Link>
                    <Link
                      href="/desarrollado-por"
                      className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-500/10 dark:hover:bg-gray-300/30 active:bg-gray-200"
                    >
                      Desarrollado por
                    </Link>
                    <button
                      disabled={true}
                      className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all"
                    >
                      Dashboard
                    </button>
                  </div>
                }
              >
                <button
                  onClick={() => setOpenPopover(!openPopover)}
                  className={`${
                    openPopover && "text-white"
                  } flex gap-4 w-fit items-center justify-between transition-all hover:text-black dark:hover:text-white`}
                >
                  <span>Nosotros</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openPopover ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </Dropdown>
            </li>
          </ul>
          <button
            onClick={() => setShowSignModal(true)}
            className="rounded-full border dark:border-white bg-black text-white dark:bg-white h-8 dark:text-black px-3 sm:px-7 text-sm transition-all hover:dark:bg-gray-200 overflow-hidden whitespace-nowrap flex items-center justify-center"
          >
            Iniciar Sesión
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

"use client";
import React from "react";
import { useSignInModal } from "@/hooks/useSignInModal";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { setShowSignModal, SignInModal } = useSignInModal();
  const { scrolled } = useScroll(50);
  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center bg-white/70 dark:bg-black/70 backdrop-blur-xl dark:border-gray-500/30 ${
          scrolled ? "border-b" : "border-none"
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
          <div className="hidden sm:flex flex-row gap-6 dark:text-gray-400 w-full pl-8">
            <Link className="hover:dark:text-white" href="/">
              Inicio
            </Link>
            <Link className="hover:dark:text-white" href="/como-ser-parte">
              Unirse
            </Link>
            <Link className="hover:dark:text-white" href="/#events">
              Eventos
            </Link>
          </div>
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

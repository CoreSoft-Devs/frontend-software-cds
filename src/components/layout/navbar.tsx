"use client";
import React from "react";
import { useSignInModal } from "@/hooks/useSignInModal";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { setShowSignModal, SignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center dark:bg-black/70 backdrop-blur-xl dark:border-gray-500/30 ${
          scrolled ? "border-b" : "border-none"
        } z-30 transition-all duration-75`}
      >
        <nav className="px-6 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center h-auto shrink-0 select-none touch-none"
          >
            <Image
              src="/logo-cds2.png"
              alt="cds logo"
              width="100"
              height="50"
              className="h-full w-fit flex shrink-0 min-w-fit select-none touch-none pointer-events-none object-contain"
            />
          </Link>
          <button
            onClick={() => setShowSignModal(true)}
            className="rounded-md border dark:border-white dark:bg-white h-8 dark:text-black px-3 text-sm transition-all hover:dark:bg-gray-200"
          >
            Iniciar Sesión
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

'use client'
import { Suspense } from "react";
import { useSignInModal } from "@/hooks/useSignInModal";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import Image from "next/image";
import hrefs, { HREF_ABOUT, HREF_CONTACT } from "@/assets/hrefs";
import DropdownMenu from "./dropdownMenu";
import { useSession } from "next-auth/react";
import { LoadingDots } from "@/components/shared/icons";

const Navbar = () => {
  const { SignInModal, setShowSignModal } = useSignInModal();
  const { scrolled } = useScroll(50);

  const { status, data } = useSession()

  return (
    <>
      <Suspense fallback={<span className="fixed inset-0 z-10">Loading...</span>}>
        <SignInModal />
      </Suspense>
      <div
        className={`fixed top-0 w-full flex justify-center backdrop-blur-3xl dark:border-gray-500/30 ${scrolled
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
                ![HREF_CONTACT, HREF_ABOUT].includes(href.href) && (
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
              <DropdownMenu />
            </li>
          </ul>
          {status === 'authenticated' ? (
            <button onClick={() => setShowSignModal(true)} className="flex flex-row items-center gap-4 pr-6 hover:opacity-85">
              <Image className="rounded-full" src={data.user?.image} width={26} height={26} alt={data.user?.name} />
              <span className="whitespace-nowrap">{data.user?.name?.split(' ')[0]}</span>
            </button>
          ) : <button
            onClick={() => setShowSignModal(true)}
            className="rounded-full border dark:border-white bg-black text-white dark:bg-white h-8 dark:text-black px-3 sm:px-7 text-sm transition-all hover:dark:bg-gray-200 overflow-hidden whitespace-nowrap flex items-center justify-center"
          >
            {status === 'loading' ? <LoadingDots /> : 'Iniciar Sesión'}
          </button>}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

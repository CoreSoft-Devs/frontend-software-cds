"use client";
import about from "@/assets/about";
import { HREF_ABOUT, HREF_CONTACT, HREF_EVENTS, HREF_JOIN, HREF_LEVELS, HREF_REGULATION } from "@/assets/hrefs";
import join from "@/assets/join";
import levels from "@/assets/levels";
import regulation from "@/assets/regulation";
import useTableContent from "@/hooks/useTableContent";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TableOfContents = {
  [HREF_ABOUT]: about.map(data => data.title),
  [HREF_JOIN]: join.map(data => data.title),
  [HREF_REGULATION]: regulation.map(data => data.title),
  [HREF_LEVELS]: levels.map(data => data.title),
}

const notTableOfContent = [HREF_CONTACT, HREF_EVENTS]

const TableOfContent = () => {
  const pathname = usePathname()
  const { currentTitle, handleCurrentTitle } = useTableContent();

  return (
    <div className="w-full">
      <h3 className="font-semibold pt-4">En esta página</h3>
      <ul className="flex flex-col pt-3 gap-2 text-base text-gray-300">
        {!notTableOfContent.includes(pathname) && TableOfContents[pathname].map((href: string, index: number) => (
          <li
            key={index}
            className={`${currentTitle === href ? "text-sky-500 font-semibold" : ""
              } transition dark:hover:text-white hover:text-black`}
            onClick={() => handleCurrentTitle && handleCurrentTitle(href)}
          >
            <Link href={`#${href}`}>{href}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;

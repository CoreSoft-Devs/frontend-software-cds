"use client";
import useTableContent from "@/hooks/useTableContent";
import Link from "next/link";
import React from "react";

const data = [
  { href: "#¿Quiénes somos?", content: "¿Quiénes somos?" },
  { href: "#Staff", content: "Staff" },
  { href: "#Miembros", content: "Miembros" },
  { href: "#Vision", content: "Vision" },
  { href: "#Mision", content: "Mision" },
];

const TableOfContent = () => {
  const { currentTitle, handleCurrentTitle } = useTableContent();
  return (
    <div className="w-full">
      <h3 className="font-semibold pt-4">En esta página</h3>
      <ul className="flex flex-col pt-3 gap-2 text-base text-gray-300">
        {data.map(({ content, href }, index) => (
          <li
            key={index}
            className={`${
              currentTitle === content ? "text-sky-500 font-semibold" : ""
            } transition dark:hover:text-white hover:text-black`}
            onClick={() => handleCurrentTitle && handleCurrentTitle(content)}
          >
            <Link href={href}>{content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;

"use client";
import React, { useState } from "react";
import { Facebook, Instagram } from "../shared/icons";
import Link from "next/link";
import Paragraph from "../layout/paragraph";

const socialMedia = [
  {
    icon: <Instagram className="text-red-500" />,
    name: "@cds.devs",
    href: "https://www.instagram.com/cds.devs",
  },
  {
    icon: <Facebook className="text-blue-500" />,
    name: "cds.devs.community",
    href: "https://www.facebook.com/cds.devs.community",
  },
];

const Container = ({
  children,
  isOver,
}: {
  children: React.ReactNode;
  isOver: boolean;
}) => {
  return (
    <div className="p-[1px] rounded-full mx-auto w-fit flex mb-5 overflow-hidden relative transform animate-pulse2 hover:animate-none">
      <i
        className="border-animation transition-all duration-200"
        style={{ opacity: isOver ? "1" : "0" }}
      />
      {children}
    </div>
  );
};

const LinkAnimated = ({
  random = 0,
  page,
  href,
  content = "",
}: {
  random?: number;
  page: boolean;
  href?: string;
  content?: string | React.ReactNode;
}) => {
  const [isOver, setIsOver] = useState<boolean>(false);

  if (page && href) {
    return (
      <Container isOver={isOver}>
        <Link
          href={href}
          className="border dark:border-gray-500/30 dark:text-gray-400 py-2 px-6 rounded-full z-10 bg-white dark:bg-black flex flex-row items-center gap-2 whitespace-nowrap overflow-hidden w-fit dark:hover:[&>p]:text-white"
          onMouseEnter={() => setIsOver(true)}
          onMouseLeave={() => setIsOver(false)}
        >
          <Paragraph>{content}</Paragraph>
        </Link>
      </Container>
    );
  }

  return (
    <Container isOver={isOver}>
      <a
        href={socialMedia[random].href}
        target="_blank"
        className="border dark:border-gray-500/30 hover:text-gray-600 text-gray-500 dark:text-gray-400 text-xs sm:text-sm py-2 px-6 rounded-full z-10 bg-white dark:bg-black flex flex-row items-center gap-2 whitespace-nowrap overflow-hidden w-fit"
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      >
        Síguenos en
        {socialMedia[random].icon} {socialMedia[random].name}
      </a>
    </Container>
  );
};

export default LinkAnimated;

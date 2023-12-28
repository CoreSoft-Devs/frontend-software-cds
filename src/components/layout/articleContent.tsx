'use client'
import useNearScreen from "@/hooks/useNearScreen";
import { useRef } from "react";
import SubTitle from "./subTitle";
import Paragraph from "./paragraph";
import Link from "next/link";

type Props = {
  content: string[];
  links: { href: string; content: string }[] | null;
  title: string;
}

const ArticleContent = ({ content, links, title }: Props) => {

  const externalRef = useRef(null);
  useNearScreen({
    externalRef: externalRef,
    distance: "-100px",
  });

  return (
    <article ref={externalRef} id={"nav" + title}>
      <SubTitle isDoc={true}>{title}</SubTitle>
      {content.join('').includes('<li>') ? content.map((paragraph, index) => (
        <Paragraph key={index} isDoc isString={true} isList>
          {paragraph}
        </Paragraph>
      )) : content.map((paragraph, index) => (
        <Paragraph key={index} isDoc isString={true}>
          {paragraph}
        </Paragraph>
      ))}
      {/* {content.map((paragraph, index) => (
        <Paragraph key={index} isDoc isString={true}>
          {paragraph}
        </Paragraph>
      ))} */}
      {links && <Paragraph isString={false} isDoc className="flex gap-2 items-center">
        {links?.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-3 py-1 rounded-md odd:text-red-500 odd:bg-red-500/10 odd:hover:bg-red-500/20 even:text-sky-500 even:bg-sky-500/10 even:hover:bg-sky-500/20"
          >
            {link.content}
          </Link>
        ))}
      </Paragraph>}
    </article>
  );
};

export default ArticleContent
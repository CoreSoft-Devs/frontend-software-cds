"use client";
import Link from "next/link";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  isDoc?: boolean;
  isTitle?: boolean;
  className?: string;
};

const SubTitle = ({
  children,
  isDoc = false,
  isTitle = false,
  className,
}: Props) => {
  const [mouseOver, setMouseOver] = useState(false);
  if (isDoc) {
    if (isTitle) {
      return (
        <h1 className={`${className} text-3xl font-bold leading-normal pt-2`}>
          {children}
        </h1>
      );
    }
    return (
      <h2
        className={`${className} text-3xl font-medium leading-normal pt-10 pb-1 border-b border-border flex items-center gap-2 relative`}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <span className="absolute -top-14" id={`${children}`} />
        {children}{" "}
        <Link
          href={`#${children}`}
          className={`${
            mouseOver ? "opacity-60" : ""
          } opacity-0 transition-opacity`}
        >
          #
        </Link>
      </h2>
    );
  }

  return (
    <h2
      className={`${className} text-4xl font-semibold lg:text-6xl pb-7 leading-normal lg:max-w-5xl`}
    >
      {children}
    </h2>
  );
};

export default SubTitle;

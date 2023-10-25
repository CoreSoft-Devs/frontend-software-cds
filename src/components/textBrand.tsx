import React from "react";

const TextBrand = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <span
      className={`${className} md:font-extrabold dark:text-white text-black font-bold`}
    >
      {children}
    </span>
  );
};

export default TextBrand;

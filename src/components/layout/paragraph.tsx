import React from "react";

type Props = {
  children: string | React.ReactNode
  isDoc?: boolean;
  className?: string;
  isString?: boolean
  isList?: boolean
};

const Paragraph = ({ children, isDoc = false, className, isString = false, isList = false }: Props) => {
  if (isDoc) {
    if (isString) {
      const content: string | TrustedHTML = String(children)
      const Element = React.createElement( isList ? 'div' : 'p', {className: `${className} text-lg font-normal text-gray-700 dark:text-gray-300 mt-6 [&>ul]:text-lg [&>ul>li]:font-normal [&>ul>li]:text-gray-700 [&>ul>li]:dark:text-gray-300 [&>ul>li]:mt-6`, dangerouslySetInnerHTML:{__html: content }})
      return Element
    } else {
      const ChildrenELement = React.createElement( isList ? 'div' : 'p', {className: `${className} text-lg font-normal text-gray-700 dark:text-gray-300 mt-6` }, children)
      return  ChildrenELement
    }

  }
  return (
    <p className='text-lg lg:text-xl text-gray-600 dark:text-gray-300 lg:max-w-3xl aria-[label="initial"]:bg-red-500'>
      {children}
    </p>
  );
};
export default React.memo(Paragraph);

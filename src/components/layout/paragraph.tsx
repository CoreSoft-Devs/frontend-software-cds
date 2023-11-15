type Props = {
  children: React.ReactNode;
  isDoc?: boolean;
  className?: string;
};

const Paragraph = ({ children, isDoc = false, className }: Props) => {
  if (isDoc) {
    return (
      <p
        className={`${className} text-lg font-normal text-gray-700 dark:text-gray-300 mt-6`}
      >
        {children}
      </p>
    );
  }
  return (
    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 lg:max-w-3xl">
      {children}
    </p>
  );
};
export default Paragraph;

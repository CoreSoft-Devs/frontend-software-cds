const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 lg:max-w-3xl">
      {children}
    </p>
  );
};
export default Paragraph;

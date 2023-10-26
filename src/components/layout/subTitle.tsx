const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl font-semibold lg:text-6xl pb-7 leading-normal lg:max-w-5xl">
      {children}
    </h2>
  );
};

export default SubTitle;

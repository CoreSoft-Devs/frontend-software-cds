import { TableofcontentContext } from "@/context/TableContentContext";
import { useContext } from "react";

const useTableContent = () => {
  const { currentTitle, handleCurrentTitle } = useContext(
    TableofcontentContext
  );
  return { currentTitle, handleCurrentTitle };
};

export default useTableContent;

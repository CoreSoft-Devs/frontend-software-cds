"use client";
import { ReactNode, createContext, useState } from "react";

type TableContent = {
  currentTitle: string | null;
  handleCurrentTitle?: (value: string | null) => void;
};

interface Props {
  children: ReactNode | JSX.Element | JSX.Element[];
}

export const TableofcontentContext = createContext<TableContent>(
  {} as TableContent
);

export const TableofcontentStateProvider = ({ children }: Props) => {
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);
  const handleCurrentTitle = (value: string | null) => setCurrentTitle(value);
  return (
    <TableofcontentContext.Provider
      value={{ currentTitle, handleCurrentTitle }}
    >
      {children}
    </TableofcontentContext.Provider>
  );
};

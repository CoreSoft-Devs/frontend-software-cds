"use client";
import React from 'react';
import { ThemeProvider } from "../context/ThemeProvider";

type Children = {
  children: React.ReactNode;
};

const Providers = ({ children }: Children) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
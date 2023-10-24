"use client";
import React, { Suspense } from "react";
import { ThemeProvider } from "../context/ThemeProvider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

type Children = {
  children: React.ReactNode;
};

const Providers = ({ children }: Children) => {
  return (
    <ThemeProvider>
      <div className="z-0 fixed h-screen w-full bg-gradient-to-br dark:from-black from-white via-white dark:via-black to-cyan-100 dark:to-rose-950 opacity-50 dark:opacity-50" />
      <Suspense fallback="...">
        <Header />
      </Suspense>
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;

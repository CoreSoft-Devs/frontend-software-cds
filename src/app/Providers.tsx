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
      <Suspense fallback="...">
        <Header />
      </Suspense>
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;

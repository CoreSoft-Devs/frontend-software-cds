'use client'
import React from "react";
import Navbar from "./navbar";
import { SessionProvider } from "next-auth/react";

const Header = () => {
  return (
    <SessionProvider>
      <Navbar />
    </SessionProvider>
  );
};

export default Header;

"use client";
import React, { useEffect } from "react";
let currentYear: number = new Date().getFullYear();

const Copyright = () => {
  useEffect(() => {
    currentYear = new Date().getFullYear();
  }, []);

  return <div className="dark:text-gray-400">© {currentYear}</div>;
};

export default Copyright;

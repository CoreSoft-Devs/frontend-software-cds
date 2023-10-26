"use client";
import React, { useEffect } from "react";
let currentYear: number = new Date().getFullYear();

const Copyright = () => {
  useEffect(() => {
    currentYear = new Date().getFullYear();
  }, []);

  return (
    <div className="text-gray-500 dark:text-gray-400 text-sm">
      © {currentYear}
    </div>
  );
};

export default Copyright;

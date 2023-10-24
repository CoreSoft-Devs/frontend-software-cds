"use client";
import useThemes from "@/hooks/useThemes";
import { Moon, Sun } from "../shared/icons";

const Appearance = () => {
  const { setTheme, checkIsDark } = useThemes();
  const handleTheme = (mode: string): void => setTheme(mode);

  return (
    <div className="flex flex-row border border-gray-500/30 rounded-full p-1 transition-colors gap-1">
      <button
        onClick={() => handleTheme("light")}
        style={{
          backgroundColor: !checkIsDark() ? "#6b72804d" : "transparent",
        }}
        className={`rounded-full h-8 w-8 flex items-center justify-center p-1.5 hover:bg-gray-500/40 dark:hover:bg-gray-500/40`}
      >
        <Sun />
      </button>
      <button
        onClick={() => handleTheme("dark")}
        style={{
          backgroundColor: checkIsDark() ? "#6b72804d" : "transparent",
        }}
        className={`rounded-full h-8 w-8 flex items-center justify-center p-1.5 hover:bg-gray-500/40 dark:hover:bg-gray-500/40`}
      >
        <Moon />
      </button>
    </div>
  );
};

export default Appearance;

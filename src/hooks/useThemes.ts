import { useTheme } from "@/context/ThemeProvider";
import { useCallback } from "react";

const useThemes = (): {
  theme: string;
  setTheme: (mode: string) => void;
  checkIsDark: () => boolean;
  themes: string[];
} => {
  const isThemeDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const { theme, setTheme, themes } = useTheme();

  const checkIsDark = useCallback(() => {
    return isThemeDark && theme === "system" ? true : theme === "dark";
  }, [isThemeDark, theme]);

  return { theme, setTheme, checkIsDark, themes };
};

export default useThemes;

const isServer = typeof window === "undefined";
const MEDIA = "(prefers-color-scheme: dark)";

export const getTheme = (key: string, fallback: string): string | undefined => {
  if (isServer) return undefined;
  let theme;
  try {
    theme = window.localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
  }
  return theme || fallback;
};

export const disableAnimation = (): (() => void) => {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
    )
  );
  document.head.appendChild(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};

export const getSystemTheme = (
  e: MediaQueryList | null | undefined
): "dark" | "light" => {
  if (!e) e = window.matchMedia(MEDIA);
  const isDark = e.matches;
  const systemTheme = isDark ? "dark" : "light";
  return systemTheme;
};

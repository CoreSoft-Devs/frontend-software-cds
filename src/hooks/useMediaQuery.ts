import { useEffect, useState } from "react";

type deviceState = "mobile" | "tablet" | "desktop" | null;
type mediaQueryReturn = {
  device: deviceState;
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};
type dimensionState = {
  width: number;
  height: number;
} | null;

export default function useMediaQuery(): mediaQueryReturn {
  const [device, setDevice] = useState<deviceState>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState<dimensionState>(null);

  useEffect(() => {
    function checkDevice() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setDevice("mobile");
      } else if (
        window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches
      ) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    }
    // initial detection
    checkDevice();
    // listener for windows resize
    window.addEventListener("resize", checkDevice);
    // cleanup listener
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}

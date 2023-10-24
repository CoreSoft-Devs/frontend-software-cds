import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshold?: number): {
  scrolled: boolean;
  scrollY: number;
} {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll = useCallback(() => {
    threshold && setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolled, scrollY };
}

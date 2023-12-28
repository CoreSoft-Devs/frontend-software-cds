import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useTableContent from "./useTableContent";

type Props = {
  distance?: string;
  externalRef:
    | RefObject<HTMLDivElement>
    | RefObject<HTMLHeadingElement>
    | MutableRefObject<HTMLHeadingElement>;
  once?: boolean;
};

const useNearScreen = ({ distance, externalRef, once }: Props) => {
  const { handleCurrentTitle } = useTableContent();
  const [isNearScreen, setIsNearScreen] = useState<boolean>(false);
  const fromRef = useRef();

  const onChange = useCallback(
    (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const el = entries[0];
      if (el.isIntersecting) {
        const idElement = el.target.id.substring(3, el.target.id.length);
        handleCurrentTitle && handleCurrentTitle(idElement);
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    },
    [handleCurrentTitle, once],
  )

  useEffect(() => {
    let observer: IntersectionObserver;

    const element = externalRef ? externalRef.current : fromRef.current;

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
        root: null,
        threshold: 0.9,
      });
      element && observer.observe(element);
    }

    return () => observer && observer.disconnect();
  }, [distance, externalRef, handleCurrentTitle, onChange, once]);

  return { isNearScreen, fromRef };
};

export default useNearScreen;

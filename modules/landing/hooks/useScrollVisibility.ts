import { useEffect, useRef, useState } from "react";

export function useScrollVisibility() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setIsVisible(true);
      return;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, options);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef]);

  return {
    isVisible,
    elementRef,
  };
}

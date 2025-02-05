import { useThemeStore } from "@/modules/core/context/Theme";
import { useEffect, useState } from "react";

export function useNav() {
  const [scrollTop, setScrollTop] = useState(0);
  const { changeTheme, detectSystemTheme, theme } = useThemeStore();

  useEffect(() => {
    detectSystemTheme();
  }, [detectSystemTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollTop, changeTheme, theme };
}

import { useThemeStore } from "@/modules/core/context/Theme";
import { useEffect, useState } from "react";

export function useNav() {
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
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

  const toggleMenu = (value: boolean | null) => {
    if (value !== null) {
      setIsOpenMenu(value);
      return;
    }
    setIsOpenMenu(!isOpenMenu);
  };

  return { scrollTop, changeTheme, theme, toggleMenu, isOpenMenu };
}

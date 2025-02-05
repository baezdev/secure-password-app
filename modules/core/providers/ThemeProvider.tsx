'use client'

import { useThemeStore } from "../context/Theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();

  return <div className={theme === "dark" ? "Body__dark" : ""}>{children}</div>;
}

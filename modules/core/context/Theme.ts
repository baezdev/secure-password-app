import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark";
  changeTheme: () => void;
  detectSystemTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      changeTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      detectSystemTheme: () => {
        if(typeof window === "undefined") return;

        const prefersScheme = window.matchMedia("(prefers-color-scheme: dark)");
        set({ theme: prefersScheme.matches ? "dark" : "light" });
        prefersScheme.addEventListener("change", (e) => {
          set({ theme: e.matches ? "dark" : "light" });
        });
      },
    }),
    { name: "theme" }
  )
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark";
  changeTheme: () => void;
  detectSystemTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => {
      let listenerAdded = false;

      return {
        theme: "light",
        changeTheme: () =>
          set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light";

            return {
              theme: newTheme,
            };
          }),
        detectSystemTheme: () => {
          if (typeof window === "undefined") return;

          const prefersScheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
          );
          set({ theme: prefersScheme.matches ? "dark" : "light" });

          if (!listenerAdded) {
            prefersScheme.addEventListener("change", (e) => {
              set({ theme: e.matches ? "dark" : "light" });
            });
            listenerAdded = true;
          }
        },
      };
    },
    { name: "theme" }
  )
);

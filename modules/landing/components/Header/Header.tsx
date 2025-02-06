"use client";

import { HeaderImage } from "./HeaderImage";
import { Button } from "@/modules/core/design-system/Button";
import { ArrowRight, CircleArrowsBottomIcon } from "@/assets/icons";

import css from "./Header.module.css";
import { useThemeStore } from "@/modules/core/context/Theme";

export function Header() {
  const { theme } = useThemeStore();

  const bgImage = `url("${
    theme === "light" ? "/images/bg.svg" : "/images/bg-dark.svg"
  }"), linear-gradient(to bottom, var(--header-bg) 55%, var(--background) 100%)`;
  

  return (
    <header className={css.Header} style={{ background: bgImage }}>
      <div className={css.Header_slogan}>
        <div>
          <h1>Con PassFort ¡Olvídate de olvidar!</h1>
        </div>
        <p>
          Protege y accede a tus contraseñas en un solo lugar y con un clic. La
          seguridad nunca fue tan sencilla.
        </p>
      </div>
      <HeaderImage />
      <div className={css.Header_actions}>
        <Button ariaLabel="Iniciar sesión">
          Iniciar <ArrowRight />
        </Button>
        <Button variant="secondary" ariaLabel="Saber más">
          Saber más <CircleArrowsBottomIcon />
        </Button>
      </div>
    </header>
  );
}

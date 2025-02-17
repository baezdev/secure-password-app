"use client";

import { useThemeStore } from "@/modules/core/context/Theme";

import { HeaderImage } from "./HeaderImage";
import { Button } from "@core/design-system/Button/Button";
import { ArrowRight, CircleArrowsBottomIcon } from "@/assets/icons";
import { Heading } from "@core/design-system/Heading/Heading";

import css from "./Header.module.css";

export function Header() {
  const { theme } = useThemeStore();

  const bgImage = `url("${
    theme === "light" ? "/images/bg.svg" : "/images/bg-dark.svg"
  }"), linear-gradient(to bottom, var(--header-bg) 55%, var(--background) 100%)`;

  return (
    <header className={css.Header} style={{ background: bgImage }}>
      <div className={css.Header_slogan}>
        <div>
          <Heading variant="h1" size="large" align="center">
            Con Pass Fort ¡Olvídate de olvidar!
          </Heading>
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
        <Button variant="secondary" ariaLabel="Saber más" href="#features">
          Saber más <CircleArrowsBottomIcon />
        </Button>
      </div>
    </header>
  );
}

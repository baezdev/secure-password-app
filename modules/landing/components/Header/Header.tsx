import { HeaderImage } from "./HeaderImage";
import { Button } from "@/modules/core/design-system/Button";
import { ArrowRight } from "@/assets/icons";

import css from "./Header.module.css";

export function Header() {
  return (
    <header className={css.Header}>
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
        <Button>
          Iniciar <ArrowRight />
        </Button>
        <Button variant="secondary">Saber más</Button>
      </div>
    </header>
  );
}

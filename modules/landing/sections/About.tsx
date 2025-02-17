import Image from "next/image";
import { Section } from "../components/Section/Section";

import css from "./About.module.css";
import { Heading } from "@/modules/core/design-system/Heading/Heading";

export function About() {
  return (
    <Section id="about">
      <div className={css.About_container}>
        <div className={css.About_image}>
          <Image
            src="/images/landing/landing3.png"
            alt="Hacemos que gestionar contraseñas sea fácil, seguro y sin estrés."
            fill
          />
        </div>
        <article>
          <Heading
            variant="h3"
            size="medium"
            align="left"
            weight="semiBold"
            topDescription="¿Quiénes somos?"
          >
            Protegiendo tus contraseñas, simplificando tu vida
          </Heading>
          <div className={css.About_content}>
            <p>
              En Pass Fort, sabemos lo frustrante que puede ser olvidar una
              contraseña. Por eso, creamos una solución simple y segura para que
              nunca más tengas que preocuparte por recordar todas tus claves.
            </p>
            <p>
              Somos un equipo apasionado por la tecnología y la seguridad digital.
              Con Pass Fort, tú tienes el control, y nosotros nos aseguramos
              de que tus datos estén siempre protegidos.
            </p>
            <p>
              Porque la seguridad no tiene que ser complicada. Únete a Pass Fort y
              olvídate de olvidar. 🚀🔐
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}

import Image from "next/image";
import { Section } from "../components/Section/Section";

import css from "./About.module.css";
import { Heading } from "@/modules/core/design-system/Heading/Heading";

export function About() {
  return (
    <Section id="features">
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
            variant="h2"
            size="medium"
            align="left"
            weight="semiBold"
            topDescription="¿Quiénes somos?"
          >
            Hacemos que gestionar contraseñas sea fácil, seguro y sin estrés.
          </Heading>
        </article>
      </div>
    </Section>
  );
}

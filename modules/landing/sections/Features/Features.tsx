import { Heading } from "@/modules/core/design-system/Heading/Heading";
import { Card } from "../../components/Card/Card";
import { Section } from "../../components/Section/Section";
import { FEATURES_DATA } from "../../data/features";

import css from "./Features.module.css";

export function Features() {
  return (
    <Section id="features">
      <Heading
        variant="h2"
        size="medium"
        align="center"
        weight="semiBold"
        topDescription="¿Qué ofrecemos?"
      >
        Una sola app para recordarlas todas. Guarda tus contraseñas sin
        complicaciones.
      </Heading>
      <div className={css.Features_container}>
        {FEATURES_DATA.map(({ description, icon, image, title }) => (
          <Card key={title} {...{ description, icon, image, title }} />
        ))}
      </div>
    </Section>
  );
}

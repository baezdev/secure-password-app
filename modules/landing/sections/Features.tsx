import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { FEATURES_DATA } from "../data";

import css from "./Features.module.css";

export function Features() {
  return (
    <Section
      title="Una sola app para recordarlas todas. Guarda tus contraseñas sin complicaciones."
      description="¿Qué ofrecemos?"
      id="features"
    >
      <div className={css.Features_container}>
        {FEATURES_DATA.map(({ description, icon, image, title }) => (
          <Card
            description={description}
            icon={icon}
            image={image}
            title={title}
            key={title}
          />
        ))}
      </div>
    </Section>
  );
}

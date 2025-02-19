import { Heading } from "@/modules/core/components/Heading/Heading";
import { Arrow } from "@/modules/core/components/Icons/Icons";

import css from "./Details.module.css";

interface DetailsProps {
  title: string;
  content: string;
  name?: string;
}

export function Details({ title, content, name }: DetailsProps) {
  return (
    <details className={css.Details} name={name}>
      <summary className={css.Details_summary}>
        <Heading variant="p" size="extraSmall" weight="regular">
          {title}
        </Heading>
        <i className={css.Details_icon}>
          <Arrow />
        </i>
      </summary>
      <p className={css.Details_content}>{content}</p>
    </details>
  );
}

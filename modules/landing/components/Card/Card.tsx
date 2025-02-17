import { cloneElement, FC, SVGProps } from "react";
import css from "./Card.module.css";
import { Heading } from "@/modules/core/design-system/Heading/Heading";

interface CardProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
}

export function Card({ icon: Icon, title, description, image }: CardProps) {
  const imageUrl = `/images/landing/${image}`;

  return (
    <article className={css.Card}>
      <i className={css.Card_icon}>{cloneElement(<Icon />, { size: 34 })}</i>
      <div>
        <Heading size="small" variant="h6" weight="semiBold">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
      <div
        className={css.Card_image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </article>
  );
}

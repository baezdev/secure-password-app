import { JSX } from "react";
import css from "./Heading.module.css";

interface HeadingProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
  align?: "center" | "left" | "right";
  weight?: "bold" | "semiBold";
  topDescription?: string;
}

export function Heading({
  size = "small",
  variant,
  children,
  align = "left",
  weight = "bold",
  topDescription,
}: HeadingProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;
  const classSize = {
    small: css.Heading__small,
    medium: css.Heading__medium,
    large: css.Heading__large,
  };
  const classAlign = {
    center: css.Heading__center,
    left: css.Heading__left,
    right: css.Heading__right,
  };
  const classWeight = {
    bold: css.Heading__bold,
    semiBold: css.Heading__semiBold,
  };

  return (
    <>
      {topDescription && (
        <div className={`${css.Heading_pill} ${classAlign[align]}`}>
          <span>{topDescription}</span>
        </div>
      )}
      <Tag
        className={`${css.Heading} ${classSize[size]} ${classAlign[align]} ${classWeight[weight]}`}
      >
        {children}
      </Tag>
    </>
  );
}

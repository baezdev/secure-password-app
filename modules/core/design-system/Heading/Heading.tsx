import { JSX } from "react";
import css from "./Heading.module.css";

interface HeadingProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
}

export function Heading({ size = "small", variant, children }: HeadingProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;
  const classSize = {
    small: css.Heading__small,
    medium: css.Heading__medium,
    large: css.Heading__large,
  };

  return <Tag className={`${css.Heading} ${classSize[size]}`}>{children}</Tag>;
}

"use client";

import { type ReactNode } from "react";
import { Heading } from "@/modules/core/design-system/Heading/Heading";
import { useScrollVisibility } from "../../hooks";

import css from "./Section.module.css";

interface SectionProps {
  title: string;
  children: ReactNode;
  description?: string;
  id?: string;
}

export function Section({ title, children, description, id }: SectionProps) {
  const { elementRef, isVisible } = useScrollVisibility();

  return (
    <section id={id}>
      <div
        className={`${css.u_section} ${
          isVisible ? css.u_section__show : css.u_section__hidden
        }`}
        ref={elementRef}
      >
        <div className={css.u_section_title}>
          {description && (
            <span className={css.u_section_pill}>{description}</span>
          )}
          <Heading variant="h2" size="medium" align="center" weight="semi-bold">
            {title}
          </Heading>
        </div>
        <>{children}</>
      </div>
    </section>
  );
}

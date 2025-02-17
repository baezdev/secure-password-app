"use client";

import { type ReactNode } from "react";
import { useScrollVisibility } from "@landing/hooks/useScrollVisibility";

import css from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  id?: string;
}

export function Section({ children, id }: SectionProps) {
  const { elementRef, isVisible } = useScrollVisibility();

  return (
    <section id={id}>
      <div
        className={`${css.u_section} ${
          isVisible ? css.u_section__show : css.u_section__hidden
        }`}
        ref={elementRef}
      >
        <>{children}</>
      </div>
    </section>
  );
}

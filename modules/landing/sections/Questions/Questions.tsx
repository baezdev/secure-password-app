"use client";
import { useState } from "react";

import { Button } from "@core/components/Button/Button";
import { Heading } from "@core/components/Heading/Heading";
import { Section } from "@landing/components/Section/Section";
import { Details } from "@landing/components/Details/Details";
import {
  QUESTIONS_GENERALS,
  QUESTIONS_ABOUT_APP,
} from "@landing/data/questions";

import css from "./Questions.module.css";

enum QuestionType {
  GENERAL = "GENERAL",
  ABOUT_APP = "ABOUT_APP",
}

export function Questions() {
  const [questionType, setQuestionType] = useState(QuestionType.GENERAL);

  const questionsToShow =
    questionType === QuestionType.GENERAL
      ? QUESTIONS_GENERALS
      : QUESTIONS_ABOUT_APP;

  return (
    <Section id="questions">
      <Heading
        variant="h2"
        size="medium"
        align="center"
        weight="semiBold"
        topDescription="Preguntas frecuentes"
      >
        ¿Tienes preguntas? Tenemos respuestas
      </Heading>
      <article>
        <header className={css.Questions_header}>
          <Button
            ariaLabel="Ver preguntas frecuentes"
            onClick={() => setQuestionType(QuestionType.GENERAL)}
            variant={
              questionType === QuestionType.GENERAL ? "primary" : "secondary"
            }
          >
            Frecuentes
          </Button>
          <Button
            ariaLabel="Ver preguntas sobre nuestra app"
            onClick={() => setQuestionType(QuestionType.ABOUT_APP)}
            variant={
              questionType === QuestionType.ABOUT_APP ? "primary" : "secondary"
            }
          >
            Nuestra app
          </Button>
        </header>
        <section className={css.Questions}>
          {questionsToShow.map(({ question, answer }) => (
            <Details
              content={answer}
              title={question}
              name="question"
              key={question}
            />
          ))}
        </section>
      </article>
    </Section>
  );
}

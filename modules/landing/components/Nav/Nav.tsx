"use client";
import Image from "next/image";

import { Button } from "@/modules/core/design-system/Button";
import { NavItemLink } from "./NavItemLink";
import { IconButton } from "@/modules/core/design-system/IconButton";
import { MoonOffIcon, UserIcon, MoonIcon } from "@/assets/icons";
import { useNav } from "../../hooks";

import css from "./Nav.module.css";

const listNavLinks = [
  {
    href: "#",
    text: "Caracteristicas",
  },
  {
    href: "#",
    text: "Sobre nosotros",
  },
  {
    href: "#",
    text: "Preguntas frecuentes",
  },
];

export function Nav() {
  const { changeTheme, scrollTop, theme } = useNav();

  return (
    <nav
      className={`${css.Nav} ${
        scrollTop > 100 ? css.Nav__fixed : css.Nav__floating
      }`}
    >
      <div className={css.Nav_listContainer}>
        <a href="/" className={css.Nav_logo}>
          <Image
            src={
              theme === "light" ? "/images/logo.svg" : "/images/logo-dark.svg"
            }
            alt="Logo de PassFort"
            width={150}
            height={45}
          />
        </a>
        <span className={css.u_separator}></span>
        <ul className={css.Nav_list}>
          {listNavLinks.map(({ href, text }) => (
            <li key={`${href}-${text}`}>
              <NavItemLink href={href}>{text}</NavItemLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.Nav_actions}>
        <IconButton
          icon={theme === "light" ? MoonIcon : MoonOffIcon}
          onClick={changeTheme}
          ariaLabel="Cambiar tema"
        />
        <Button href="#" ariaLabel="Iniciar sesión">
          Iniciar sesión <UserIcon />
        </Button>
      </div>
    </nav>
  );
}

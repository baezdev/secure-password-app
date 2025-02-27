"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/modules/core/components/Button/Button";
import { NavItemLink } from "./NavItemLink";
import { IconButton } from "@/modules/core/components/Button/IconButton";
import {
  MoonOffIcon,
  UserIcon,
  MoonIcon,
  MenuOpenIcon,
  MenuCloseIcon,
} from "@core/components/Icons/Icons";
import { useNav } from "../../hooks/useNav";

import css from "./Nav.module.css";

const listNavLinks = [
  {
    href: "#features",
    text: "Caracteristicas",
  },
  {
    href: "#about",
    text: "Sobre nosotros",
  },
  {
    href: "#questions",
    text: "Preguntas frecuentes",
  },
];

export function Nav() {
  const { changeTheme, scrollTop, theme, isOpenMenu, toggleMenu } = useNav();

  return (
    <nav
      className={`${css.Nav} ${
        scrollTop > 100 ? css.Nav__fixed : css.Nav__floating
      }`}
      data-open={isOpenMenu}
    >
      <div className={css.Nav_logoContainer}>
        <Link href="/" className={css.Nav_logo}>
          <Image
            src={
              theme === "light" ? "/images/logo.svg" : "/images/logo-dark.svg"
            }
            alt="Logo de PassFort"
            width={150}
            height={45}
            priority
          />
        </Link>
        <span className={css.u_separator}></span>
        <div className={css.Nav_menuButton}>
          <IconButton
            icon={!isOpenMenu ? MenuOpenIcon : MenuCloseIcon}
            ariaLabel={!isOpenMenu ? "Abrir menú" : "Cerrar menú"}
            onClick={() => toggleMenu(null)}
          />
        </div>
      </div>
      <ul className={css.Nav_list}>
        {listNavLinks.map(({ href, text }) => (
          <li key={`${href}-${text}`} onClick={() => toggleMenu(false)}>
            <NavItemLink href={href}>{text}</NavItemLink>
          </li>
        ))}
      </ul>
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

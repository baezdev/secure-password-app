'use client'

import { Button } from "@/modules/core/design-system/Button";
import { NavItemLink } from "./NavItemLink";
import { IconButton } from "@/modules/core/design-system/IconButton";
import { SunIcon, UserIcon } from "@/assets/icons";

import css from "./Nav.module.css";
import Image from "next/image";
import { useScrollPosition } from "../../hooks";

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
  const scrollTop = useScrollPosition()

  return (
    <nav className={`${css.Nav} ${scrollTop > 100 ? css.Nav__fixed : css.Nav__floating}`}>
      <div className={css.Nav_listContainer}>
        <a href="/" className={css.Nav_logo}>
          <Image
            src="/images/logo.webp"
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
        <IconButton icon={SunIcon} />
        <Button href="#">
          Iniciar sesión <UserIcon />
        </Button>
      </div>
    </nav>
  );
}

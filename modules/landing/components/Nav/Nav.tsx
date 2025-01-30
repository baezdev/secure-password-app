import { Button } from "@/modules/core/design-system/Button";
import { NavItemLink } from "../NavItemLink";
import { IconButton } from "@/modules/core/design-system/IconButton";
import { SunIcon, UserIcon } from "@/assets/icons";

import css from "./Nav.module.css";

export function Nav() {
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

  return (
    <nav className={css.Nav}>
      <div className={css.Nav_listContainer}>
        <p className={css.Nav_logo}>QWERTY</p>
        <span className={css.u_separator}></span>
        <ul className={css.Nav_list}>
          {listNavLinks.map(({ href, text }) => (
            <ul key={`${href}-${text}`}>
              <NavItemLink href={href}>{text}</NavItemLink>
            </ul>
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

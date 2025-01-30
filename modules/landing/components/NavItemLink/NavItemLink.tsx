import css from "./NavItemLink.module.css";

interface NavItemLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavItemLink({ href = "", children = "" }: NavItemLinkProps) {
  return (
    <a href={href} className={css.NavItemLink}>
      {children}
    </a>
  );
}

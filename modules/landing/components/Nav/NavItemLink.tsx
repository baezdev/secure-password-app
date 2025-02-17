import Link from "next/link";
import css from "./NavItemLink.module.css";

interface NavItemLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavItemLink({ href = "", children = "" }: NavItemLinkProps) {
  return (
    <Link href={href} className={css.NavItemLink}>
      {children}
    </Link>
  );
}

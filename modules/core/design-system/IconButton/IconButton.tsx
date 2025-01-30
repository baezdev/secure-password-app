import { FC, createElement, SVGProps, cloneElement } from "react";
import css from "./IconButton.module.css";

interface IconButtonProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

export function IconButton({ icon: Icon, onClick }: IconButtonProps) {
  return (
    <button type="button" onClick={onClick} className={css.IconButton}>
      {cloneElement(<Icon />, { size: 42 })}
    </button>
  );
}

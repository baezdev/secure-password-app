import { FC, SVGProps, cloneElement } from "react";
import css from "./IconButton.module.css";

interface IconButtonProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  ariaLabel: string;
}

export function IconButton({
  icon: Icon,
  onClick,
  ariaLabel,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css.IconButton}
      aria-label={ariaLabel}
    >
      {cloneElement(<Icon />, { size: 32 })}
    </button>
  );
}

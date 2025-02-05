import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
  ariaLabel: string;
}

export function Button({
  children,
  variant = "primary",
  type,
  href,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classVariant = {
    primary: css.Button__primary,
    secondary: css.Button__secondary,
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${css.Button} ${classVariant[variant]}`}
        aria-label={ariaLabel}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${css.Button} ${classVariant[variant]}`}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
    </button>
  );
}

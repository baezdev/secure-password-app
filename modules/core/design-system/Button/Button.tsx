import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
}

export function Button({
  children,
  variant,
  type,
  href,
  onClick,
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={`${css.Button} ${css.Button__primary}`}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${css.Button} ${css.Button__primary}`}
    >
      <span>{children}</span>
    </button>
  );
}

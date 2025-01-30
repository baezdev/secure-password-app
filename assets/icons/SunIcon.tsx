import { IconProps } from "./Icons";

export function SunIcon({ color = "currentColor", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brightness-down"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 5l0 .01" />
      <path d="M17 7l0 .01" />
      <path d="M19 12l0 .01" />
      <path d="M17 17l0 .01" />
      <path d="M12 19l0 .01" />
      <path d="M7 17l0 .01" />
      <path d="M5 12l0 .01" />
      <path d="M7 7l0 .01" />
    </svg>
  );
}

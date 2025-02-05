import { IconProps } from "./Icons";

export function CircleArrowsBottom({ color = "currentColor", size = 24 }: IconProps) {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-circle-chevrons-down"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 9l-3 3l-3 -3" />
  <path d="M15 13l-3 3l-3 -3" />
  <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
    </svg>
  );
}

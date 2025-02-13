import { FC, SVGProps } from "react";
import { BoltIcon, DevicesIcon, PasswordIcon } from "@/assets/icons";

type Feature = {
  title: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  image: string;
};

export const FEATURES_DATA: Feature[] = [
  {
    title: "Acceso rápido y fácil",
    description:
      "Guarda, organiza y recupera tus contraseñas en segundos con una interfaz intuitiva y eficiente.",
    icon: BoltIcon,
    image: "landing1.png",
  },
  {
    title: "Sincronización en todos tus dispositivos",
    description:
      "Accede a tus credenciales desde cualquier lugar, en tu computadora, teléfono o tablet.",
    icon: DevicesIcon,
    image: "landing2.png",
  },
  {
    title: "Autocompletado inteligente",
    description:
      "Olvídate de escribir contraseñas una y otra vez. Rellena automáticamente tus credenciales en cualquier sitio web.",
    icon: PasswordIcon,
    image: "landing3.png",
  },
];

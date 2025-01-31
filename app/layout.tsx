import type { Metadata } from "next";
import fontLocal from "next/font/local";
import "./globals.css";

const myFont = fontLocal({
  src: "../public/fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "PassFort",
  description: "Con PassFort ¡Olvídate de olvidar! Protege y accede a tus contraseñas en un solo lugar y con un clic. La seguridad nunca fue tan sencilla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${myFont.className}`}>{children}</body>
    </html>
  );
}

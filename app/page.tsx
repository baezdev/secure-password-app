import { Nav } from "@/modules/landing/components/Nav";
import { Header } from "@/modules/landing/components/Header";

import css from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
    </main>
  );
}

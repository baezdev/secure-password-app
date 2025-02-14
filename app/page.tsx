import { Nav } from "@/modules/landing/components/Nav";
import { Header } from "@/modules/landing/components/Header";
import { About, Features } from "@/modules/landing/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Features />
      <About />
    </>
  );
}

import { Nav } from "@landing/components/Nav/Nav";
import { Header } from "@landing/components/Header/Header";
import { About } from "@landing/sections/About/About";
import { Features } from "@landing/sections/Features/Features";

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

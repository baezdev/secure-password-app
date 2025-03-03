import { Nav } from "@landing/components/Nav/Nav";
import { Header } from "@landing/components/Header/Header";
import { About } from "@landing/sections/About/About";
import { Features } from "@landing/sections/Features/Features";
import { Questions } from "@landing/sections/Questions/Questions";
import { Footer } from "@landing/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Features />
      <About />
      <Questions />
      <Footer />
    </>
  );
}

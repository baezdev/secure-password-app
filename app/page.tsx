import Image from "next/image";
import css from "./page.module.css";
import { Nav } from "@/modules/landing/components/Nav";
import { Button } from "@/modules/core/design-system/Button";
import { ArrowRight } from "@/assets/icons";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className={css.Header}>
        <div className={css.Header_slogan}>
          <div>
            <h1>Con PassFort ¡Olvídate de olvidar!</h1>
          </div>
          <p>
            Protege y accede a tus contraseñas en un solo lugar y con un clic.
            La seguridad nunca fue tan sencilla.
          </p>
        </div>
        <div className={css.Header_image}>
          <div className={`${css.Header_logos} ${css.Header_logos__left}`}>
            <Image
              src="/images/gmail.svg"
              alt="Imagen de un logo de Gmail"
              width={70}
              height={70}
              className=""
            />
            <Image
              src="/images/instagram.svg"
              alt="Imagen de un logo de instagram"
              width={70}
              height={70}
              className=""
            />
            <Image
              src="/images/netflix.svg"
              alt="Imagen de un logo de netflix"
              width={70}
              height={70}
              className=""
            />
          </div>
          <Image
            src="/images/finger-lock-protect-svgrepo-com.svg"
            alt="Imagen de una huella con un candado en el centro, represetando seguridad"
            width={240}
            height={240}
          />
          <div className={`${css.Header_logos} ${css.Header_logos__right}`}>
            <Image
              src="/images/outlook.svg"
              alt="Imagen de un logo de outlook"
              width={70}
              height={70}
              className=""
            />
            <Image
              src="/images/paypal.svg"
              alt="Imagen de un logo de paypal"
              width={70}
              height={70}
              className=""
            />
            <Image
              src="/images/pc.svg"
              alt="Imagen de un logo de pc"
              width={70}
              height={70}
              className=""
            />
          </div>
        </div>
        <div className={css.Header_actions}>
          <Button>
            Iniciar <ArrowRight />
          </Button>
          <Button variant="secondary">Saber más</Button>
        </div>
      </header>
    </main>
  );
}

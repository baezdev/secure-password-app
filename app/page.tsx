import Image from "next/image";
import css from "./page.module.css";
import { Nav } from "@/modules/landing/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="">
        <div className="">
          <div>
            <h1 className="t">Con QWERTY ¡Olvídate de olvidar!</h1>
          </div>
          <p className="">
            Protege y accede a tus contraseñas con un clic. La seguridad nunca
            fue tan sencilla.
          </p>
        </div>
        <div className="">
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
          <Image
            src="/images/finger-lock-protect-svgrepo-com.svg"
            alt="Imagen de una huella con un candado en el centro, represetando seguridad"
            width={240}
            height={240}
          />
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
        {/* <div className="flex justify-center mt-14 gap-8">
         <Button variant="primary">Empezemos</Button> 
          <button className="bg-gradient-to-r from-[--primary-light] to-[--secondary-light] text-[--secondary] flex gap-x-1 font-semibold rounded-full px-4 py-3 text-lg cursor-pointer hover:from-[--secondary] hover:to-[--secondary] transition-all duration-200">
            <UserIcon />
            Saber más
          </button>
        </div> */}
      </header>
    </main>
  );
}

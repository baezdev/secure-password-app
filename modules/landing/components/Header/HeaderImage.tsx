import Image from "next/image";
import css from "./HeaderImage.module.css";

export function HeaderImage() {
  return (
    <div className={css.Header_image}>
      <div className={`${css.Header_logos} ${css.Header_logos__left}`}>
        <Image
          src="/images/gmail.svg"
          alt="Imagen de un logo de Gmail"
          width={70}
          height={70}
        />
        <Image
          src="/images/instagram.svg"
          alt="Imagen de un logo de instagram"
          width={70}
          height={70}
        />
        <Image
          src="/images/netflix.svg"
          alt="Imagen de un logo de netflix"
          width={70}
          height={70}
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
        />
        <Image
          src="/images/paypal.svg"
          alt="Imagen de un logo de paypal"
          width={70}
          height={70}
        />
        <Image
          src="/images/pc.svg"
          alt="Imagen de un logo de pc"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}

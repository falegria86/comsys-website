import Link from "next/link";

import BotonPrimario from "../UI/BotonPrimario";

const Hero = () => {
  return (
    <div className="flex h-full items-center max-w-[1280px] mx-auto">
      <div className="w-96 ml-auto">
        <p className="text-6xl sm:text-[76px] text-dark leading-none">
          Sistemas a tu medida
        </p>
        <p className="text-dark hidden sm:flex">
          Contamos con más de 20 años de experiencia en la industria de los
          sistemas médicos.
        </p>
        <div className="block sm:flex gap-3">
          <Link href="/quienes">
            <BotonPrimario titulo={"Leer más"} bg={"bg-blue-700"} />
          </Link>
          <Link href="/contacto">
            <BotonPrimario titulo={"Contáctanos"} bg={"bg-dark"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

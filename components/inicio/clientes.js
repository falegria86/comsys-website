import Image from "next/image";
import Link from "next/link";

import Linea from "../UI/Linea";
import imgUrl from "../../assets/imgs/clientes.png";
import BotonPrimario from "../UI/BotonPrimario";

const Clientes = () => {
  return (
    <div className="bg-light max-w-[1280px] p-8 sm:p-16 mx-auto flex gap-16">
      <div className="w-full md:w-2/4 ">
        <p className="text-adorno">Nuestros clientes</p>
        <h2 className="text-dark mt-2">
          Clientes a lo largo de México que confían en nosotros
        </h2>
        <Linea color="bg-blue-700" />
        <p className="text-[#656565] mt-8">
          Nos especializamos en el desarrollo de sistemas de salud que utilizan
          tecnologías innovadoras y modernas para mejorar la eficiencia y la
          efectividad del trabajo de nuestros clientes.
          <br />
          <br />
          Con nuestra experiencia y atención al cliente de primera calidad,
          estamos comprometidos en brindar soluciones de alta calidad que ayuden
          a nuestros clientes a ofrecer servicios de atención médica de la más
          alta calidad a sus pacientes. Si estás buscando una empresa confiable
          y experta en el desarrollo de sistemas de salud, no dudes en
          elegirnos. Contáctanos hoy para saber cómo podemos ayudarte a ti y a
          tu equipo.
        </p>
        <Link href="/quienes">
          <BotonPrimario bg="bg-blue-700" titulo="Leer más" />
        </Link>
      </div>
      <Image
        src={imgUrl}
        className="w-2/4 object-cover md:flex hidden"
        alt="Imagen clientes"
      />
    </div>
  );
};

export default Clientes;

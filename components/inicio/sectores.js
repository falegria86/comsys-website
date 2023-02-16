import Link from "next/link";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LanIcon from '@mui/icons-material/Lan';

import Linea from "../UI/Linea";

const Sectores = () => {
  return (
    <div className="block lg:flex max-w-[1280px] mx-auto">
      <div className="bg-blue-900 w-full lg:w-2/3 p-16">
        <p className="text-adorno">Soluciones a tu alcance</p>
        <h2 className="text-white">Conoce más sobe nosotros</h2>
        <Linea color="bg-white" />
        <p className="text-white">
          Brindamos soluciones de sistemas para el sector de la salud, abarcando
          áreas como atención médica, facturación electrónica y gestión
          hospitalaria, para mejorar la eficiencia y calidad de los servicios.
        </p>
        <Link href="/servicios">
          <p className="mt-5 text-white font-bold cursor-pointer">
            Leer más &gt;
          </p>
        </Link>
      </div>
      <div className="bg-blue-800 py-8 md:py-16 px-8 block md:flex gap-8">
        <div className="w-full md:w-2/4 p-8 bg-blue-700 text-white h-full mb-5">
          <LocalHospitalIcon className="text-blue-300 text-4xl" />
          <h3 className="mt-5 mb-5">Sector salud</h3>
          <p>
            Nos especializamos en soluciones de tecnología para el sector de la
            salud, mejorando la calidad y eficiencia de los servicios.
          </p>
        </div>

        <div className="w-full md:w-2/4 p-8 bg-blue-700 text-white h-full">
          <LanIcon className="text-blue-300 text-4xl" />
          <h3 className="mt-5 mb-5">Tecnología</h3>
          <p>
            Aportamos soluciones de tecnología de vanguardia para mejorar la
            atención médica y optimizar los procesos en el sector salud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectores;

import Image from "next/image";

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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          <br />
          <br />
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet orci. Aenean dignissim pellentesque felis.
        </p>
        <BotonPrimario bg="bg-blue-700" titulo="Leer más" />
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

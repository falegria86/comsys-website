import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Linea from "../UI/Linea";

const Sectores = () => {
  return (
    <div className="block lg:flex max-w-[1280px] mx-auto">
      <div className="bg-blue-900 w-full lg:w-2/3 p-16">
        <p className="text-adorno">Lorem ipsum</p>
        <h2 className="text-white">Industrias cubiertas</h2>
        <Linea color="bg-white" />
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
        <p className="mt-5 text-white font-bold cursor-pointer">
          Leer más &gt;
        </p>
      </div>
      <div className="bg-blue-800 py-8 md:py-16 px-8 block md:flex gap-8">
        <div className="w-full md:w-2/4 p-8 bg-blue-700 text-white h-full mb-5">
          <LocalHospitalIcon className="text-blue-300 text-4xl" />
          <h3 className="mt-5 mb-5">Sector salud</h3>
          <p>
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.
          </p>
        </div>

        <div className="w-full md:w-2/4 p-8 bg-blue-700 text-white h-full">
          <LocalHospitalIcon className="text-blue-300 text-4xl" />
          <h3 className="mt-5 mb-5">Sector salud</h3>
          <p>
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectores;

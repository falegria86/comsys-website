import Image from "next/image";

import MainLayout from "@/components/layouts/MainLayout";
import imgUrl from "../../assets/imgs/servicios.jpg"
import CardServicio from "@/components/inicio/cardServicio";

const Servicios = () => {
  return (
    <>
      <MainLayout>
        <Image src={imgUrl} className="mt-8" />
        <div className="bg-light p-8 lg:p-16 lg:flex">
          <div className="grid w-2/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-11/12 lg:w-full gap-3 mx-auto">
            <CardServicio />
            <CardServicio />
            <CardServicio />
            <CardServicio />
            <CardServicio />
            <CardServicio />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Servicios;

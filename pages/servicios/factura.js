import Image from "next/image";

import MainLayout from "@/components/layouts/MainLayout";
import Linea from "@/components/UI/Linea";

const Factura = () => {
  return (
    <>
      <MainLayout>
        <div className="bg-light p-8 lg:p-16">
          <div>
            <h2 className="text-dark">Factura Electrónica</h2>
            <Linea color="bg-blue-500" />
            <p className="my-5 text-dark">
              La facturación electrónica es una herramienta clave para optimizar
              los procesos administrativos y financieros en las empresas de
              atención médica. En nuestra empresa, ofrecemos soluciones de
              facturación electrónica personalizadas y adaptadas a las
              necesidades específicas de cada cliente. Nuestras soluciones de
              facturación electrónica permiten la emisión, envío y recepción de
              facturas electrónicas, eliminando la necesidad de procesos
              manuales y reduciendo el tiempo y los costos asociados con la
              facturación. Además, nuestras soluciones están diseñadas para
              cumplir con las regulaciones fiscales y de facturación
              electrónica, lo que garantiza la confiabilidad y la validez legal
              de las facturas. 
              <br /><br />
              Nuestro equipo de expertos en facturación
              electrónica brinda soporte y asesoramiento constante para
              garantizar la correcta implementación de las soluciones en cada
              empresa cliente, lo que permite una transición suave y eficiente a
              la facturación electrónica.
            </p>
            <Image
              src="/imgs/facturahigh.jpg"
              alt="Imagen expediente"
              width={1280}
              height={665}
              className="w-full"
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Factura;

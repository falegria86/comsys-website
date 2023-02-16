import Image from "next/image";

import MainLayout from "@/components/layouts/MainLayout";
import Linea from "@/components/UI/Linea";

const Atencion = () => {
  return (
    <>
      <MainLayout>
        <div className="bg-light p-8 lg:p-16">
          <div>
            <h2 className="text-dark">Atención Médica Telefónica</h2>
            <Linea color="bg-blue-500" />
            <p className="my-5 text-dark">
              La atención médica telefónica es una herramienta clave para la
              prestación de servicios de atención médica de alta calidad y
              accesibilidad para los pacientes. En nuestra empresa, ofrecemos
              soluciones personalizadas de atención médica telefónica para
              mejorar la eficiencia, la calidad y la accesibilidad de los
              servicios de atención médica.
              <br />
              <br />
              Nuestras soluciones de atención médica telefónica permiten a los
              pacientes acceder a servicios de atención médica de alta calidad
              desde la comodidad de sus hogares, lo que mejora la accesibilidad
              y reduce los costos asociados con la atención médica. Además,
              nuestras soluciones están diseñadas para garantizar la
              confidencialidad y privacidad de los pacientes, lo que garantiza
              la seguridad de la información médica. Nuestro equipo de expertos
              en atención médica telefónica está comprometido en brindar un
              servicio excepcional y personalizado a cada uno de nuestros
              clientes, lo que permite la atención médica de alta calidad y la
              satisfacción de los pacientes.
            </p>
            <Image
              src="/imgs/atencionhigh.jpg"
              alt="Imagen atención médica"
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

export default Atencion;

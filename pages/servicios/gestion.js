import Image from "next/image";

import MainLayout from "@/components/layouts/MainLayout";
import Linea from "@/components/UI/Linea";

const Gestion = () => {
  return (
    <>
      <MainLayout>
        <div className="bg-light p-8 lg:p-16">
          <div>
            <h2 className="text-dark">Sistema de Gestión Hospitalaria</h2>
            <Linea color="bg-blue-500" />
            <p className="my-5 text-dark">
              La gestión hospitalaria es una de las áreas más críticas en la
              atención médica, ya que implica la coordinación de muchos procesos
              diferentes para garantizar una atención médica de calidad y
              eficiente. En nuestra empresa, ofrecemos soluciones de gestión
              hospitalaria personalizadas para satisfacer las necesidades
              específicas de cada institución de atención médica. Nuestras
              soluciones de gestión hospitalaria se centran en la eficiencia, la
              transparencia y la optimización de los procesos, lo que permite a
              los hospitales centrarse en lo que realmente importa: brindar
              atención médica de alta calidad a los pacientes. Con nuestras
              soluciones de gestión hospitalaria, podrás optimizar la gestión de
              citas, admisiones, altas, gestión de camas, programación de
              cirugías, registro médico electrónico y facturación, entre otros
              procesos. Además, nuestras soluciones de gestión hospitalaria
              están diseñadas para cumplir con los estándares de calidad y
              seguridad de la industria de la salud, garantizando la privacidad
              y confidencialidad de la información de los pacientes.
            </p>
            <Image
              src="/imgs/hospitalhigh.jpg"
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

export default Gestion;

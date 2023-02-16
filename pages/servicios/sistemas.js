import Image from "next/image";

import MainLayout from "@/components/layouts/MainLayout";
import Linea from "@/components/UI/Linea";

const Sistemas = () => {
  return (
    <>
      <MainLayout>
        <div className="bg-light p-8 lg:p-16">
          <div>
            <h2 className="text-dark">
              Sistemas de Información en Laboratorios
            </h2>
            <Linea color="bg-blue-500" />
            <p className="my-5 text-dark">
              Los laboratorios de hoy en día necesitan soluciones de sistemas de
              información avanzadas para optimizar sus procesos y brindar una
              atención médica de alta calidad. En nuestra empresa, ofrecemos
              soluciones personalizadas de sistemas de información en
              laboratorios que se adaptan a las necesidades específicas de tu
              laboratorio. 
              <br /><br />
              Nuestros sistemas de información en laboratorios
              ayudan a optimizar la gestión de muestras, resultados y procesos
              clínicos, lo que permite que tu laboratorio funcione de manera más
              eficiente y precisa. Con nuestras soluciones, podrás controlar el
              flujo de información de tus procesos, desde la entrada de las
              muestras hasta la emisión de los resultados, lo que te permitirá
              tomar decisiones más informadas y mejorar la calidad de tus
              servicios. Además, nuestros sistemas de información en
              laboratorios están diseñados para cumplir con los estándares de
              calidad y seguridad de la industria de la salud, garantizando la
              privacidad y confidencialidad de la información de los pacientes.
            </p>
            <Image
              src="/imgs/laboratoriohigh.jpg"
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

export default Sistemas;

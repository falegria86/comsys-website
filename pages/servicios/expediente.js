import Image from "next/image";
import { useRouter } from "next/router";

import MainLayout from "@/components/layouts/MainLayout";
import Linea from "@/components/UI/Linea";

const Servicio = () => {
    const router = useRouter();
  return (
    <>
      <MainLayout>
        <div className="bg-light p-8 lg:p-16">
          <div>
            <h2 className="text-dark">Expediente clínico electrónico</h2>
            <Linea color="bg-blue-500" />
            <p className="my-5 text-dark">
              El expediente clínico electrónico (ECE) es un registro digital de
              la información médica de un paciente. Este sistema permite a los
              proveedores de atención médica acceder y compartir información
              importante en tiempo real, lo que mejora la calidad de la atención
              y la seguridad del paciente. Además, el ECE permite una mejor
              coordinación entre los proveedores de atención médica y reduce el
              riesgo de errores médicos y duplicación de pruebas. Aunque la
              implementación del ECE puede ser costosa y compleja, sus
              beneficios a largo plazo para la atención médica son
              significativos y prometedores.
            </p>
            <Image
              src="/imgs/expediente.jpg"
              alt="Imagen expediente"
              width={1280}
              height={665}
              className="w-full"
            />
          </div>

          <div className="mt-16">
            <h2 className="text-dark">Contáctanos</h2>
            <Linea color="bg-blue-500" />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Servicio;

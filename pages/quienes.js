import Image from "next/image";
import Link from "next/link";

import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";

import MainLayout from "@/components/layouts/MainLayout";
import BotonPrimario from "@/components/UI/BotonPrimario";
import imgHeader from "../assets/imgs/quienes.jpg";
import imgDentro from "../assets/imgs/quienes-dentro.jpg";

const Quienes = () => {
  return (
    <>
      <MainLayout>
        <Image src={imgHeader} className="mt-8 w-full" />
        <div className="bg-light p-8 lg:p-16 lg:flex max-w-[1280px] mx-auto">
          <Image
            src={imgDentro}
            alt={"Programando"}
            className="object-cover w-full lg:w-2/4"
          />
          <div className="w-full mt-5 lg:w-2/4 lg:ml-8 lg:mt-0">
            <p className="text-dark">
              En COMSYS, nos apasiona el desarrollo de sistemas de salud
              innovadores que mejoren la atención médica y el bienestar de las
              personas. Con años de experiencia en el campo, hemos adquirido un
              conocimiento especializado que nos permite entender las
              necesidades específicas de nuestros clientes y ofrecer soluciones
              de alta calidad que se adapten perfectamente a sus necesidades.
              Creemos en el poder de la tecnología para mejorar la vida de las
              personas, y es por eso que utilizamos las últimas tecnologías y
              herramientas en el desarrollo de nuestros sistemas de salud.
            </p>
            <p className="text-dark mt-5 lg:mt-16">
              Nuestro objetivo es ser un socio confiable y de confianza para
              nuestros clientes en el campo de la salud, brindándoles soluciones
              innovadoras y de alta calidad que les ayuden a mejorar sus
              procesos y ofrecer mejores servicios de atención médica a sus
              pacientes. Si buscas una empresa de confianza que te ayude a
              avanzar en el mundo de la salud, ¡somos tu mejor opción!
            </p>
          </div>
        </div>

        <div className="bg-lightAlt p-8 lg:p-16 max-w-[1280px] mx-auto">
          <div className="bg-darkerBG p-8">
            <div className="flex items-center gap-5 text-dark mb-8">
              <GroupsIcon className="text-5xl" />
              <div>
                <h3>Equipo con gran experiencia</h3>
                <p className="text-orange-600">
                  Soluciones en base a la experiencia
                </p>
                <p className="text-dark/75">
                  Contamos con un equipo altamente experimentado y comprometido
                  con brindar soluciones innovadoras y de alta calidad en
                  sistemas de salud.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-dark mb-8">
              <AccessTimeIcon className="text-5xl" />
              <div>
                <h3>Entregas a tiempo</h3>
                <p className="text-orange-600">
                  Deja de sufrir por no tener tu proyecto a tiempo
                </p>
                <p className="text-dark/75">
                  Nos comprometemos a entregar proyectos a tiempo, garantizando
                  la satisfacción y éxito de nuestros clientes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-dark">
              <WorkIcon className="text-5xl" />
              <div>
                <h3>Gran valor</h3>
                <p className="text-orange-600">
                  Proyectos con valor y espíritu
                </p>
                <p className="text-dark/75">
                  Ofrecemos soluciones de alta calidad a precios competitivos,
                  brindando un gran valor a nuestros clientes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-600 p-16">
          <div className="w-3/4 mx-auto text-center text-white">
            <h1>Crea tus oportunidades</h1>
            <p className="font-bold my-5">
              Con nuestras soluciones de tecnología avanzada en sistemas de
              salud, podrás crear nuevas oportunidades y llevar a tu empresa a
              la vanguardia tecnológica.
            </p>
            <Link href="/contacto">
              <BotonPrimario titulo="Contáctanos" bg="bg-blue-600" />
            </Link>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Quienes;

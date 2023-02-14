import Image from "next/image";

import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';

import MainLayout from "@/components/layouts/MainLayout";
import BotonPrimario from "@/components/UI/BotonPrimario";
import imgHeader from "../assets/imgs/quienes.jpg";
import imgDentro from "../assets/imgs/quienes-dentro.jpg";

const Quienes = () => {
  return (
    <>
      <MainLayout>
        <Image src={imgHeader} className="mt-8" />
        <div className="bg-light p-8 lg:p-16 lg:flex">
          <Image
            src={imgDentro}
            alt={"Programando"}
            className="object-cover w-full lg:w-2/4"
          />
          <div className="w-full mt-5 lg:w-2/4 lg:ml-8 lg:mt-0">
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede. Praesent dapibus, neque id cursus faucibus,
              tortor neque egestas auguae, eu vulputate magna eros eu erat.
              Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
              porttitor, facilisis luctus, metus.
            </p>
            <p className="text-dark mt-5 lg:mt-16">
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
              mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi
              in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
              in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
            </p>
          </div>
        </div>

        <div className="bg-lightAlt p-8 lg:p-16">
          <div className="bg-darkerBG p-8">
            <div className="flex items-center gap-5 text-dark mb-8">
              <GroupsIcon className="text-5xl" />
              <div>
                <h3>Equipo con gran experiencia</h3>
                <p className="text-orange-600">Lorem ipsum dolor</p>
                <p className="text-dark/75">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci. Aenean dignissim pellentesque
                  felis.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-dark mb-8">
              <AccessTimeIcon className="text-5xl" />
              <div>
                <h3>Entregas a tiempo</h3>
                <p className="text-orange-600">Lorem ipsum dolor</p>
                <p className="text-dark/75">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci. Aenean dignissim pellentesque
                  felis.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-dark">
              <WorkIcon className="text-5xl" />
              <div>
                <h3>Gran valor</h3>
                <p className="text-orange-600">Lorem ipsum dolor</p>
                <p className="text-dark/75">
                  Donec nec justo eget felis facilisis fermentum. Aliquam
                  porttitor mauris sit amet orci. Aenean dignissim pellentesque
                  felis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-600 p-16">
          <div className="w-3/4 mx-auto text-center text-white">
            <h1>Crea tus oportunidades</h1>
            <p className="font-bold my-5">
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
              Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
              metus.
            </p>
            <BotonPrimario titulo="Contáctanos" bg="bg-blue-600" />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Quienes;

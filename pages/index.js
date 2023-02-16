import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import BiotechIcon from "@mui/icons-material/Biotech";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import Navbar from "@/components/UI/Navbar";
import PremiosAll from "@/components/inicio/premiosAll";
import CardServicio from "@/components/inicio/cardServicio";
import Hero from "@/components/inicio/hero";
import Linea from "@/components/UI/Linea";
import Sectores from "@/components/inicio/sectores";
import Clientes from "@/components/inicio/clientes";
import Footer from "@/components/UI/Footer";

export default function Inicio() {
  /* Cards de servicios */
  const cards = [
    {
      id: 1,
      titulo: "Expediente Clínico Electrónico",
      texto:
        "Registro digital de información médica para mejorar la calidad y coordinación de la atención médica, reduciendo errores y duplicación de pruebas.",
      imgUrl: "/imgs/expedientecard.jpg",
      imgAlt: "Imagen expediente electrónico",
      link: "/servicios/expediente",
      icon: <InsertDriveFileIcon />,
    },
    {
      id: 2,
      titulo: "Sistemas de Información en Laboratorios",
      texto:
        "Los sistemas de información en laboratorios facilitan la gestión de muestras, resultados, registros y aseguran calidad de datos. Mejoran eficiencia, seguridad y toma de decisiones.",
      imgUrl: "/imgs/laboratorio.jpg",
      imgAlt: "Imagen expediente electrónico",
      link: "/servicios/expediente",
      icon: <BiotechIcon />,
    },
    {
      id: 3,
      titulo: "Gestión Hospitalaria",
      texto:
        "Soluciones de gestión hospitalaria personalizadas para que puedas mejorar la eficiencia de tus procesos y brindar una mejor atención médica a tus pacientes.",
      imgUrl: "/imgs/hospital.jpg",
      imgAlt: "Imagen expediente electrónico",
      link: "/servicios/expediente",
      icon: <LocalHospitalIcon />,
    },
    {
      id: 4,
      titulo: "Factura electrónica",
      texto:
        "Sistema de facturación electrónica personalizado que se adapte perfectamente a las necesidades de tu empresa, mejorando la eficiencia y precisión de tus procesos contables.",
      imgUrl: "/imgs/factura.jpg",
      imgAlt: "Imagen expediente electrónico",
      link: "/servicios/expediente",
      icon: <ReceiptIcon />,
    },
    {
      id: 5,
      titulo: "Atención Médica Telefónica",
      texto:
        "sistemas personalizados de atención médica telefónica para que tus pacientes puedan recibir asesoría médica sin tener que desplazarse, mejorando su acceso a la atención y reduciendo costos operativos.",
      imgUrl: "/imgs/atencionmedica.jpg",
      imgAlt: "Imagen expediente electrónico",
      link: "/servicios/expediente",
      icon: <ContactPhoneIcon />,
    },
  ];

  return (
    <>
      <Head>
        <title>Comsys</title>
      </Head>

      <div className="bg-slate-100">
        {/* Hero */}
        <div className="bg-[url('../assets/imgs/hero.jpg')] bg-cover bg-right md:bg-center xl:bg-top bg-no-repeat w-full h-[580px] m-0 px-5 sm:px-16 pt-8 max-w-[1280px] mx-auto">
          <Navbar />
          <Hero />
        </div>

        {/* Premios */}
        <PremiosAll />

        {/* Servicios principales */}
        <div className="bg-light p-8 sm:p-16 max-w-[1280px] mx-auto">
          <p className="text-center font-thin text-gray-400">Morbi in sem</p>
          <h2 className="text-dark text-center">
            Nuestros servicios principales
          </h2>
          <Linea color="bg-blue-700" align="mx-auto" />

          {/* Cards */}
          <Swiper
            pagination={{
              el: ".swiperPagination",
              type: "bullets",
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            spaceBetween={30}
            style={{ marginTop: 60 }}
            breakpoints={{
              280: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {cards.map((card, idx) => (
              <SwiperSlide>
                <CardServicio
                  id={card.id}
                  titulo={card.titulo}
                  texto={card.texto}
                  imgUrl={card.imgUrl}
                  imgAlt={card.imgAlt}
                  icon={card.icon}
                  link={card.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-5">
            <div
              className="swiperPagination"
              style={{ display: "flex", justifyContent: "center" }}
            ></div>
          </div>
        </div>

        {/* Sectores */}
        <Sectores />

        {/* Clientes */}
        <Clientes />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

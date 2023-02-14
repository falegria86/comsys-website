import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Navbar from "@/components/UI/Navbar";
import PremiosAll from "@/components/inicio/premiosAll";
import CardServicio from "@/components/inicio/cardServicio";
import Hero from "@/components/inicio/hero";
import Linea from "@/components/UI/Linea";
import Sectores from "@/components/inicio/sectores";
import Clientes from "@/components/inicio/clientes";
import Footer from "@/components/UI/Footer";

export default function Inicio() {
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
            style={{marginTop: 60}}
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
            <SwiperSlide>
              <CardServicio />
            </SwiperSlide>
            <SwiperSlide>
              <CardServicio />
            </SwiperSlide>
            <SwiperSlide>
              <CardServicio />
            </SwiperSlide>
            <SwiperSlide>
              <CardServicio />
            </SwiperSlide>
            <SwiperSlide>
              <CardServicio />
            </SwiperSlide>
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

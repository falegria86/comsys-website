import Premio from "./premio";

const Premios = () => {
  return (
    <div className="w-full bg-gradient-to-t from-blue-500 to-blue-900 p-16 block lg:flex gap-20 max-w-[1280px] mx-auto">
      <Premio
        titulo="Experiencia"
        texto="Contamos con un equipo altamente experimentado y comprometido
                  con brindar soluciones innovadoras y de alta calidad"
      />
      <div className="lg:flex hidden w-[1px] h-auto bg-white"></div>
      <Premio
        isShowing="hidden md:block"
        titulo="Entregas a tiempo"
        texto="Nos comprometemos a entregar proyectos a tiempo, garantizando
                  la satisfacción y éxito de nuestros clientes."
      />
      <div className="lg:flex hidden w-[1px] h-auto bg-white"></div>
      <Premio
        isShowing="hidden lg:block"
        titulo="Gran valor"
        texto="Ofrecemos soluciones de alta calidad a precios competitivos,
                  brindando un gran valor a nuestros clientes"
      />
    </div>
  );
};

export default Premios;

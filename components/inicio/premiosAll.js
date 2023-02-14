import Premio from "./premio";

const Premios = () => {
  return (
    <div className="w-full bg-gradient-to-t from-blue-500 to-blue-900 p-16 block lg:flex gap-20 max-w-[1280px] mx-auto">
      <Premio />
      <div className="lg:flex hidden w-[1px] h-auto bg-white"></div>
      <Premio isShowing="hidden md:block" />
      <div className="lg:flex hidden w-[1px] h-auto bg-white"></div>
      <Premio isShowing="hidden lg:block" />
    </div>
  );
};

export default Premios;

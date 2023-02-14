const BotonPrimario = ({ titulo, bg, width }) => {
  return (
    <>
      <button
        className={`py-4 px-10 text-white font-bold mt-5 ${bg} ${width} hover:bg-blue-900 transition-all duration-100 active:scale-95`}
      >
        {titulo}
      </button>
    </>
  );
};

export default BotonPrimario;

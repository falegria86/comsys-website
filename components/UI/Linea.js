const Linea = ({color, align}) => {
  return (
    <div className="flex w-full mt-5">
      <div className={`${align} flex gap-1`}>
        <div className={`w-2 h-[2px] ${color}`}></div>
        <div className={`w-10 h-[2px] ${color}`}></div>
      </div>
    </div>
  );
};

export default Linea;

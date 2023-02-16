import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Premio = ({isShowing, titulo, texto}) => {
  return (
    <div className={`w-full text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3 ${isShowing}`}>
      <WorkspacePremiumIcon className="text-white text-6xl" />
      <p className="font-bold text-white mt-5">{titulo}</p>
      <p className="mt-5 text-white">
        {texto}
      </p>
    </div>
  );
};

export default Premio;

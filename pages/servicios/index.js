import Image from "next/image";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import BiotechIcon from '@mui/icons-material/Biotech';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import MainLayout from "@/components/layouts/MainLayout";
import imgUrl from "../../assets/imgs/servicios.jpg";
import CardServicio from "@/components/inicio/cardServicio";

const Servicios = () => {
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
      <MainLayout>
        <Image src={imgUrl} className="mt-8" />
        <div className="bg-light p-8 lg:p-16 lg:flex">
          <div className="grid w-2/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-11/12 lg:w-full gap-3 mx-auto">
            {cards.map((card) => (
              <CardServicio
                id={card.id}
                titulo={card.titulo}
                texto={card.texto}
                imgUrl={card.imgUrl}
                imgAlt={card.imgAlt}
                icon={card.icon}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Servicios;

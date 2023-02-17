import Image from "next/image";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MainLayout from "@/components/layouts/MainLayout";
import BotonPrimario from "@/components/UI/BotonPrimario";
import imgUrl from "../assets/imgs/contactanos.jpg";

const Contacto = () => {
  return (
    <>
      <MainLayout>
        <Image src={imgUrl} className="mt-8 w-full" />
        <div className="bg-light p-8 lg:p-16 md:flex max-w-[1280px] mx-auto">
          <div className="w-full">
            <p className="text-adorno">Contáctanos</p>
            <h2 className="text-dark mt-2 text-2xl sm:text-left sm:text-3xl">¿Cómo podemos ayudarte?</h2>
            <div className="mt-5 md:mt-16 md:ml-16">
              <div className="flex mb-5 md:mb-16">
                <PhoneIphoneIcon className="text-dark" />
                <p className="text-dark ml-2">+52 55 12 345 678</p>
              </div>
              <div className="flex">
                <EmailIcon className="text-dark" />
                <p className="text-dark ml-2">contacto@comsys.mx</p>
              </div>
            </div>
          </div>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="w-full mt-8"
          >
            <TextField
              fullWidth
              label="Nombre"
              variant="outlined"
              className="mb-5"
              required
            />
            <TextField
              fullWidth
              label="Teléfono"
              variant="outlined"
              className="mb-5"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              className="mb-5"
            />
            <TextField
              fullWidth
              label="Mensaje"
              variant="outlined"
              multiline="true"
            />
            <BotonPrimario titulo={"Enviar"} bg="bg-blue-700" width={"w-full"}/>
          </Box>
        </div>
      </MainLayout>
    </>
  );
};

export default Contacto;

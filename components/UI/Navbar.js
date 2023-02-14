import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";

import imgUrl from "../../assets/imgs/comsys-logo.svg";

const Navbar = () => {
  const path = useRouter().asPath;
  console.log(path);

  return (
    <nav className="h-12 flex mx-auto max-w-[1280px]">
      <Link href="/">
        <Image
          src={imgUrl}
          alt="logo comsys"
          className="flex w-24 sm:w-40"
          priority
        />
      </Link>
      <MenuIcon className="flex md:hidden ml-auto text-4xl text-blue-600" />
      <ul className="ml-auto hidden md:flex gap-8 my-auto font-bold text-gray-600 cursor-pointer">
        <Link href="/">
          <li
            className={
              path === "/"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : ""
            }
          >
            Inicio
          </li>
        </Link>

        <Link href="/quienes">
          <li
            className={
              path === "/quienes"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : ""
            }
          >
            ¿Quiénes somos?
          </li>
        </Link>

        <Link href="/servicios">
          <li
            className={
              path === "/servicios"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : ""
            }
          >
            Servicios
          </li>
        </Link>

        <Link href="/contacto">
          <li
            className={
              path === "/contacto"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : ""
            }
          >
            Contacto
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

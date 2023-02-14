import Image from "next/image";

import imgUrl from "../../assets/imgs/comsys-logo-blanco.svg";

const Footer = () => {
  return (
    <footer className="bg-[#141414] max-w-[1280px] mx-auto">
      <div className="max-w-screen-xl px-8 py-8 mx-auto space-y-8 lg:space-y-16 lg:p-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image src={imgUrl} width={100} />
            <p className="max-w-xs mt-4 text-white/50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white/75">Nosotros</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Acerca de
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white/75">Soporte</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Ayuda
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Documentación
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white/75">Servicios</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Sector salud
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Sistemas
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Desarrollo Web
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-center">
          Copyright &copy; {new Date().getFullYear()} Comsys
          <br />
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

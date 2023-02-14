import Head from "next/head";

import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const MainLayout = ({ children, titulo }) => {
  return (
    <div>
      <Head>
        <title>{titulo || "Comsys"}</title>
      </Head>
      <div className="bg-slate-100">
        {/* Hero */}
        <div className="m-0 px-5 sm:px-16 pt-8 max-w-[1280px] mx-auto">
          <Navbar />
        </div>
        <div className="max-w-[1280px] mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

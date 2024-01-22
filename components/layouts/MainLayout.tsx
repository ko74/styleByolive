// components/Layout.tsx
import Head from "next/head";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "../Footer";
import Navbar from "../Navbar";

type ILayout = {
  title: string;
  description?: string;
  children: JSX.Element;
};
const Layout = ({ title, description, children }: ILayout) => {
  return (
    <div className="h-full">
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Navbar isSticky/>
      <div className="h-full">
        <main className="px-5">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

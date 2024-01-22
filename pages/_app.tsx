// pages/_app.tsx
import { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import PageLoader from "../components/PageLoader";
import "../styles/globals.css";
import Layout from "../components/layouts/MainLayout";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout title="">
      <>
        <Component {...pageProps} />
        <PageLoader />
      </>
    </Layout>
  );
};

export default MyApp;

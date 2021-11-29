import { useState } from "react";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { Router } from "next/router";
import AppLayout from "layouts/app-layout";
import "styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loading from "components/Loading";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  return !loading ? (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  ) : (
    // <AppLayout>

    // </AppLayout>
    <Loading />
  );
}

export default MyApp;

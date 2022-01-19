import { useState } from "react";
import type { AppProps } from "next/app";
import { AppWrapper } from "context/state";

import NProgress from "nprogress";
import { Router } from "next/router";

import "../styles/globals.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    // setLoading(true);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    // setLoading(false);
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;

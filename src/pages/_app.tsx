import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

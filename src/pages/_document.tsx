import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// styled-component
import { ServerStyleSheet } from "styled-components";

// ----------------------------------------------------------------------

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Changa:wght@500;600&family=Exo:wght@500;600;700&family=Noto+Serif:wght@400;700&family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Damion&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap"
            rel="stylesheet"
          />
          <title>Madreply</title>
        </Head>
        <body>
          <Main />
          <noscript>Sorry, your browser does not support JavaScript!</noscript>
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import LayoutsScripts from '../layouts/LayoutsScripts';

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhaceApp: (App:any) => (props:any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        locale: ctx.locale,
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
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
          <LayoutsScripts/>
        </body>
      </Html>
      
    );
  }
}

export default MyDocument;

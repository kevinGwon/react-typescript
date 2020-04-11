import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const renderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        renderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link href="/normalize.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500|Roboto:400,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="loading-box"></div>
        </body>
      </html>
    );
  }
}

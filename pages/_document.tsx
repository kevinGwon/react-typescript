import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}

export default class extends Document<IProps> {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link href="/normalize.css" rel="stylesheet" />
          {this.props.styleTags}
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

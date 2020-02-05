import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import LayoutContainer from '../containers/LayoutContainer';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500|Roboto:400,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <LayoutContainer>
            <Main />
          </LayoutContainer>

          <NextScript />
        </body>
      </html>
    );
  }
}

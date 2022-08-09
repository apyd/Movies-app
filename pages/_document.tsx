import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="modalRoot" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

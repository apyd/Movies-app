import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { renderStatic } from '../config/rerender';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = await renderStatic(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </React.Fragment>
      )
    };
  }
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

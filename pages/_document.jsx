/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <style>
            @import url(//db.onlinewebfonts.com/c/ea250342ec4016561ba9e791c2f39c11?family=Posterama);
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

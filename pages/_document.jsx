/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <title>Back 2 Zero | Official Site</title>
          <meta property="og:url" content="https://back2zero.vercel.app/"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content="Back 2 Zero | Official Site"></meta>
          <meta property="og:description" content=""></meta>
          <meta property="og:image" content="/images/0036.jpeg"></meta>
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

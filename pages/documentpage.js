import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'Gou University'
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin'

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>


          <style>{
            `
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `
          }</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

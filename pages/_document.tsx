import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta name='theme-color' content='#ff3535' />
          <meta
            name='description'
            content='Профессиональная переподготовка с дипломом государственного образца'
          />
          <link rel='icon' href='/favicon.ico' />

          <meta
            name='facebook-domain-verification'
            content='8dw7ic38j9fzri38ak0xd5scopqo4k'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

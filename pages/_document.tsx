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

          <script
            src='https://code.jquery.com/jquery-3.6.0.min.js'
            integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
            crossOrigin='anonymous'></script>
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
            integrity='sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'></script>
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js'
            integrity='sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'></script>
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js'
            integrity='sha512-+m6t3R87+6LdtYiCzRhC5+E0l4VQ9qIT1H9+t1wmHkMJvvUQNI5MKKb7b08WL4Kgp9K0IBgHDSLCRJk05cFUYg=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'></script>
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
            integrity='sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'></script>
          <script type='text/javascript' src='/assets/js/myjs.js'></script>
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

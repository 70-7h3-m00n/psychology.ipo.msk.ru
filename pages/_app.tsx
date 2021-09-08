import '@/styles/app.sass'
import TagManager from 'react-gtm-module'
import { gtmId } from '@/config/index'
import { useEffect } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Script
        src='https://code.jquery.com/jquery-3.6.0.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/jquery.magnific-popup.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
        strategy='beforeInteractive'
      />
      <Script src='/assets/js/sberSdk.js' />
      <Script src='/assets/js/myjs.js' />
    </>
  )
}

export default MyApp

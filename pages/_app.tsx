import '@/styles/app.sass'
import TagManager from 'react-gtm-module'
import { gtmId } from '@/config/index'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

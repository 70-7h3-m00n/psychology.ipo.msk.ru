const dev = process.env.NODE_ENV !== 'production'

const backendUrl = dev
  ? 'http://localhost:3000'
  : 'https://psychology.ipo.msk.ru'

const gtmId = 'GTM-T8TJG99'

const geoip2Id = '550199'

export { dev, backendUrl, gtmId, geoip2Id }

import boom from '@hapi/boom'

export default class BinanceService {
  constructor () {}

  // post getData
  async getBinanceData (data) {
    return fetch('https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(({ data }) => {
        console.log(data)
        return data
      })
      .catch(error => console.error(error))
  }
}

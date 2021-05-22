const request = require('request')
const process = require('process')

const country = process.argv[2]

request(`https://restcountries.eu/rest/v2/name/${country}`, (error, response, body) => {
  if (!country) {
    console.log('請輸入國家名稱')
    return
  }
  if (error) {
    return console.log('讀取失敗', error)
  }
  let data
  try {
    data = JSON.parse(body)
  } catch (error) {
    console.log(error)
    return
  }
  if (data.status === 404) {
    return console.log('找不到國家資訊')
  }
  for (let i = 0; i < data.length; i++) {
    console.log('============')
    console.log(`國家: ${data[i].name}`)
    console.log(`首都: ${data[i].capital}`)
    console.log(`貨幣: ${data[i].currencies[0].code}`)
    console.log(`國碼: ${data[i].callingCodes[0]}`)
  }
})

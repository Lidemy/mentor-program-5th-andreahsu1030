const request = require('request')

const clientID = 'kixmhfejdvpku97ptem3wy06mimc4l'
const baseUrl = 'https://api.twitch.tv/kraken/games/top'

request({
  url: baseUrl,
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}, (error, response, body) => {
  if (error) {
    return console.log(error)
  }
  let data
  try {
    data = JSON.parse(body)
  } catch (error) {
    console.log(error)
  }
  const games = data.top
  for (const game of games) {
    console.log(`${game.viewers}  ${game.game.name}`)
  }
})

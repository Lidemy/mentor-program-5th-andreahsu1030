const API_URL = 'https://api.twitch.tv/kraken'
const CLIENT_ID = 'kixmhfejdvpku97ptem3wy06mimc4l'
const ACCEPT_CODE = 'application/vnd.twitchtv.v5+json'
const errorMsg = '系統錯誤請稍後再試'
const STREAM_TEMPLATE = `<div class="video-block">
<img class="video__preview" src="$preview">
  <div class="video__descibe">
    <img class="headshot" src="$logo">
      <div class="video__info">
        <div class="video__title">$title</div>
        <div class="video__author">$name</div>
      </div>
  </div>
</div>`

getGames((data) => {
  for (let i = 0; i < data.top.length; i++) {
    const li = document.createElement('li')
    li.innerHTML = data.top[i].game.name
    document.querySelector('.nav__list').appendChild(li)
  }
  changeGame(data.top[0].game.name)
})

document.querySelector('.nav__list').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    const gameName = e.target.innerText
    changeGame(gameName)
  }
})

function changeGame(gameName) {
  document.querySelector('h1').innerText = gameName
  document.querySelector('.content-block').innerHTML = ''
  getStreams(gameName, (data) => {
    for (const stream of data) {
      const element = document.createElement('div')
      document.querySelector('.content-block').appendChild(element)
      element.innerHTML = STREAM_TEMPLATE
        .replace('$preview', stream.preview.large)
        .replace('$logo', stream.channel.logo)
        .replace('$title', stream.channel.status)
        .replace('$name', stream.channel.status)
    }
    for (let i = 0; i < 2; i++) {
      const emptyBlock = document.createElement('div')
      emptyBlock.classList.add('stream-empty')
      document.querySelector('.content-block').appendChild(emptyBlock)
    }
  })
}

function getGames(callback) {
  const request = new XMLHttpRequest()
  request.open('GET', `${API_URL}/games/top?limit=5`, true)
  request.setRequestHeader('Client-ID', CLIENT_ID)
  request.setRequestHeader('Accept', ACCEPT_CODE)

  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      let data
      try {
        data = JSON.parse(request.response)
      } catch (error) {
        alert(errorMsg)
        console.log(error)
        return
      }
      callback(data)
    }
  })
  request.send()
}

function getStreams(gameName, callback) {
  const request2 = new XMLHttpRequest()
  request2.open('GET', `${API_URL}/streams?game=${gameName}`, true)
  request2.setRequestHeader('Client-ID', CLIENT_ID)
  request2.setRequestHeader('Accept', ACCEPT_CODE)

  request2.addEventListener('load', () => {
    if (request2.status >= 200 && request2.status < 400) {
      let data
      try {
        data = JSON.parse(request2.response).streams
      } catch (error) {
        alert(errorMsg)
        console.log(error)
        return
      }
      callback(data)
    } else {
      alert(errorMsg)
    }
  })
  request2.send()
}

/* eslint-disable */
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
  fetch(`${API_URL}/games/top?limit=5`, {
    method: 'GET',
    headers: new Headers({
      'Client-ID': CLIENT_ID,
      'Accept': ACCEPT_CODE
    })
  }).then(response => {
    if(!response.ok){
      throw new Error(response.statusText)
    }
    response.json().then(data => {
      callback(data)
    }).catch(error => {
      alert(errorMsg)
      console.log('err: ', error)
    })
  })
}


function getStreams(gameName, callback) {
  fetch(`${API_URL}/streams?game=${gameName}`, {
    headers: new Headers({
      'Client-ID': CLIENT_ID,
      'Accept': ACCEPT_CODE
    })
  }).then(response => {
    if(!response.ok){
      throw new Error(response.statusText)
    }
    response.json().then(data => {
      callback(data.streams)
    }).catch(error => {
      alert(errorMsg)
      console.log('error: ', error)
    })
  })
}

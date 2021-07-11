// 使用瀏覽器提供的 class 'XMLHttpRequest()'
const request = new XMLHttpRequest()
// 幫req加一個 onload 的 eventlistener
document.querySelector('.info__btn').addEventListener('click', (e) => {
  const infoBtn = e.target.closest('.info__btn')
  if (infoBtn) {
    request.addEventListener('load', () => {
      request.onerror = () => {
        alert('系統不穩定，請再試一次')
      }

      // 這邊處理錯誤
      if (request.status >= 200 && request.status < 400) {
        request.onerror = () => {
          console.log(request.status, request.responseText)
        }
        let response
        try {
          // eslint-disable-next-line
          response = JSON.parse(request.response)
        } catch (error) {
          alert('系統不穩定，請再試一次')
          console.log(error)
          return
        }
      } else {
        alert('系統不穩定，請再試一次')
        return
      }

      // 這邊開始執行按下我要抽獎後發生的事
      const response = JSON.parse(request.response)
      const result = document.querySelector('.reffle-result__title')
      document.querySelector('.session-reffle').classList.add('hide')
      document.querySelector('.reffle-block').classList.add('hide')
      document.querySelector('.session-result').classList.add('hide')

      switch (response.prize) {
        case 'FIRST':
          document.querySelector('.session-result').classList.add('reffle-result__first')
          result.innerText = '恭喜你中頭獎了！日本東京來回雙人遊！'
          break
        case 'SECOND':
          document.querySelector('.session-result').classList.add('reffle-result__second')
          result.innerText = '二獎！90 吋電視一台！'
          break
        case 'THIRD':
          document.querySelector('.session-result').classList.add('reffle-result__third')
          result.innerText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
          break
        case 'NONE':
          document.querySelector('.session-result').classList.add('reffle-result__none')

          result.innerText = '銘謝惠顧'
          break
        default:
          alert('系統不穩定，請再試一次')
      }

      // result 頁的按鈕 按下後會重新整理畫面
      document.querySelector('.result__btn').addEventListener('click', (e) => {
        const resultBtn = e.target.closest('.result__btn')
        if (resultBtn) {
          window.location.reload()
        }
      })
    })

    // 第三個參數是 '是否非同步'，在瀏覽器上發req一定是非同步
    request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
    request.send()
  }
})

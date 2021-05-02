// 判斷質數
const readline = require('readline')

const lines = [] // 宣告一個陣列
const rl = readline.createInterface({
  input: process.stdin // ginput 會被傳進去這神秘的地帶
})

rl.on('line', (line) => {
  lines.push(line) // 將輸入的資料全部傳入陣列裡
}) // 當輸入資料時，會被顯示出來

rl.on('close', () => {
  solve(lines) // 將剛剛lines 的東西丟到 solve function裡面
}) // 當輸入完成時，crl+d 就是輸入完成

// 只要改下面這邊就好
function solve(lines) {
  for (let i = 1; i <= lines[0]; i++) {
    if (lines[i] === 1) {
      console.log('Composite')
      break
    }
    for (let j = 2; j <= lines[i]; i++) {
      if (lines[i] % j === 0) {
        console.log('Composite')
      } else {
        console.log('Prime')
      }
    }
  }
}

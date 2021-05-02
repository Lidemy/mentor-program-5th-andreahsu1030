// 判斷迴文
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
  const str = lines.toString()
  let ans = 'True'
  let n = str.length - 1
  let i = 0
  while (i < str.length) {
    if (str[i] !== str[n]) {
      ans = 'False'
    }
    i++
    n--
  }
  console.log(ans)
}

// 水仙花數
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
  const temp = lines[0].split(' ')
  const m = Number(temp[0])
  const n = Number(temp[1])
  for (let i = m; i <= n; i++) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
  function digitsCount(n) {
    if (n === 0) {
      return 1
    }
    let result = 0
    while (n !== 0) {
      n = Math.floor(n / 10)
      result++
    }
    return result
  }
  function isNarcissistic(n) {
    let m = n
    const digits = digitsCount(m)
    let sum = 0
    while (m !== 0) {
      const num = m % 10
      sum += num ** digits
      m = Math.floor(m / 10)
    }
    return sum === n
  }
}

/* eslint-disable */
function join(arr, concatStr) {
  let ans = ''
  for (let i = 0; i < arr.length; i++) {
      ans += arr + concatStr
      }
return ans;
}

function repeat(str, times) {
  let ans2 = '' 
  for(let i=0; i<= times; i++ ){
  ans2 += str
  }
return ans2
}

console.log(join(['a'], '!'))
console.log(repeat('a', 5))
``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 第二行執行for loop 設定 i=0，假如 i<arr.length時執行進入迴圈，每一次 i+1
2. 第三行假如 arr[i] < = 0 回傳 'invalid' 
    1. `i = 0`
    2.  判斷 `arr[0] < = 0`  false 繼續迴圈
    3.  `i + 1 = 1`  
    4.  判斷 `arr[1]< = 0`  false 繼續迴圈
    5. `i + 1 = 2`
    6.  判斷 `arr[2]< = 0` false 繼續迴圈
    7. `i + 1 = 3`
    8.  判斷 `arr[3]< = 0` false 繼續迴圈
    9. `i + 1 = 4`
    10.  判斷 `arr[4]< = 0` false 繼續迴圈
    11. `i + 1 = 5`
    12.  判斷 `arr[5]< = 0` false 
    13. 跳出迴圈

3.  第五行執行 for loop 設定 i = 2，假如 i < arr.length 時進入迴圈，每一次 i+1
4.  假如 arr[i] 不等於 arr[i-1] + arr[i-2]，回傳 'invalid'
    1. `i = 2`
    2. 判斷  `arr[2] 不等於arr[1] + arr[0]`   回傳 invalid
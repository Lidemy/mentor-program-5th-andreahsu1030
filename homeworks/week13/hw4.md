## Webpack 是做什麼用的？可以不用它嗎？

因為前端出現越來越多的Preprocess工具（css 預處理器, js babel...等等等 ）而出現了webpack 這個 module bunlder 將所有工具綁在一起執行。
然後 不一定要使用 webpack 只是在大型專案中使用 webpack 較便利

## gulp 跟 webpack 有什麼不一樣？

兩者可以做到一樣的事情，但卻有根本性的不同。
gulp 可以自己制定各個任務，彈性較大。
webpack 只要在設定檔寫好會要做哪些任務，每一個檔案都會依照設定檔去執行要做的事，比較像是統一的概念。

## CSS Selector 權重的計算方式為何？

由大到小的排序為：
1. `!important` 世界no.1 他出現時其他都不用比了！
2. `#id`  
3. `.class` 
4. `elmment` 

分數計算方式：
element selector ( 0 ,0, 1)
class selector ( 0, 1, 0)
ID selector ( 1, 0, 0)
（引用 https://ithelp.ithome.com.tw/articles/10221486 覺得這樣的方式計算淺顯易懂）
    
範例 - 大至小排序：
1. `#id {}` (1, 0, 0)
2. `nav .nav-list {}` (0, 1, 2)
3. `.content {}` (0, 1, 0)
4. `body a {}`  (0, 0, 2)
5. `p {}` (0, 0, 1)

規則：
1. 不同層級沒辦法比較，像是範例 2 > 3 
2. 假如兩個樣式的分數一樣，前面的樣式會被後面的樣式覆蓋
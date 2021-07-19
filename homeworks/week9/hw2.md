## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

varchar： 可以設定最大長度，適合用在文字量少的欄位，可以有預設值。
text： 不可設定長度，適合用在文字量多的欄位，最大長度為 2 ^ 31 - 1 個字符，不可以有預設值。
參考資料：https://mtr04-note.coderbridge.io/2020/07/27/about-SQL/
## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

＊ cookie 是一個儲存於用戶端的文本，裡面會記錄著用戶的資訊，像是會員登入狀態。
＊ 在 response header 帶上 set-cookie 瀏覽器就會依照限制的時間內保留下cookie 存取的資料，下一次再照訪相同domain 和 path 的網站時就會將之前儲存的 cookie 拿出來。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

即使這次的課程將針對帳號進行轉碼但還是有可能發生 `cross site script` 和 `SQL injection` 
前者是針對程式碼攻擊，藉由插入一段 js 來拿取客戶端輸入的資料; 後者則是針對資料庫攻擊，竄改登入機制使攻擊者可以略過帳戶驗證，接下來就可以竊取整個資料表或是針對 SQL 文本輸入惡意指令。

參考資料：https://tw511.com/a/01/4227.html, https://ithelp.ithome.com.tw/articles/10189201
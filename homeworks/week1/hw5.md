## 請解釋後端與前端的差異。
- 前端處理使用者看到的畫面、介面（也就是介面樣式、排版、互動）
- 後端控制資料庫，並負責將資料、數據傳遞給後端（簡單來說後端處理的東西幾乎是我們看不見的）

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 使用者在流 input 輸入要搜尋的文字
2. 瀏覽器傳送 request 給google sever
3. google sever 將自料存在資料庫並搜尋資料
4. google sever 將一份 html 的檔案 responds 給瀏覽器
5. 瀏覽器將 html 翻譯成我們看得懂（也依照前端工程師的排版樣式）的文字及圖片


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
- cal  印出日曆
- bc  計算機
- tail 印出檔案的最後幾行。 變化型：tail -f 常用於 web server 查看 log debug 時。
## 什麼是 Ajax？

指非同步的使用 javascript 與 server 端傳遞資料。
在還未接收到 server 端的 response 之前電腦可以先去做別的事情，而不是卡在哪邊等待回覆，等到 server 端回覆 response 後再回來處理要做的事情。
## 用 Ajax 與我們用表單送出資料的差別在哪？

可以不用換頁。因為拿到的 response 會交由 javascript 處理，而不是直接在網頁上渲染。
實際案例像是gmail 的郵件列表，不需要不斷地在刷新整個頁面就可以看見有新的郵件。
## JSONP 是什麼？

目前較少人使用的一種交換資料方式，利用某些html標籤不受同源政策的影響去與sever交換資料。
範例： `<script scr="...某個不同源 url"></script>`
## 要如何存取跨網域的 API？

sever 端必須在 header 加上 `access-control-allow-origin:*` 表示任何網域都可以接受請求
參考資料：https://medium.com/@a663321765/web-%E7%AD%86%E8%A8%98-%E5%88%9D%E6%8E%A2%E8%B7%A8%E4%BE%86%E6%BA%90%E8%B3%87%E6%BA%90%E5%85%B1%E7%94%A8-cors-129e88dbca87
## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為第四週時只有透過node.js發送 request, 在 node.js 執行時 node.js 並不會更改任何東西。
然而透過瀏覽器發送及接收 request, response. 瀏覽器為了安全的問題會受到限制或者新增瀏覽器要求的資訊。
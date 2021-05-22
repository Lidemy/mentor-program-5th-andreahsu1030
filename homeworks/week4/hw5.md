## 請以自己的話解釋 API 是什麼
api 長得就像一串網址，而他的作用簡而言之就是可以用來傳輸資料（或者是串接別人做的功能）或者傳遞訊息。例如登入時使用google, fb帳密登入、clint端向sever端發出request（取得資料時）
目前上課的幾乎都是http api，但除此之外還有許多不同的的api


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
`305` Use Proxy 被請求的資源必須通過指定的代理才能被存取。
`403` Forbidden 伺服器已經理解請求，但是拒絕執行它。
`405` Method Not Allowed 請求行中指定的請求方法不能被用於請求相應的資源。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://lekkerrestaurantslist.com

| 說明            | Method	| Path	              | 參數	               | 範例                   |
| -------------- | ------- | ------------------- | -------------------- | --------------------- |
| 回傳所有餐廳資料	| GET	    | /restaurants	     | _limit:限制回傳資料數量 | /restaurants?_limit=10 |
| 回傳單一餐廳資料  | GET	    | /restaurants/:id	 | None	                | /restaurants/5         |
| 刪除餐廳資料      |	DELETE  | /restaurants/:id	| None	               | None                   |
| 新增餐廳資料      |	POST	  | /restaurants	    | name: 餐廳名	        | None                   |
| 更改餐廳資料      |	PATCH	  | /restaurants/:id	| name: 餐廳名	        | None                   |
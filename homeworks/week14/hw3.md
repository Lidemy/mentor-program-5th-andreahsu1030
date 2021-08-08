## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

DNS (Domain Name System) 以提供網域名稱的方式來搜尋 IP 位置。
對 google 的好處：
 1. 可以搜集數據或者分析使用者，得到的數據或分析結果可以給使用者投放更精準的廣告。
 2. 
對一般大眾的好處：
 1. 免費、方便 快速 安全

## 什麼是資料庫的 lock？為什麼我們需要 lock？
為了防止 Race  


## NoSQL 跟 SQL 的差別在哪裡？
NoSQL 非關聯式資料庫 ; SQL 關連式資料庫
兩者之間的差異： 
  NoSQL 
  通常用於儲存數據較多的資料，例如 log 紀錄。 
  使用 key-value 來儲存資料因此沒有固定的結構。
  不支援JOIN   

  SQL
  可以設置固定的clounm
  可以使用JOIN 將兩張資料表連結起來

## 資料庫的 ACID 是什麼？
  為了保證 transaction 的正確性，要符合以下四個特性
  1. 原子性 Atomicity：要馬全部失敗，要馬全部成功
  2. 一致性 Consistency：維持資料的一致性（例如前的總數相同）  
  3. 隔離性 Isolation：多筆交易不會互相影響（不能同時改同一個值）
  4. 持久性 Durability：交易成功後，寫入的資料不會不見
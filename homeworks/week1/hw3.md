## 教你朋友 CLI
### 基礎的CLI指令

CLI指令大致上都是這樣的形式，後面的參數可填可不填

```jsx
 ** $ command [-options] parameter1 parameter2 **
    指令    [選項]     參數(1)    參數(2)
```

- `pwd`

    告訴我! 我在哪裡 !!

- `cd`

    超級實用的指令可以到任何你想去的資料夾下

    `cd ~`  回到根目錄

    `cd ~` 

- `touch`

    碰一下檔案，如果觸碰檔案已經有人命名了 ~~就會被告性騷擾~~  就會更新最後修改時間。
    若檔案名稱無其他檔案使用就會創建一個新的檔案。

- `mkdir`

    建立一個資料夾

- `mv`

    可以移動檔案或資料夾，也可以用來改名 

- `ls`  列出當下資料夾裡的檔案

    `ls -al` 詳細檔案

- `man` 

    說明書，如果想查詢某指令可以怎麼使用或搭配什麼參數 就輸入 man -(command)

### 實際操作

1.  打開電腦的 Terminal mac 可以直接右上的圖示搜尋即可
2. 輸入  `pwd` 確認現在在哪個位置
3. 輸入 `mkdir wifi` 建立一個 wifi 的資料夾
4. 輸入 `cd wifi`  到 wifi 這個資料夾裡面
5. 輸入 `touch wifi.js`  在 wifi 資料夾下建立一個 afu.js檔案
6. 輸入 `ls -al` 查看所有檔案，確認剛建立的檔案是否已存在

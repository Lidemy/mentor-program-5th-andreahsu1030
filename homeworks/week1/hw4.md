## 跟你朋友介紹 Git

## git 是什麼？

- Git 是一個版本控制的軟體，並且在軟體業很有名氣，不少的網頁開發都使用git作為版本控制
- 版控是什麼： 可以記錄每一份文件每一經過不同人新增、修改、合併等操作
- 可以記錄每一次新增或修改的內容
- 支援同時對一個分支工作，若合併時發生衝突也會出現提醒

### git 基礎指令
 `git init`	初始化，在要被版控的資料夾下此指令	
 `git add`	將檔案加入版本控制的指令
 `git status`	查詢此檔案在git的資料夾的狀態，建議常使用	Untracked：未被版控/Staged: 有被板控
 `git commit -m'msg'` 創造一個新版本，並留一段訊息		
 `git checkout`	用來讓分支回到之前的版本
 `branch 加檔案名稱` 可以跳到該分支底下	
  `git checkout -b 加檔案名稱`  建立一個分之, 並跳到該分之底下
 `.gitignore`	被忽略的邊緣資料夾, 把不想被版空的檔案丟進去就會被忽略掉
 `git commit - am` 	自動將檔案都丟進版控，但除了新的檔案！！	
 `git diff`	查看版本前後差異	
`git branch -v`	查看 git branch 的 master	
 `git branch -d (name)`	刪掉某branch	
 `git branch (name)`	新增一個branch	
 `git merge (name)`	將某檔案合併進來	

### 實際操作
1. 在一空的資夾底下輸入`git init`
2. 輸入 `git status` 確認檔案狀態
3.  `git add (name)`  將單一檔案加入版控
    - `git add -am` 將所有‘新的’檔案加入版控
    - `git add .` 將所有檔案加入版控
    - `rm  - -cached (name)` 讓檔案取消背板控
4. 將不必要的檔案加入 `.gitignore` 裡面放一個就會被 git 忽略了 
5.  `git commit` 創建新的版本，輸入完後會直接跳到 vim
    - `git commit -m 'msg'` 創建新版本和留言同時完成
    - `git log`  查詢 commit history
    - `git - -oneline` 顯示簡短的 commit histiory
    - 每一次 commit 會產生一段版本號
6.  `git status` 確認目前狀態
7. 之後建立新檔案記得把檔案加入版控中，並且 `commit`
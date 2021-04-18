## 交作業流程
## Step-up

---

1. 進入 GitHub classroom (URL)，產生自己的倉庫
2. 進入連結後會顯示已接受邀請，系統會自動建立一個repository
3. 點連結進入 
4.  `code` copy url
5. 回到 Terminal 輸入 `git clone (url)`，將資料夾拉到自己的本地端
6. 打開 hw/week_/直接改裡面相對應的檔案
7. `git status` 看一下，`git diff` 看修改了什麼
8. 這時候會在master裡面
9. `git checkout -b week1`  開一個week1的分支並同時切到該資料夾底下，確認交作業時在 classroom/hw/week_
10. `git commit -am ‘msg’`送出新的版本，並加上訊息
11.  `git push origin week1` 把檔案推到遠端的GitHub 
12. 到 github website, 會看到剛剛上傳的branch, 按下 `pull request` (也可以留訊息)
13. 如果要改訊息再回到 ternminal 修改，再重新 push一次, 不需再發PR
14. 上傳完成後到 `file changed` 再檢查一次 final version，確認自己發的是不是跟自己想的依樣
15.  回到 Lidemy system 按下 `交作業` 並輸入連結
16. 確認連結內容，若無問題即代表完成了

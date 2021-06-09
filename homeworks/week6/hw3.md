## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

`<br>` 斷行 （不確定這個算不算被提過）
`<code>` 將程式碼變成文字的標籤
`<textarea>` 用來建立一個可以輸入多行文字的的輸入框
`<strong>` 有特殊語意表示內容的重要性，並且標籤內文字變成粗體

## 請問什麼是盒模型（box modal）

任何網頁上呈現的內容其實都是一塊一塊組合而成的（好像很多盒子一樣），除了區塊的長寬外還必須加上區塊的 border, padding, margin 三個的寬度，如果超過父系元素的寬度將會被換行（造成跑版）亦或超過browser的網頁寬度也會造成跑版。
因此為了網頁能依照我們希望它所呈現的方式來展現，過往會仔細的計算
## 請問 display: inline, block 跟 inline-block 的差別是什麼？

inline: 行內元素，顧名思義就是使文字或圖片在同一行呈現（未超過網頁寬度情況下不換行）並且不可設置寬高，元素的寬高由他的內容撐開。
block: 區塊元素，每一個block元素會排滿一整行，而下一個block元素會出現在下一行。（不使用 flex or float 的情況下）
inline-block: 以 inline 的方式呈現並且擁有block的屬性，意思是inline-block可以設置寬高，多個inline-block放在一起會並排。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position -
  static: 預設狀態(不跳脫排版流)，不可在此狀態下設置left, right, top, bottom。
  relative: 以自己原本顯示的位置作為基準點進行位移，且區塊原本的空間將會保留不會消失。
  absolute: 以relative 的區塊作為基準去移動(設置過absolute的)元素 。 倘若沒有設置 relative 將會以 body（整個視窗） 作為基準，原本區塊的空間將會消失。
  fixed: 以視窗作為基準即使滾動視窗元素也不會消失。
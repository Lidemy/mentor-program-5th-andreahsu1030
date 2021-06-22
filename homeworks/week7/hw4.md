## 什麼是 DOM？

一、 瀏覽器將一份 html 內的標籤定義成一個一個的物件 （會形成一個樹狀圖）
在 DOM tree 通常會分為四種節點：
1. Document
2. Element
3. Text
4. Attribute

二、 透過節點我們可以得知 Element 之間的關係（父子、兄弟）
三、 透過 DOM tree 我們可以使用瀏覽器提供的 API
      ex: `document.getElementById('....')`

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

先捕獲再冒泡，由最外層開始捕獲到 target phrase 然後再冒泡到最外層。
捕獲就是依照ＤＯＭ的階層由 document 到指定的物件這過程稱為捕獲。
冒泡是從指定的物件往回走到最上層的document。

## 什麼是 event delegation，為什麼我們需要它？

事件代理，意思是將監聽事件放在需要被監聽物件的外層這樣我們就不需要每個功能都增加一個監聽事件。
例如：有一份申請表單裡面有數個input，每個input旁邊都有一個按鈕，只要將監聽事件放在表單即可，不需要針對每一個按鈕放。
此方法較為便利及增加程式碼的可讀性及簡潔。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`event.preventDefault()` 阻止預設行為，不包含捕獲及冒泡階段。 
`event.stopPropagation()` 只到當前的行為並阻止後續捕獲或冒泡（若放在捕獲階段後續的將不會執行，若放在冒泡階段即阻止後續的帽泡）。

兩者之間的差異為是否會阻止後續捕獲及冒泡，以及前者會阻止預設行為。
參考資料：https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault

````html  
<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>Test Page</title>
    <meta name​="viewport" content="width=device-width, initial-scale=1">
</head>
<style>
  .test__A {
    height: 100px;
    background: salmon;
  }
</style>

<body>
  <div>
    <div class="test__A">
      <button class="test__B">click me !</button>
    </div>
  </div>    

<script>
  document.querySelector('.test__A').addEventListener('click', function(){
    alert('事件被觸發了')
  })

  document.querySelector('.test__B').addEventListener('click', function(e){
    // 假如在這邊放 e.preventDefault()，當點擊 "click me" 時還是會出現 alert 是因為冒泡的關係
    // 若是在這邊放 e.stopproragation()，當點擊 "click me" 時並不會出現 alert 因為後續的階段都被阻止了
  })
</script>
</body>
</html>
````

    
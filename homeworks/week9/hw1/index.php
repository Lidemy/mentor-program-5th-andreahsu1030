<!-- register.php 註冊頁面
handle_register.php 處理註冊邏輯
login.php 登入表單
handle_login.php 處理登入邏輯
logout.php 登出 -->


<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    // 1. 從cookie 裡面讀取PHPSESSID(token)
    // 2. 從檔案裡面讀取session id 的內容
    // 3. 放到 $_SESSION
    

    
    $user = getUserFromUsername($username);
  }

  // if(!empty($_COOKIE['token'])) {
  //   $user = getUserFromToken($_COOKIE['token']);
  //   $username = $user['nickname'];
  // }
  

  $result = $conn->query("select * from `andrea_comments` order by id desc");
  if (!$result) {
    die('Error:' . $conn->error);
  }
  
?>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  <header class="warning">注意！本站為練習用網站，音教學用途刻意忽略資安實作，註冊時請勿使用任何真實的帳號密碼。</header>
  <main class="board">
  <?php if (!$username) {?>
    <div>
      <a class="board__btn" href="register.php">註冊</a>
      <a class="board__btn" href="login.php">登入</a>
    </div>
  <?php } else { ?>
    <a class="board__btn" href="logout.php">登出</a>
    <h3>你好！<?php echo $user['nickname']; ?></h3>
  <?php } ?>
    <h1>comments</h1>
    <?php
      if (!empty($_GET['errCode'])) {
        // 注意！使用`＄＿` 拿到的東西都是字串
        $code = $_GET['errCode'];
        $msg = 'Error';
        // 因此這個 1 會是字串
        if ($code === '1') {
          $msg = '資料不齊全';
        }
        echo '<h2>錯誤： ' . $msg . '</h2>';
      }
    ?>

    <?php if ($username) {?>
      <form class="board__new-comment-form" method ="POST" action="handle_add_comment.php">
        <textarea name="content" rows="5"></textarea>
        <input class="board__submit-btn" type="submit">
      </form>
    <?php } else { ?>
      <h3>請登入發布留言  </h3>
    <?php } ?>


    <div class="border__hr"></div>

    <section>

    <?php
      while($row = $result->fetch_assoc()) {
    ?>
      
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
          <!-- php 替換成等於'=' 就是輸出的簡寫，但部分地方不支援 -->
            <span class="card__author"><?php echo $row['nickname']; ?></span>
            <span class="card__time"><?php echo $row['create_at']; ?></span>
          </div>
          <p class="card__content"><?php echo $row['content']; ?></p>
        </div>
      </div>
      <?php
      }
      ?>

    </section>

  </main>
</body>
</html>
<?php
  require_once("conn.php");
  
  if ( 
    empty($_POST['nickname']) || 
    empty($_POST['username']) ||
    empty($_POST['password'])
    ) {
    header ('Location: register.php?errCode=1');
    die ('資料不齊全');
  }

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];


  $sql = sprintf(
    "insert into `andrea_users`(nickname, username, password) values('%s', '%s', '%s')",
    $nickname,
    $username,
    $password
  );


  $result = $conn->query($sql);
  if (!$result) {
    //if (strops($conn->error, "Duplicate entry") !== false) {

      // 使用PHP 提供的error code 來辨別錯誤
      $code = $conn->errno;
      if ($code === 1062) {
        header ('Location: register.php?errCode=2');
      }
    // 用這個方法會導致不管是否帳號重複都會相同的警語
    // header ('Location: register.php?errCode=2');
    die('Error:' . $conn->error);
  }
//}

  header("Location:index.php");
  
?>





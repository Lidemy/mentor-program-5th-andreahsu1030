<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  
  if ( 
    empty($_POST['username']) ||
    empty($_POST['password'])
    ) {
    header ('Location: login.php?errCode=1');
    die ('資料不齊全');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];


  $sql = sprintf(
    "select * from `andrea_users` where username='%s' and password='%s'",
    $username,
    $password
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  if ($result->num_rows) {
    // 建立 Token 並且儲存
    // $token = generateToken();
    // $sql = sprintf(
    //   "insert into tokens(token, username) values('%s', '%s')", 
    //   $token,
    //   $username
    // );

    // $result = $conn->query($sql);
    // if (!$result) {
    //   die($conn->error);
    // }

    //壹定要設置時間，否則時間會很短
    // $expire = time() + 3600 * 24 * 30; // 30 day
    // time() ＝ 現在時間
    // setcookie("token", $token, $expire);

    //透過session 存取 username
    $_SESSION['username'] = $username;
    header('location:index.php');
  } else {
    header ('Location: login.php?errCode=2');
  } 
?>





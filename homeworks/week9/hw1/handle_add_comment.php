<?php
session_start();
require_once("conn.php");
require_once("utils.php");

// 先將原本判斷是否有填寫暱稱的地方拿掉
if (empty($_POST['content'])) {
  header('Location: index.php?errCode=1');
  die('資料不齊全');
}

// // 從cookie 撈出 username
// $username = $_COOKIE['username'];
// $user_sql = sprintf(
//   'select nickname from users where username="%s"',
//   $username
// );
// $user_result = $conn->query($user_sql);
// $row = $user_result->fetch_assoc();
// $nickname = $row['nickname'];

$user = getUserFromUsername($_SESSION['username']);
$nickname = $user['username'];

$content = $_POST['content'];

$sql = sprintf(
  "insert into `andrea_comments`(nickname, content) values('%s', '%s')",
  $nickname,
  $content
);


$result = $conn->query($sql);
if (!$result) {
  die('Error:' . $conn->error);
}

header("Location:index.php");

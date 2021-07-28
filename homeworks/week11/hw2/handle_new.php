<?php
session_start();
require_once("conn.php");
require_once("utils.php");

if (empty($_POST['title']) || (empty($_POST['content']))) {
  header("Location:new.php?errCode=1");
  die('資料不齊全');
}

if (empty($_SESSION['username'])) {
  header("Location:index.php");
  die('請重新登入');
}
$username = $_SESSION['username'];
$title = $_POST['title'];
$content = $_POST['content'];

$sql = "insert into `andrea_articals`(username, title, content) values(?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $username, $title, $content);
$result = $stmt->execute();

if (!$result) {
  die('Error:' . $conn->error);
}

header("Location:admin.php");

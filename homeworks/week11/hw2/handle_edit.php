<?php
session_start();
require_once('conn.php');
require_once('utils.php');

if (empty($_POST['content']) || empty($_POST['title'])) {
  header('Location: edit.php?errCode=1&id=' . $_POST['id']);
  die('資料不齊全');
}

$username = $_SESSION['username'];

if (!$username) {
  header('Location: index.php');
}


$title = $_POST['title'];
$content = $_POST['content'];
$id = $_POST['id'];

$sql = "update `andrea_articals` set title=?, content=? where id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssi', $title, $content, $id);


$result = $stmt->execute();
if (!$result) {
  die($conn->error);
}

header("Location: admin.php");

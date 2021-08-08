<?php
session_start();
require_once('conn.php');
require_once('utils.php');

if (
  empty($_GET['id'])
) {
  header('Location: admin.php?errCode=1');
  die('資料不齊全');
}

if (!$_SESSION['username']) {
  header('Location: index.php');
  die('請重新登入');
}

$id = $_GET['id'];
$sql = "update `andrea_articals` set `is_deleted`=1 where id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
}

header("Location: admin.php");

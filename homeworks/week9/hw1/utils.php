<?php
require_once("conn.php");

function getUSerFromUsername($username) {
  global $conn;
  // 拿 token 去ＤＢ查表
  // $sql = sprintf(
  //   "select username from tokens where token = '%s'",
  //   $token
  // );
  // $result = $conn->query($sql);
  // // 將 token 轉化成 username
  // $row = $result->fetch_assoc();
  // $username = $row['username'];

  $sql = sprintf(
    "select * from `andrea_users` where username = '%s'",
    $username
  );
  $result = $conn->query($sql);
  // 將 token 轉化成 username
  $row = $result->fetch_assoc();
  return $row; // 會有username, id, nickname
}

function generateToken() {
  $s = '';
  for ($i = 1; $i <= 16; $i++) {
    $s .= chr(rand(65, 90));
  }
  return $s;
}




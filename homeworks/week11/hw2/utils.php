<?php
require_once("conn.php");

function getUserFromUsername($username) {
  global $conn;
  $sql = sprintf(
    "select * from `andrea_users` where username = '%s'",
    $username
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  return $row; // 會有username, id, nickname, role
}

function generateToken() {
  $s = '';
  for ($i = 1; $i <= 16; $i++) {
    $s .= chr(rand(65, 90));
  }
  return $s;
}

function escape($str) {
  return htmlspecialchars ($str, ENT_QUOTES);
}


<?php
require_once("conn.php");


$user = NULL;
$username = NULL;
$role = NULL;

if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
}


$page = 1;
if (!empty($_GET['page'])) {
  $page = intval($_GET['page']);
}
$items_per_page = 5;
$offset = ($page - 1) * $items_per_page;

$stmt = $conn->prepare(
  'select ' .
    'C.id as id, C.content as content, ' .
    'C.created_at as created_at, U.nickname as nickname, U.username as username ' .
    'from `andrea_comments` as C ' .
    'left join `andrea_users` as U on C.username = U.username ' .
    'where C.is_deleted IS NULL ' .
    'order by C.id desc ' .
    'limit ? offset ? '
);
$stmt->bind_param('ii', $items_per_page, $offset);
$result = $stmt->execute();
if (!$result) {
  die('Error:' . $conn->error);
}
$result = $stmt->get_result();
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
    <h1>comments</h1>
    <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
      <textarea name="content" rows="5"></textarea>
      <input class="board__submit-btn" type="submit">
    </form>

    <div class="border__hr"></div>

    <section>

    </section>
    </div>
  </main>
  <script src="script.js"></script>
</body>

</html>
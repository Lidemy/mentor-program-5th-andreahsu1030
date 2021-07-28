<?php
session_start();
require_once("conn.php");
require_once("utils.php");
$username = NULL;

if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
}

$page = 1;
if (!empty($_GET['page'])) {
  $page = intval($_GET['page']);
}
$items_per_page = 5;
$offset = ($page - 1) * $items_per_page;

$stmt = $conn->prepare(
  'select ' .
    'artical.id as id, artical.title as title, artical.content as content, ' .
    'artical.created_at as created_at, user.username as username ' .
    'from `andrea_articals` as artical ' .
    'left join `andrea_users` as user on artical.username = user.username ' .
    'where artical.is_deleted IS NULL ' .
    'order by artical.id desc ' .
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

<html>

<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="artical_list.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <?php if ($username) { ?>
            <li><a href="admin.php">管理後台</a></li>
            <li><a href="logout.php">登出</a></li>
          <?php } ?>
          <?php if (!$username) { ?>
            <li><a href="login.php">登入</a></li>
          <?php } ?>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="posts">
      <?php while ($row = $result->fetch_assoc()) { ?>
        <article class="post">
          <div class="post__header">
            <div><?php echo escape($row['title']) ?></div>
            <div class="post__actions">
              <a class="post__action" href="edit.php?id=<?php echo $row['id']?>">編輯</a>
            </div>
          </div>
          <div class="post__info">
            <?php echo $row['created_at'] ?>
          </div>
          <div class="post__content">
            <?php echo escape($row['content']) ?>
          </div>
          <a class="btn-read-more" href="content_page.php?id=<?php echo $row['id']?>">READ MORE</a>
        </article>
      <?php } ?>
    </div>

    <?php
    $stmt = $conn->prepare(
      'select count(id) as count from `andrea_articals` where is_deleted IS NULL'
    );
    // $stmt->bind_param('ii', $items_per_page, $offset);
    $result = $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $count = $row['count'];
    $total_page = ceil($count / $items_per_page) //無條件進位
    ?>
  </div>
  <div class="page_info">
    <span>總共有 <?php echo $count ?> 篇文章，頁數：</span>
    <span><?php echo $page ?> / <?php echo $total_page ?></span>
    分頁
  </div>
  <div class="paginator">
    <?php if ($page != 1) { ?>
      <a href="index.php?page=1">第一頁</a>
      <a href="index.php?page=<?php echo $page - 1 ?>">上一頁</a>
    <?php } ?>
    <?php if ($page != $total_page) { ?>
      <a href="index.php?page=<?php echo $page + 1 ?>">下一頁</a>
      <a href="index.php?page=<?php echo $total_page ?>">最後一頁</a>
    <?php } ?>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>

</html>
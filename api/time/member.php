<?php
require "../connect.php";
session_start();
$x1=mysql_query("select * from users where username='{$_SESSION["username"]}'")or die("4");
$user=mysql_fetch_object($x1);
$user=json_encode($user);
echo $user;
?>
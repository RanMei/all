<?php
require "connect.php";
$user=json_decode("{$_POST["data"]}",true)or die("3");
mysql_query("insert into users (username,password)values('{$user["username"]}','{$user["password"]}')");
session_start();
$_SESSION["username"]=$user["username"];
echo $user["username"];
?>
<?php
require "connect.php";
$user=json_decode("{$_POST["data"]}",true)or die("3");

$x1=mysql_query("select * from users where username='{$user["username"]}' and password='{$user["password"]}'")or die("4");
$x2=mysql_num_rows($x1);

if($x2!=0){
	session_start();
	$_SESSION["username"]=$user["username"];
	echo true;
}else{
	echo false;
};
?>
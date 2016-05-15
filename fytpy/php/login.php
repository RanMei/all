<?php
header("Content-type:text/plain;charset=utf-8");

require "connect.php";
$user=json_decode("{$_POST["data"]}",true)or die("Failed to parse JSON.");

$rows=mysqli_query($connection,"select * from users where username='{$user["username"]}' and password='{$user["password"]}'")or die("Failed to query.");
$rowsNumber=mysqli_num_rows($rows);

if($rowsNumber!=0){
	session_start();
	$_SESSION["username"]=$user["username"];
	echo 'true';
}else{
	echo 'false';
};
?>
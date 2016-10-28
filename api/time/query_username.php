<?php
require "connect.php";

$rows = mysqli_query("select * from users where username='{$_POST["data"]}'")or die("Failed to query username!");
$n = mysqli_num_rows($rows);
if($n!=0){
	echo false;
}else{
	echo true;
};
?>
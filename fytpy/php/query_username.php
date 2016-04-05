<?php
require "connect.php";

$rows=mysql_query("select * from users where username='{$_POST["data"]}'")or die("3");
$n=mysql_num_rows($rows);
if($n!=0){
	echo false;
}else{
	echo true;
};
?>
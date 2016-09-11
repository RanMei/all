<?php

require "connect.php";
header('Content-type: application/json'); 
$user = json_decode( file_get_contents("php://input"),true )or die("3");
mysqli_query( $connection,"insert into users (name,phone) values ('{$user['name']}','{$user['phone']}')" );
echo $user['name'];
?>
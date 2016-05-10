<?php
require "connect.php";
session_start();
$data=json_decode($_POST["data"],true);

if( $data["itemID"] ){
	mysqli_query($connection,"delete from shoppingCart where username='{$_SESSION["username"]}' and itemID='{$data["itemID"]}'");
};

if( $data["consignee"] ){
	mysqli_query($connection,"delete from deliveryInformation where username='{$_SESSION["username"]}' and date='{$data["date"]}'");
};
?>
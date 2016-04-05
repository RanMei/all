<?php
require "connect.php";
session_start();
$x=json_decode($_POST["data"],true);

if( $x["itemID"] ){
	mysql_query("delete from shoppingCart where username='{$_SESSION["username"]}' and itemID='{$x["itemID"]}'");
};

if( $x["consignee"] ){
	mysql_query("delete from deliveryInformation where username='{$_SESSION["username"]}' and date='{$x["date"]}'");
};
?>
<?php
require "connect.php";
session_start();
$data=json_decode($_POST["data"],true);

function deleteDI ($connection,$data){
	mysqli_query($connection,"delete from deliveryInformation where username='{$_SESSION["username"]}' and date='{$data["date"]}'");
}

if( $data["type"]=='REMOVE_ITEM' ){
	mysqli_query($connection,"delete from shoppingCart where username='{$_SESSION["username"]}' and itemID='{$data["itemID"]}'");
};

if( $data["type"]=='DELETE_DI' ){
	deleteDI($connection,$data);
	echo 'true';
};
?>
<?php
require "connect.php";
session_start();
$data=json_decode($_POST["data"],true) or die("解析JSON失败！");

if( isset($_SESSION["username"]) ){
	
	function saveNewDI($connection,$data){
		$rows = 
			mysqli_query($connection,"select * from deliveryInformation where username='{$_SESSION["username"]}' and date='{$data["date"]}'")
			or die('Failed to select!');
		if( mysqli_num_rows($rows)==0 ){
			mysqli_query($connection,"insert into deliveryInformation(username,consignee,phoneNumber,deliveryAddress,date,status)values('{$_SESSION["username"]}','{$data["consignee"]}','{$data["phoneNumber"]}','{$data["deliveryAddress"]}','{$data["date"]}','')")or die('Failed.');
			echo 'true';
		}else{
			mysqli_query($connection,"update deliveryInformation set consignee='{$data["consignee"]}', phoneNumber='{$data["phoneNumber"]}', deliveryAddress='{$data["deliveryAddress"]}' where username='{$_SESSION["username"]}' and date='{$data["date"]}'");
			echo 'true';
		};
	};

	//将订单信息写入数据库。
	if( isset($data["new_order"]) ){
		mysqli_query($connection,"insert into orders(orderID,username,consignee,phoneNumber,deliveryAddress,totalPrice,date)values('{$data["orderID"]}','{$data["username"]}','{$data["consignee"]}','{$data["phoneNumber"]}','{$data["deliveryAddress"]}','{$data["totalPrice"]}','{$data["date"]}')");
	};

	function addToCart($connection,$data){
		$rows = mysqli_query($connection,"select * from shoppingCart where username='{$_SESSION["username"]}' and itemID='{$data["itemID"]}'");
		if(mysqli_num_rows($rows)==0){
			mysqli_query($connection,"insert into shoppingCart(username,itemID,quantity)values('{$_SESSION["username"]}','{$data["itemID"]}','{$data["quantity"]}')");
		};
		echo 'true';
	}
	
	if( $data["type"]==='ADD_TO_CART' ){
		addToCart($connection,$data);
	};
	if( $data["type"]==='SAVE_NEW_DI' ){
		saveNewDI($connection,$data);
	};

}else{
	echo 'false';
};
?>
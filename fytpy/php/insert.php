<?php
require "connect.php";
session_start();
$data=json_decode($_POST["data"],true) or die("解析JSON失败！");

if( isset($_SESSION["username"]) ){
	
	if( isset($data["DI"]) ){
		$rows=mysqli_query($connection,"select * from deliveryInformation where username='{$_SESSION["username"]}' and date='{$data["date"]}'");
		if(mysqli_num_rows($rows)==0){
			mysqli_query($connection,"insert into deliveryInformation(username,consignee,phoneNumber,deliveryAddress,date)values('{$data["username"]}','{$data["consignee"]}','{$data["phoneNumber"]}','{$data["deliveryAddress"]}','{$data["date"]}')");
		}else{
			mysqli_query($connection,"update deliveryInformation set consignee='{$data["consignee"]}', phoneNumber='{$data["phoneNumber"]}', deliveryAddress='{$data["deliveryAddress"]}' where username='{$_SESSION["username"]}' and date='{$data["date"]}'");
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
		echo true;
	}
	
	if( $data["type"]==='ADD_TO_CART' ){
		addToCart($connection,$data);
	};

}else{
	echo false;
};
?>
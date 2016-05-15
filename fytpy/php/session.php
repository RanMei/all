<?php
require "connect.php";
session_start();
if( isset($_SESSION["username"]) ){
	$user["username"]=$_SESSION["username"];
	
	// Function to get shopping-cart infomation.
	function getShoppingCart($connection){
		$rows=mysqli_query($connection,"select * from shoppingCart where username='{$_SESSION["username"]}'")or die("读取购物车信息失败！");
		if(mysqli_num_rows($rows)==0){
			return array();
		}else{
			for($i=0;$i<mysqli_num_rows($rows);$i++){
				$item=mysqli_fetch_object($rows);
				$itemID=$item->{"itemID"};
				$y=mysqli_query($connection,"select * from items where itemID='{$itemID}'")or die("读取购物车信息失败！");
				$y=mysqli_fetch_object($y);
				$y->{"quantity"}=$item->{"quantity"};
				$shoppingCart[$i]=$y;
			};
			return $shoppingCart;
		};
	}
	$user["shoppingCart"] = getShoppingCart($connection);

	// Function to get delivery information.
	function getDeliveryInformation($connection){
		$x=mysqli_query($connection,"select * from deliveryInformation where username='{$_SESSION["username"]}'")or die("读取收货信息失败！");
		if(mysqli_num_rows($x)==0){
			return array();
		}else{
			for($i=0;$i<mysqli_num_rows($x);$i++){
				$y=mysqli_fetch_object($x);
				$deliveryInformation[$i]=$y;
			};
			return $deliveryInformation;		
		};
	}
	$user["deliveryInformation"] = getDeliveryInformation($connection);

	//获取默认收货信息。
	$x=mysqli_query($connection,"select * from deliveryInformation where username='{$_SESSION["username"]}' and status='default'")or die("读取默认收货信息失败！");
	if(mysqli_num_rows($x)==0){
		$user["defaultDeliveryInformation"]="";
	}else{
		$x=mysqli_fetch_object($x);
		$user["defaultDeliveryInformation"]=$x;
	};


	//发送$user。
	//$user
	//$user["username"]
	//$user["shoppingCart"]
	//$user["deliveryInformation"]
	//$user["defaultDeliveryInformation"]
	echo json_encode($user);
}else{
	echo false;
};
?>
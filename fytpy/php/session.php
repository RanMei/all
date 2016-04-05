<?php
require "connect.php";
session_start();
if( isset($_SESSION["username"]) ){
	$user["username"]=$_SESSION["username"];
	//获取购物车信息。
	$rows=mysql_query("select * from shoppingCart where username='{$_SESSION["username"]}'")or die("读取购物车信息失败！");
	if(mysql_num_rows($rows)==0){
		$user["shoppingCart"]="";
	}else{
		for($i=0;$i<mysql_num_rows($rows);$i++){
			$item=mysql_fetch_object($rows);
			$itemID=$item->{"itemID"};
			$y=mysql_query("select * from items where itemID='{$itemID}'")or die("读取购物车信息失败！");
			$y=mysql_fetch_object($y);
			$y->{"quantity"}=$item->{"quantity"};
			$shoppingCart[$i]=$y;
		};
		$user["shoppingCart"]=$shoppingCart;
	};
	//获取收货信息。
	$x=mysql_query("select * from deliveryInformation where username='{$_SESSION["username"]}'")or die("读取收货信息失败！");
	if(mysql_num_rows($x)==0){
		$user["deliveryInformation"]="";
	}else{
		for($i=0;$i<mysql_num_rows($x);$i++){
			$y=mysql_fetch_object($x);
			$deliveryInformation[$i]=$y;
		};
		$user["deliveryInformation"]=$deliveryInformation;		
	};
	//获取默认收货信息。
	$x=mysql_query("select * from deliveryInformation where username='{$_SESSION["username"]}' and status='default'")or die("读取默认收货信息失败！");
	if(mysql_num_rows($x)==0){
		$user["defaultDeliveryInformation"]="";
	}else{
		$x=mysql_fetch_object($x);
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
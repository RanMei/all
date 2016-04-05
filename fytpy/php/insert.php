<?php
require "connect.php";
session_start();
$x=json_decode($_POST["data"],true) or die("解析JSON失败！");

if( isset($_SESSION["username"]) ){
	
	if( isset($x["DI"]) ){
		$rows=mysql_query("select * from deliveryInformation where username='{$_SESSION["username"]}' and date='{$x["date"]}'");
		if(mysql_num_rows($rows)==0){
			mysql_query("insert into deliveryInformation(username,consignee,phoneNumber,deliveryAddress,date)values('{$x["username"]}','{$x["consignee"]}','{$x["phoneNumber"]}','{$x["deliveryAddress"]}','{$x["date"]}')");
		}else{
			mysql_query("update deliveryInformation set consignee='{$x["consignee"]}', phoneNumber='{$x["phoneNumber"]}', deliveryAddress='{$x["deliveryAddress"]}' where username='{$_SESSION["username"]}' and date='{$x["date"]}'");
		};
	};

	//将订单信息写入数据库。
	if( isset($x["new_order"]) ){
		mysql_query("insert into orders(orderID,username,consignee,phoneNumber,deliveryAddress,totalPrice,date)values('{$x["orderID"]}','{$x["username"]}','{$x["consignee"]}','{$x["phoneNumber"]}','{$x["deliveryAddress"]}','{$x["totalPrice"]}','{$x["date"]}')");
	};

	if( isset($x["to_cart"]) ){
		$rows=mysql_query("select * from shoppingCart where username='{$_SESSION["username"]}' and itemID='{$x["itemID"]}'");
		if(mysql_num_rows($rows)==0){
			mysql_query("insert into shoppingCart(username,itemID,quantity)values('{$_SESSION["username"]}','{$x["itemID"]}','{$x["quantity"]}')");
		};
		echo true;
	};

}else{
	echo false;
};
?>
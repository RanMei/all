<?php
//header("Content-type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:http://localhost:3000");

require "../connect.php";
session_start();

if( isset($_POST["data"]) ){
	$data = json_decode($_POST["data"],true);
};

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

function addToCart($connection,$data){
	$rows = mysqli_query($connection,"select * from shoppingCart where username='{$_SESSION["username"]}' and itemID='{$data["itemID"]}'")or die('Failed to select!');
	if(mysqli_num_rows($rows)==0){
		mysqli_query($connection,"insert into shoppingCart(username,itemID,quantity)values('{$_SESSION["username"]}','{$data["itemID"]}','{$data["quantity"]}')")or die('Failed to insert!');
	};
}

if( isset($_SESSION["username"])&&isset($data) ){
	if( $data["type"]==='ADD_TO_CART' ){
		addToCart($connection,$data);
		echo json_encode( getShoppingCart($connection) );
	};

	if( $data["type"]==='REMOVE_ITEM' ){
		mysqli_query($connection,"delete from shoppingCart where username='{$_SESSION["username"]}' and itemID='{$data["itemID"]}'");
		echo json_encode( getShoppingCart($connection) );
	};
}else{
	echo false;
};

?>
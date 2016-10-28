<?php
header("Content-type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:http://localhost:3000");

require "connect.php";

$req = json_decode( file_get_contents('php://input') );

$rows = mysqli_query($connection,"select * from items where id='{$req->{'id'}}'")or die("读取商品信息失败！");
$item = mysqli_fetch_object($rows);
//$item
//$item["itemID"]
//$item["name"]
//$item["description"]
//$item["specification"]
//$item["thumbnail"]
//$item["price"]
//$item["quantity"]
echo json_encode($item);
?>
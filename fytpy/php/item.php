<?php
require "connect.php";

$rows = mysqli_query($connection,"select * from items where itemID='{$_POST["itemID"]}'")or die("读取商品信息失败！");
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
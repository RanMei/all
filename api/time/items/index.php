<?php
header("Content-type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:http://localhost:3000");

require "../connect.php";

function insert_item($connection,$item){
	mysqli_query(
		$connection,
		"insert into items(id,name,desc_,specs,price,class_,sub_class)values( '{$item->{'id'}}', '{$item->{'name'}}', '{$item->{'desc_'}}', '{$item->{'specs'}}', '{$item->{'price'}}', '{$item->{'class_'}}', '{$item->{'sub_class'}}' )"
	);
}

function get_items($connection){
	$rows = mysqli_query($connection,"select * from items")or die("读取商品信息失败！");
	for($i=0;$i<mysqli_num_rows($rows);$i++){
		$items[ $i ] = mysqli_fetch_object($rows);
	}
	return $items;
}

if( $_SERVER['REQUEST_METHOD']==='GET' ){

	$items = get_items($connection);
	echo json_encode($items);

}else if( $_SERVER['REQUEST_METHOD']==='PUT' ){
	
	$item = json_decode( file_get_contents('php://input') );
	insert_item($connection,$item);
	echo '';
}
?>
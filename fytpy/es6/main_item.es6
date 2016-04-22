import {session} from './session';
import {common} from './common';
	
$(document).ready(function(){	
	$(".welcome").attr("href","../index.html");

	var $$item={};
	
	// Get itemID。
	// console.log(window.location.search);
	var itemID = (function(){
		return window.location.search.split("=")[1];
	})();
	

	function init(){
		//获取模板
		$.ajax({
			url:"../tpl/item.html",
			type:"post",
			async:false
		}).done(function(data){
			$("#main").html(data);
		});
		$.ajax({
			url:"../php/item.php",
			type:"post",
			async:false,
			data:{itemID:itemID},
			success:function(data){$$item=eval('('+data+')');}
		});
		/*
		item={
			itemID:"",
			name:"",
			description:"",
			specification:"",
			
		*/
		$(".item .name").html( $$item.name );
		$(".item .description").html( $$item.description );
		$(".item .price").html( Number($$item.price).toFixed(2) );
		$(".thumbnail img").attr("src","./"+itemID+"/0.jpg");
		$(".item_class").html( $$item.class_ );
		$(".sub_class").html( $$item.sub_class );
		for( var i=0;i<4;i++ ){
			$(".tabs img").eq(i).attr("src","./"+itemID+"/"+i+".jpg");
		};
		for( var i=0;i<3;i++ ){
			$(".imgs_detailed img").eq(i).attr("src","./"+itemID+"/d"+i+".jpg");
		};
		
		$(".tabs li").mouseenter(function(){
			var i=$(this).index(".tabs li");
			$(".thumbnail img").attr("src","./"+itemID+"/"+i+".jpg");
		});
	};		
	//
	function minusOne(){
		if( $$item.quantity>1 ){
			$$item.quantity--;
			$(".quantity").html( $$item.quantity );
		};
	};
	
	//
	function plusOne(){
		$$item.quantity++;
		$(".quantity").html( $$item.quantity );
	};
	
	//
	function buyNow(){
		$(".buy").html("订单生成中...");
		var order={
			items: [$$item],
			totalPrice: $$item.price*$$item.quantity
		};
		$.ajax({
			url:"../php/generate-order.php",
			type:"post",
			async:false,
			data:{order:JSON.stringify(order)},
			success:function(){location.href="../confirm_order.html";}
		});
	};
	
	//
	function toCart(){
		var itemToCart={
			itemID: $$item.itemID,
			quantity: $$item.quantity,
			to_cart:true
		};
		console.log(JSON.stringify(itemToCart));
		$.ajax({
			url:"../php/insert.php",
			type:"post",
			async:true,
			data:{data:JSON.stringify(itemToCart)},
			success:function(data){
				console.log(data);
				if(data==true){
					$(".toCart").html("已加入购物车");
				}else{
					$(".toCart").html("请先登录");
				};
			}
		});	
	};
	//
	init();
	$(".minus").on("click",minusOne);
	$(".plus").on("click",plusOne);
	$(".buy").on("click",buyNow);
	$(".toCart").on("click",toCart);

	$(".box .tab>li").click(function(){
		var n=$(this).index();
		$(".box .tab>li").css({"border":"none"});
		$(".box .tab>li").eq(n).css({"border-bottom":"4px solid lightgrey"});
		$(".box .content>li").hide();
		$(".box .content>li").eq(n).show();
	});
	

});
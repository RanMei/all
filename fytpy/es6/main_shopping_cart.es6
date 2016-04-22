/*
	API:
		.item
		.item .name
		.item .spec
		.item .price
		.item .check
		.item .delete

	generateOrder.php
*/

import {session} from './session';

$(document).ready(function(){
	//MODEL
	var user = session.getUser();
	var items = user.shoppingCart;
	//VIEW.
	var x = $(".item");
	//-------------------------------------------------------------------------
	//CONTROLLER.
	function init(){
		$(".item").remove();
		var n=items.length;
		for(var i=0;i<n;i++){
			$(".shopping-cart-header2").after(x.clone());
		};
		for(var i=0;i<n;i++){
			$(".item").eq(i).find(".thumbnail").html("<img src='items/"+items[i].itemID+"/0.jpg'> ");
			$(".item").eq(i).children(".name").html(items[i].name);
			$(".item").eq(i).children(".spec").html(items[i].spec);
			$(".item").eq(i).children(".price").html(items[i].price);
			$(".item").eq(i).find(".quantity").html(items[i].quantity);
			$(".item").eq(i).children(".subtotal").html(items[i].price*items[i].quantity);
		};
	};
	//sum.value();
	//sum.refresh();
	var sum=(function(){
		function value(){
			var sum=0;
			$(".item .check:checked").each(function(){
				var i=$(this).index(".item .check");
				sum=sum+items[i].price*items[i].quantity;
			});
			return sum;
		};		
		function refresh(){
			$(".totalPrice").html(value());
		};
		return {value:value,refresh:refresh};
	})();
	//summaryQuantity.value();
	//summaryQuantity.refresh();
	var summaryQuantity=(function(){
		function value(){
			return $(".item .check:checked").length;
		};
		function refresh(){
			$(".totalQuantity").html(value());
		};
		return {value:value,refresh:refresh};
	})();
	function plusOne(){
		var i=$(this).index(".item .plus");
		items[i].quantity++;
		$(".item").eq(i).find(".quantity").html(items[i].quantity);
		$(".item").eq(i).children(".subtotal").html(items[i].price*items[i].quantity);
		sum.refresh();		
	};
	function minusOne(){
		var i=$(this).index(".item .minus");
		if(items[i].quantity>1){
			items[i].quantity--;
			$(".item").eq(i).find(".quantity").html(items[i].quantity);
			$(".item").eq(i).children(".subtotal").html(items[i].price*items[i].quantity);
			sum.refresh();
		}else{};
	};
	function selectAll(){
		if($(this).is(":checked")){
			$(".item .check").prop("checked",true);
		}else{
			$(".item .check").prop("checked",false);
		};
		summaryQuantity.refresh();		
		sum.refresh();		
	};
	function deleteThisItem(){
		if(confirm("确定将这件商品从购物车中删除吗？")){
			var i=$(this).index(".delete");
			var data=JSON.stringify( {itemID:user.shoppingCart[i].itemID} );
			console.log(data);
			$.ajax({
				url:"php/remove.php",
				type:"post",
				async:false,
				data:{data:data}
			}).done(function(data){
				user=getUser();
				items=user.shoppingCart;
				console.log(items);
				showItems();
				summaryQuantity.refresh();		
				sum.refresh();
			}).fail(function(){
				alert("删除失败！");
			});
		};
	};
	function getItemsSelected(){
		var itemsSelected=[];
		$(".item .check:checked").each(function(){
			var i=$(this).index(".item .check");
			itemsSelected.push(items[i]);
		});
		return itemsSelected;
	};
	function generateOrder(){
		var order={
			items:getItemsSelected(),
			totalPrice:sum.value()
		};
		return JSON.stringify(order);
	};
	function checkout(){
		if($(".item .check:checked").length==0){
			alert("您还没有选择任何商品！");
		}else{
			$.post(
				"php/generate-order.php",
				{order:generateOrder()},
				function(){
					location.href="confirm_order.html";
				}
			);
		};
	};
	//---------------------------------------------------------------------
	init();
	$(document).on("click",".item .minus",minusOne);
	$(document).on("click",".item .plus",plusOne);
	$(".shopping-cart-header2 .check").on("click",selectAll);
	$(document).on("click",".item .check",function(){
		summaryQuantity.refresh();
		sum.refresh();
	});
	$(document).on(  "click",".delete",deleteThisItem  );
	$(document).on(  "click",".checkout",checkout  );

});
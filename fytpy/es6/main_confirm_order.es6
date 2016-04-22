/*
APIs needed for this module:
	confirmOrder.php
	submitOrder.php
*/
import {session} from './session';
	
$(document).ready(function(){
	
	//MODEL
	// Variables with $$-prefix are the model of this module.
	var $$user = session.getUser();
	var $$order;

	//CONTROLLERS
	function init(){
		//Get the order information from SESSION and assign it to the variable "$$order".
		//$$order={items:[],totalPrice:0};	
		$.ajax({
			url:"php/confirm-order.php",
			type:"post",
			async:false
		}).done(function(data){
			$$order = JSON.parse(data);
		});
		console.log( $$order );
		//	
		$(".summary .totalQuantity").html( $$order.items.length );
		$(".summary .totalPrice").html( "￥"+$$order.totalPrice );	
		renderItems();
		renderDI();
	};
	//
	function renderItems(){
		var x = $(".item");
		$(".item").remove();
		var n = $$order.items.length;
		for( var i=0;i<n;i++ ){
			$(".items-header").after(x.clone());
		};
		for( var i=0;i<n;i++ ){
			$(".item").eq(i).find(".thumbnail").html( "<img src='items/"+$$order.items[i].itemID+"/0.jpg'>" );
			$(".item").eq(i).find(".name").html( $$order.items[i].name );
			$(".item").eq(i).find(".spec").html( $$order.items[i].spec);
			$(".item").eq(i).find(".price").html( "￥"+$$order.items[i].price );
			$(".item").eq(i).find(".quantity").html( $$order.items[i].quantity );
			$(".item").eq(i).find(".subtotal").html( "￥"+$$order.items[i].price*$$order.items[i].quantity );
		};
	};
	function renderDI(){
		var DI = session.getUser().deliveryInformation;
		console.log(DI);
		var x = $(".di").eq(0).removeClass("selected");
		$(".di").each(function(){
			$(this).remove();
		});
		for( var i=0;i<DI.length;i++ ){
			$(".deliveryInformation").append( x.clone() );
		};
		for( var i=0;i<DI.length;i++ ){
			$(".di").eq(i).find(".consignee").html(DI[i].consignee);
			$(".di").eq(i).find(".phoneNumber").html(DI[i].phoneNumber);
			$(".di").eq(i).find(".deliveryAddress").html(DI[i].deliveryAddress);
		};
		$(".di").each(function(){
			if( !$(this).hasClass("selected") ){
				$(this).on("mouseenter",function(){
					$(this).addClass("hover");
				});
				$(this).on("mouseleave",function(){
					$(this).removeClass("hover");
				});
			}; 
			$(this).on("click",function(){
				var i = $(this).index(".di");
				$$order.consignee=DI[i].consignee;
				$$order.phoneNumber=DI[i].phoneNumber;
				$$order.deliveryAddress=DI[i].deliveryAddress;
				$(this).siblings().removeClass("selected");
				$(this).addClass("selected");

			});
		});
		$(".edit").on("click",edit);
		$(".remove").on("click",removeDI);
	}
	//-------------------------------------------------------------------------------
	function getConsignee(){
		var consignee = $("input[name='consignee']").val();
		if(!consignee){
			$(this).addClass("error");
		}else{
			$(this).removeClass("error");
			return consignee;
		};
	};
	function getPhone(){
		var phone=$("input[name='phoneNumber']").val();
		if( /^1[3|4|5|8]\d{9}$/.test(phone) ){
			$(this).removeClass("error");
			return phone;
		}else{
			$(this).addClass("error");
		};
	};
	function getDA(){
		var deliveryAddress=$("textarea").val();
		if(!deliveryAddress){
			$(this).addClass("error");
		}else{
			$(this).removeClass("error");
			return deliveryAddress;
		};	
	};
	
	function edit(e){
		e.stopPropagation();
		var user = session.getUser();
		$(".bg").height( $(document).height() );
		$(".veil").show();
		var i = $(this).index(".edit");
		var DI = user.deliveryInformation[i];
		var newDI = user.deliveryInformation[i];
		$("input[name='consignee']").val(DI.consignee);
		$("input[name='phoneNumber']").val(DI.phoneNumber);
		$("textarea").val(DI.deliveryAddress);
		$(".date").html(DI.date);
	};
	
	function removeDI(e){
		e.stopPropagation();
		if( confirm("确定删除该条收货信息吗？") ){
			var i=$(this).index(".remove");
			var data=JSON.stringify( session.getUser().deliveryInformation[i] );
			console.log(data);
			$.ajax({
				url:"php/remove.php",
				type:"post",
				async:false,
				data:{data:data},
				success:function(data){
					console.log("hi");
					renderDI();
				}
			});
		};
	}
	function save(){
		var DI={};
		DI.username = $$user.username;
		DI.consignee = getConsignee();
		DI.phoneNumber = getPhone();
		DI.deliveryAddress = getDA();
		DI.date = $(".date").html()? $(".date").html():new Date();
		DI.DI = true;
		if(
			DI.consignee&&
			/^1[3|4|5|8]\d{9}$/.test( DI.phoneNumber )&&
			DI.deliveryAddress
			){
			$.ajax({
				url:"php/insert.php",
				type:"post",
				async:false,
				data:{data:JSON.stringify(DI)},
				success:function(){
					alert("成功保存收货信息！");
					$(".veil").hide();
					renderDI();
				}
			});
		};
	};	
	//Complete and submit the order.
	function submitOrder(){
		user = session.getUser();
		//Generate order.orderID and order.date.
		var x=new Date();
		function modify(x){
			if(x<10){return "0"+x;}else{return x};
		};
		var year=x.getFullYear();
		var month=modify( x.getMonth()+1 );
		var date=modify( x.getDate() );
		var hours=modify( x.getHours() );
		var minutes=modify( x.getMinutes() );
		var seconds=modify( x.getSeconds() );
		$$order.orderID = user.username.substr(0,3)+year+month+date+hours+minutes+seconds;
		$$order.date = year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+seconds;
		//
		$$order.username = user.username;
		$$order.new_order = true;
		console.log(  JSON.stringify($$order)  );
		if( !$$order.consignee ){
			alert("请补充收货信息！");
		}else{
			//Submit the order.
			$.ajax({
				url:"php/insert.php",
				type:"post",
				async:false,
				data:{data:JSON.stringify($$order)},
				success:function(data){alert("订单提交成功！");}
			});
		};
	};
	//-----------------------------------------------------------------------------------------------------------------------------------------------
	init();
	(function(){
		$(window).on("resize",function(){
			$(".bg").height( $(document).height() );
		});
		$(".add").on("click",function(){
			$(".bg").height( $(document).height() );
			$("input").each(function(){
				$(this).val("");
			});
			$("textarea").val("");
			$(".date").html("");
			$(".veil").show();
		});
		$(".close").on("click",function(){
			$(".veil").hide();
		});
	})();
	$("input[name='consignee']").on("blur",getConsignee);
	$("input[name='phoneNumber']").on("blur",getPhone);
	$("textarea").on("blur",getDA);	
	$(".save").on("click",save);
	$(".submit").on("click",submitOrder);
	
});
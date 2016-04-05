/*
API needed by this module:
	<li class="login"></li>
	<li class="register"></li>
	<span class="quantityIn">0</span>
	session.php
	logout.php

API provided by this module:
	session.getUser()

user={
	username:"",
	deliveryInformation:[],
	shoppingCart:[],
	orders:[]
}
*/

define( ["jquery"],function($){
	
	console.log(location.hostname);
	function insertHeaderFooter(){
		$.ajax({
			url:"./tpl/header.html",
			type:"post",
			async:false
		}).then(
			function(data){
				$(document).ready(function(){
					$("#header").prepend(data);
				});
			},
			function(){
				console.error("failed to get header.html")
			}
		);
		$.ajax({
			url:"./tpl/footer.html",
			type:"post",
			async:false,
			success:function(data){
				$(document).ready(function(){
					$("#footer").prepend(data);
				});
			}
		});
	};
	//-------------------------------------------------------------------------------------------------------------------
	function getUser(){
		var user;
		$.ajax({
			url:"http://localhost/fytpy/php/session.php",
			type:"post",
			async:false
		}).done(
			function(data){
				if(data==false){
				}else{
					console.log( data );
					user=eval('('+data+')');
					$(document).ready(function(){
						$(".login").html("<li class='welcome'><a href='http://localhost/fytpy/member.html'>"+user.username+"</a></li>");
						$(".register").replaceWith("<li class='logout'>注销</li>");
						$(".quantityIn").html(""+user.shoppingCart.length+"");
					});
				};
			}		
		);
		return user;
	};
	//-------------------------------------------------------------------------------------------------------------------
	function logout(){
		$.ajax({
			url:"http://localhost/fytpy/php/logout.php",
			type:"post"
		}).done(
			function(){alert("注销成功！");location.href=""}
		);
	};
	//-------------------------------------------------------------------------------------------------------------------
	insertHeaderFooter();
	getUser();
	
	$(document).ready(function(){
		$("body").on("click",".logout",logout);
	});
	//-------------------------------------------------------------------------------------------------------------------
	return {getUser:getUser};
	
});
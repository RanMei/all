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

var $$root = 'http://' + location.hostname + '/fytpy/';

console.log('$$root',$$root);

function insertHeaderFooter(){
	// $.ajax({
	// 	url: $$root + "tpl/header.html",
	// 	type:"post"
	// }).done(
	// 	function(data){
	// 		$(document).ready(function(){
	// 			$("#header").prepend(data);
	// 			$(".a-search").attr( "href",$$root+"search.html" );
	// 			$(".a_home").attr( "href",$$root );
	// 			$(".a-cart").attr( "href",$$root+"shopping_cart.html" );
	// 			$(".a_my_orders").attr( "href",$$root+"orders.html" );
	// 			console.log($(".a_my_orders").attr("href"));
	// 		});
	// 		console.log('Header inserted.');
	// 	}
	// ).done(getUser);
	$.ajax({
		url: $$root + "tpl/footer.html",
		type:"post"
	}).done(
		function(data){
			$(document).ready(function(){
				$("#footer").prepend(data);
				console.log('Footer inserted.')
			});
		}
	);
};
// @return {object} 
function getUser(){
	var user;
	$.ajax({
		url: $$root + "php/session.php",
		type:"post",
		async:false
	}).done(
		function(data){
			if(data==false){
			}else{
				//console.log(data,typeof data);
				user = JSON.parse(data);
				$(document).ready(function(){
					$(".login").html("<li class='welcome'><a href='./member.html'>"+user.username+"</a></li>");
					$(".register").replaceWith("<li class='logout'>注销</li>");
					$(".quantityIn").html(""+user.shoppingCart.length+"");
				});
				document.cookie = "userID:"+user.username;
				console.log('User got.',user);
				console.log(document.cookie);
			};
		}		
	);
	return user;
};

// Get and insert header and footer into the page.
insertHeaderFooter();


//
function logout(){
	$.ajax({
		url: $$root + "php/logout.php",
		type:"post"
	}).done(
		function(){
			alert("注销成功！");
			location.href=""
		}
	);
};

$(document).ready(function(){
	$("body").on("click",".logout",logout);
});

var session = {
	root: $$root,
	getUser: getUser
}

export {session};
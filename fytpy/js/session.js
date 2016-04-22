define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
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

	console.log('---root_directory', $$root);

	function insertHeaderFooter() {
		$.ajax({
			url: $$root + "tpl/header.html",
			type: "post"
		}).done(function (data) {
			$(document).ready(function () {
				$("#header").prepend(data);
				$(".a-search").attr("href", $$root + "search.html");
				$(".a_home").attr("href", $$root + "index.html");
				$(".a-cart").attr("href", $$root + "shopping_cart.html");
				$(".a_my_orders").attr("href", $$root + "orders.html");
				console.log($(".a_my_orders").attr("href"));
			});
		}).done(getUser);
		$.ajax({
			url: $$root + "tpl/footer.html",
			type: "post"
		}).done(function (data) {
			$(document).ready(function () {
				$("#footer").prepend(data);
			});
		});
	};
	// @return {object}
	function getUser() {
		var user;
		$.ajax({
			url: $$root + "php/session.php",
			type: "post",
			async: false
		}).done(function (data) {
			if (data == false) {} else {
				console.log(data);
				user = eval('(' + data + ')');
				$(document).ready(function () {
					$(".login").html("<li class='welcome'><a href='./member.html'>" + user.username + "</a></li>");
					$(".register").replaceWith("<li class='logout'>注销</li>");
					$(".quantityIn").html("" + user.shoppingCart.length + "");
				});
				document.cookie = "userID:" + user.username;
				console.log(document.cookie);
			};
		});
		return user;
	};

	// Get and insert header and footer into the page.
	insertHeaderFooter();

	//
	function logout() {
		$.ajax({
			url: $$root + "php/logout.php",
			type: "post"
		}).done(function () {
			alert("注销成功！");
			location.href = "";
		});
	};

	$(document).ready(function () {
		$("body").on("click", ".logout", logout);
	});

	var session = {
		root: $$root,
		getUser: getUser
	};

	exports.session = session;
});
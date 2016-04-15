define(["exports"], function (exports) {
	"use strict";

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

	console.log(location.hostname);
	function insertHeaderFooter() {
		$.ajax({
			url: "../tpl/header.html",
			type: "post",
			async: false
		}).done(function (data) {
			$(document).ready(function () {
				$("#header").prepend(data);
			});
		});
		$.ajax({
			url: "../tpl/footer.html",
			type: "post",
			async: false,
			success: function success(data) {
				$(document).ready(function () {
					$("#footer").prepend(data);
				});
			}
		});
	};
	// @return {object}
	function getUser() {
		var user;
		$.ajax({
			url: "../php/session.php",
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
			};
		});
		return user;
	};

	// Get and insert header and footer into the page.
	insertHeaderFooter();
	getUser();

	//
	function logout() {
		$.ajax({
			url: "../php/logout.php",
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
		getUser: getUser
	};

	exports.session = session;
});
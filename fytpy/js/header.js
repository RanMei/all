define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var target = document.querySelector('header');
	var template = '\n\t<!-- searchbar -->\n\t<div class="searchbar wrapper">\n\t\t<div class="container">\n\t\t\t<div class="search_box">\n\t\t\t\t<form>\n\t\t\t\t\t<input type="text" placeholder="请输入您想搜索的商品名称">\n\t\t\t\t\t<a href="search.html" class="a-search search_btn"><i class="fa fa-search"></i></a>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="line wrapper"></div>\n\t<!-- topbar -->\n\t<div class="topbar wrapper">\n\t\t<div class="container">\n\t\t\t<p><a class="a_home" href="./">欢迎来到飞越太平洋海淘网站</a></p>\n\t\t\t<ul>\n\t\t\t\t<li><a href="register.html" class="a-signin login">登录</a></li><span class="separator">|</span>\n\t\t\t\t<li><a href="register.html" class="a-signup register">注册</a></li><span class="separator">|</span>\n\t\t\t\t<li><i class="fa fa-file"></i> <a class="a_my_orders" href="./orders.html">我的订单</a></li><span class="separator">|</span>\n\t\t\t\t<li class="my_cart">\n\t\t\t\t\t<i class="fa fa-shopping-cart"></i> <a class="a-cart" href="./shopping_cart.html">我的购物车(<span class="quantityIn">0</span>)</a>\n\t\t\t\t\t<div class="cart_panel">\n\t\t\t\t\t\t我的购物车\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class="clear"></div>\n\t\t</div>\n\t\t<!--\n\t\t<div class="banner container">\n\t\t\t<ul>\n\t\t\t\t<a href="" style="background:url(images/165404.24885127.jpg)">\n\t\t\t\t\t<div class="label">新品</div>\n\t\t\t\t\t<div>星球大战入耳式耳机</div>\n\t\t\t\t</a>\n\t\t\t</ul>\n\t\t</div>\n\t\t-->\n\t</div>\n';
	var header = document.createElement('div');
	header.setAttribute('id', 'header');
	header.innerHTML = template;

	target.parentNode.replaceChild(header, target);

	exports.default = {};
});
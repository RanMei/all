var target = document.querySelector('header');
var template = `
	<!-- searchbar -->
	<div class="searchbar wrapper">
		<div class="container">
			<div class="search_box">
				<form>
					<input type="text" placeholder="请输入您想搜索的商品名称">
					<a href="search.html" class="a-search search_btn"><i class="fa fa-search"></i></a>
				</form>
			</div>
		</div>
	</div>
	<div class="line wrapper"></div>
	<!-- topbar -->
	<div class="topbar wrapper">
		<div class="container">
			<p><a class="a_home" href="./">欢迎来到飞越太平洋海淘网站</a></p>
			<ul>
				<li><a href="register.html" class="a-signin login">登录</a></li><span class="separator">|</span>
				<li><a href="register.html" class="a-signup register">注册</a></li><span class="separator">|</span>
				<li><i class="fa fa-file"></i> <a class="a_my_orders" href="./orders.html">我的订单</a></li><span class="separator">|</span>
				<li class="my_cart">
					<i class="fa fa-shopping-cart"></i> <a class="a-cart" href="./shopping_cart.html">我的购物车(<span class="quantityIn">0</span>)</a>
					<div class="cart_panel">
						我的购物车
					</div>
				</li>
			</ul>
			<div class="clear"></div>
		</div>
		<!--
		<div class="banner container">
			<ul>
				<a href="" style="background:url(images/165404.24885127.jpg)">
					<div class="label">新品</div>
					<div>星球大战入耳式耳机</div>
				</a>
			</ul>
		</div>
		-->
	</div>
`;
var header = document.createElement('div');
header.setAttribute('id','header');
header.innerHTML = template;

target.parentNode.replaceChild(header,target);

export default {};
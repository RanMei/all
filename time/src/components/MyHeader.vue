<template>
<div class="MY-HEADER">
	<!-- searchbar -->
	<div class="searchbar wrapper">
		<div class="container">
			<div class="search_box">
				<form>
					<input type="text" placeholder="请输入您想搜索的商品名称">
					<a :href=" dir.search " class="a-search search_btn"><i class="fa fa-search"></i></a>
				</form>
			</div>
		</div>
	</div>
	<div class="LINE wrapper"></div>
	<!-- topbar -->
	<div class="topbar wrapper">
		<div class="container">
			<p><a class="a_home" :href="dir.index">欢迎来到飞越太平洋海淘网站</a></p>
			<ul>
				<li><a :href=" dir.signin " class="a-signin login">登录</a></li><span class="separator">|</span>
				<li><a :href=" dir.signin " class="a-signup register">注册</a></li><span class="separator">|</span>
				<li><i class="fa fa-file"></i> <a class="a_my_orders" href="./orders.html">我的订单</a></li><span class="separator">|</span>
				<li class="my_cart">
					<i class="fa fa-shopping-cart"></i> <a class="a-cart" :href=" dir.cart ">我的购物车(<span class="quantityIn">{{quantity_in_cart||0}}</span>)</a>
					<div class="cart_panel">
						我的购物车
					</div>
				</li>
			</ul>
			<div class="clear"></div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: ['dir'],
	computed: {
		quantity_in_cart: function(){
			return this.$store.state.cart.items.length;
		}		
	}
}
</script>

<style lang="less" scoped>
/* searchbar */
.searchbar {
	height:120px;
	background:linear-gradient(white,#E5E5E5);
	overflow:hidden;
	.search_box {
		width:600px;
		height:40px;
		margin:40px auto 0 auto;
		border-radius:20px;
		border:1px solid lightgrey;
		background:white;
		box-shadow:inset 0 2px 5px lightgrey;
		input {
			float:left;
			width:400px;
			height:20px;
			font-size:17px;
			line-height:20px;
			margin:10px 0 0 40px;
			color:grey;
			border:none;
		}
		.search_btn {
			float:right;
			width:50px;
			height:32px;
			margin:4px 20px 0 0;
			border-radius:16px;
			font-size:20px;
			line-height:32px;
			text-align:center;
			color:#B2B2B2;
		}
		.search_btn:visited {color:#B2B2B2;}
		.search_btn:hover {background:#ECE9D8;}
	}
}
/**/

.shade {
	width:100%;
	min-width:1000px;
	box-shadow:0 0 40px 35px grey;
}
/**/
.topbar {
	position:relative;
	background:#2378BA;
	.container {
		padding:20px 0 20px 0;
		background:#2378BA;
		color:white;
		font-size:15px;
		a:link {color:white;}
		a:visited {color:white;}
		>p {
			float:left;
			margin:0 0 0 20px;
		}
		>ul {
			float:right;
			margin:0 20px 0 0;
			>li {
				float:left;
				cursor:pointer;
			}
			.separator {float:left;margin:0 10px 0 10px;}
		}
	}
	.quantityIn {color:#D2291E;}
	.my_cart {position:relative;}
	.my_cart:hover .cart_panel {display:block;}
	.cart_panel {
		position:absolute;
		right:0;
		top:30px;
		width:100px;
		padding:15px;color:black;background:white;border-radius:4px;display:none;z-index:99
	}
}
</style>
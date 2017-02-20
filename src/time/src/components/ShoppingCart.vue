<style lang="less" scoped>
	@import (reference) '../vars.less';
	.ShoppingCart {
		background: #127BAB;
		overflow: hidden;
		.container {margin:40px auto 100px auto;color:grey;font-size:80%;}

		.shopping-cart-header1 {width:100%;padding:10px 0 10px 0px;text-indent:20px;background:#127BAB;color:white;font-size:18px;}
		.shopping-cart-header2 {width:100%;padding:10px 0 10px 0;overflow:hidden;border-bottom:1px solid lightgrey;background:white;}

		.empty {
			padding: 20px 0;
			border-bottom: 1px solid lightgrey;
			background: white;
			font-size: 20px;
			text-align: center;

		}

		.item {
			width: 1000px;
			padding: 20px 0 20px 0;
			background: white;
			border-bottom: 1px solid lightgrey;
			overflow: hidden;
		}
		.check {float:left;margin:0 10px 0 10px;}
		.thumbnail {float:left;width:80px;margin:0 10px 0 0;}
		.thumbnail img {width:80px;}
		.name {float:left;width:200px;margin:0 10px 0 0;}
		.spec {float:left;width:200px;margin:0 10px 0 0;height:100%;}
		.price {float:left;width:100px;margin:0 10px 0 0;}
		.counter {float:left;width:120px;margin:0 10px 0 0;}
		.counter .minus {float:left;width:28px;height:28px;border:1px solid lightgrey;text-align:center;line-height:28px;cursor:pointer;background:#F4F4F4;color:black;font-weight:bold;}
		.counter .quantity {float:left;width:50px;height:28px;border-top:1px solid lightgrey;border-bottom:1px solid lightgrey;text-align:center;line-height:28px;}
		.counter .plus {float:left;width:28px;height:28px;border:1px solid lightgrey;text-align:center;line-height:28px;cursor:pointer;background:#F4F4F4;color:black;font-weight:bold;}
		.subtotal {float:left;width:100px;margin:0 10px 0 0;}
		.manipulation {float:left;width:100px;}
		.delete {cursor:pointer;}
		.delete:hover {color:#C81623;}
		.concern {cursor:pointer;}
		.concern:hover {color:#C81623;}

		.summary {float:right;padding:10px 0 20px 0;}
		.summary>li {float:left;height:40px;margin:0 0 0 20px;}
		.summary>li:nth-child(1) {height:48px;line-height:48px;margin-top:10px;font-size:16px;}
		.summary>li:nth-child(2) {height:48px;line-height:48px;margin-top:10px;font-size:16px;}
		.totalQuantity {color:@pink-text;}
		.summary .note {color:@pink-text;}
		.totalPrice {color:@pink-text;}
		.summary .checkout {
			width:164px;
			height:48px;
			margin:10px 15px 0 15px;
			background:@pink;
			color:white;
			line-height:48px;
			text-align:center;
			font-size:18px;
			cursor:pointer;
			border-radius:3px;
		}
		.summary .checkout:hover {
			background:@pink-active;
		}
	}	
</style>

<template>
	<div class="ShoppingCart wrapper">
		<div class="container">
			<div class="shopping-cart-header1">我的购物车</div>
			<div class="shopping-cart-header2">
				<input class="check" type="checkbox">
				<div class="thumbnail">全选</div>
				<p class="name">商品</p>
				<p class="spec">规格</p>
				<p class="price">单价(元)</p>
				<div class="counter">数量</div>
				<div class="subtotal">小计(元)</div>
				<p class="manipulation">操作</p>
			</div>
			<div class="empty" v-show="cart.items.length===0">
				您的购物车是空的
			</div>
			<div class="item" v-for="(a,i) in cart.items">
				<input class="check" type="checkbox">
				<div class="thumbnail"><img src=""></div>
				<p class="name">{{a.name}}</p>
				<p class="spec">--</p>
				<p class="price">{{a.price.toFixed(2)}}</p>
				<div class="counter">
					<div class="minus"
					@click="MINUS(i)">-</div>
					<div class="quantity">{{a.quantity}}</div>
					<div class="plus"
					@click="PLUS(i)">+</div>
				</div>
				<div class="subtotal">--</div>
				<p class="manipulation">
					<span class="delete"
					@click="REMOVE(i)">删除</span><br/>
					<span class="concern">移到我的关注</span>
				</p>
			</div>
			<div style="overflow:hidden;background:white;">
				<ul class="summary">
					<li>已选择<span class="totalQuantity">0</span>件商品</li>
					<li>总价（不含运费）：<span class="note">￥</span><span class="totalPrice">0</span></li>
					<li class="checkout">去结算</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			cart: {
				default: function(){
					return {
						items: []
					}
				}
			}
		},
		methods: {
			REMOVE(i){
				this.$store.commit('CART_REMOVE',i);
			},
			PLUS(i){
				this.$store.commit('CART_PLUS',i);
			},
			MINUS(i){
				this.$store.commit('CART_MINUS',i);
			}
		}
	}
</script>
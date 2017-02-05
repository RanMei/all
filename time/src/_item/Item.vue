<template>
	<div class="Item">
		<div class="item container">
			<div class="header">
				<p>
					<a href="../">主页</a> > <a href="" class="item_class">--</a> > <a href="" class="sub_class">--</a>
				</p>
			</div>
			<div class="images">
				<div class="thumbnail">
					<img src="">
				</div>
				<ul class="tabs">
					<li><img src=""></li>
					<li><img src=""></li>
					<li><img src=""></li>
					<li><img src=""></li>
				</ul>
			</div>		
			<div class="information">
				<p class="name">{{item.name}}</p>
				<p class="description">{{item.description}}</p>
				<p class="priceWrapper"><b>￥<span class="price">{{Number(item.price).toFixed(2)}}</span></b></p>
				<div class="shuliang">
					<p>数量：</p>
					<div class="counter">
						<div class="minus" @click="minus">-</div>
						<div class="quantity">{{quantity}}</div>
						<div class="plus" @click="plus">+</div>
					</div>
				</div>
				<div class="buy">立即购买</div>
				<div class="toCart">放入购物车</div>
				
			</div>
		</div>
		
		<tabbed-box></tabbed-box>
	</div>
</template>

<style lang="less" scoped>
@import (reference) '../vars.less';
.Item {
	background: #127BAB;
	overflow: hidden;

	.itemID {display:none;}

	.item {
		padding:0 0 30px 0;
		margin-top:30px;
		background:white;
		overflow:hidden;
		.header {
			margin:15px 20px 10px 20px;
			padding-bottom:10px;
			border-bottom:1px solid @grey-border;
			a:link {color:black;}
			a:visited {color:black;}
		}
		.images {
			float:left;
			margin:0 0 0 20px;
			.thumbnail {
				width:464px;
				height:464px;
				padding:2px;
				border:1px solid @grey-border;
				img {width:100%;}
			}
			.tabs {
				width:256px;
				margin:auto;
				li {
					float:left;
					width:54px;
					height:54px;
					margin:4px 2px 4px 2px;
					padding:2px;
					border:1px solid @grey-border;
					img {width:100%;}
				}
				li:hover {background:@pink;}
			}
		}
	}

	.information {
		float:left;
		width:470px;
		margin:0 0 0 20px;
		overflow:hidden;
		.name {padding:15px 0 15px 0;font-size:200%}
		.priceWrapper {
			padding:10px 0 10px 0;
			border-bottom:1px solid lightgrey;
			color:@pink;
			font-size:40px;
			font-family:helvetica;
			.price {
				font-size:50px;
				color:#DF4949;
			}
		}
		.buy {
			float:left;
			width:187px;
			height:45px;
			margin:0 20px 0 0;
			line-height:45px;
			text-align:center;
			background:@pink;
			cursor:pointer;
			color:white;
			border-radius:5px;
		}
		.buy:hover {
			background: @pink-active;
		}
		.toCart {
			float:left;
			width:183px;
			height:41px;
			line-height:41px;
			text-align:center;
			background:white;
			border:2px solid @pink;
			color:@pink;
			cursor:pointer;
			border-radius:5px;
		}
		.toCart:hover {
			color: @pink-active;
			border: 2px solid @pink-active;
		}
	}
	
	.shuliang {
		padding:30px 0 30px 0;
		p {float:left;height:30px;vertical-align:top;line-height:30px;}
		.counter {
			overflow:hidden;
			.minus,.plus {float:left;width:28px;height:28px;border:1px solid lightgrey;line-height:28px;text-align:center;background:#F4F4F4;cursor:pointer;}
			.quantity {float:left;width:49px;height:28px;border-top:1px solid lightgrey;border-bottom:1px solid lightgrey;line-height:28px;text-align:center;}
			.minus:hover,.plus:hover {border:1px solid @pink;color:@pink;}
		}
	}	

}
</style>

<script type="text/javascript">
	export default {
		components: {
			TabbedBox: require('./TabbedBox.vue')
		},
		data: function(){
			return {
				id: '',
				query: '',
				current: 0,
				quantity: 1
			};
		},
		mounted: function(){
			//this.get_id();
			this.get_query();
			this.$store.dispatch( 'fetchItem',this.get_id() );
		},
		computed: {
			item: function(){
				return this.$store.state.item;
			}
		},
		methods: {
			get_id: function(){
				var id = location.href.match(/id=.+/)[0].split(/&/)[0].replace(/id=/,'');
				return id;
			},
			get_query: function(){
				this.query = location.href.match(/\?.+/)[0];
			},
			get_item: function(){
				var self = this;
			},
			plus: function(){
				this.quantity++;
			},
			minus: function(){
				if(this.quantity>1){
					this.quantity--;
				}
			},
			pick: function(n){
				this.current = n;
			}
		}
	}
</script>
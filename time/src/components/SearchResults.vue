<template>
	<div id="SEARCH">
		<div class="container">
			<div class="center">
				<div class="all">
					<p><a href="">全部商品</a> > 共900件商品</p>
				</div>
				<div class="Row">
					<p class="title">类别</p>
					<a href="">玩具模型</a>
					<a href="">服饰箱包</a>
					<a href="">数码周边</a>
					<a href="">居家生活</a>
				</div>
				<div class="Row">
					<p class="title">品牌</p>
					<a href="">Hot Toys</a>
					<a href="">孩之宝</a>
					<a href="">野兽国</a>
				</div>
				<div class="Row">
					<p class="title">价格</p>
					<a href="">0-49</a>
					<a href="">50-99</a>
					<a href="">100-199</a>
				</div>
			</div>
		</div>

		<showcase :items="$store.state.items"></showcase>
	</div>
</template>

<style lang="less" scoped>
	#SEARCH {
		height:1000px;
		background:#127BAB;
		overflow:hidden;
		.center {
			width:970px;
			background:white;
			padding:0 15px 0 15px;
			margin-top:80px;
			.all {
				padding:20px 0 10px 0;
				border-bottom:1px solid lightgrey;
				color:grey;
				a:link {color:black;}
				a:visited {color:black;}
			}
			.Row {
				padding:10px 0 10px 0;
				border-bottom:1px solid lightgrey;
				.title {float:left;margin-right:15px;color:grey;font-size:15px;}
				a:link {color:black;margin-right:15px;}
				a:visited {color:black;}
				a:hover {color:maroon;}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			Showcase: require('./Showcase.vue')
		}
	}
</script>
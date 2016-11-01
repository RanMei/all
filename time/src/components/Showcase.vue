<template>
	<div class="Showcase">
		<a class="item__"
		v-for="a in items"
		:href=" DIR.root+'/item.html?id='+a.id ">
			<img class="thumb"/>
			<p class="price">￥{{a.price}}</p>
			<p class="name">{{a.name}}</p>
		</a>
	</div>
</template>

<style lang="less" scoped>
	.Showcase {
		@red: #c40000;
		width: 1000px;
		margin: auto;
		padding: 10px 0;
		background: white;
		overflow: hidden;
		.item__ {
			display: block;
			box-sizing: border-box;
			float: left;
			width: 240px;
			margin: 5px; 
			padding: 5px;
			border: 3px solid transparent;
			transition: 0.2s;
			&:link {
				color: black;
			}
			&:visited {
				color: black;
			}
			&:hover {
				border: 3px solid @red;
			}
			.thumb {
				width: 224px; height: 224px; 
			}
			.price {
				font-size: 20px;
				color: @red;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: ['items'],
		computed: {
			DIR: function(){
				return this.$root.$data.DIR;
			}
		}
	}
</script>
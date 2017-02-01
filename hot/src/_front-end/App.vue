<template>
	<div id="root">
		<header>QQ阅读前端动画效果库</header>
		<a class="block" v-for="a in items" :href=" a.href ">
			<p>
				{{a.title}} <span class="keywords">{{a.keywords}}</span>
			</p>
			<p class="desc">
				{{a.desc}}
			</p>
		</a>
	</div>
</template>

<style lang="less" scoped>
	@blue: #0F88EB;
	@pink: #F23051;

	@grey-text: #999;
	@grey-border: #dddddd;
	#root {
		a {text-decoration: none;}


		header {
			padding: 10px 0;
			border-bottom: 1px solid @blue;
			font-size: 20px;
			color: @blue;
			text-align: center;
		}

		.block {
			display: block;
			box-sizing: border-box;
			position: relative;
			width: 100%;
			padding: 10px 15px;
			font-size: 20px;
			color: @blue;
			border-bottom: 1px solid @grey-border;
			.keywords {
				color: @pink;
				font-size: 14px;
			}
			.desc {
				font-size: 14px;
				color: @grey-text;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				items: require('./items.js').default
			}
		}
	}
</script>
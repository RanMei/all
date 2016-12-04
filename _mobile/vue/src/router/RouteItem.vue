<style lang="less" scoped>
.RouteItem {
	position: relative;
	width: 100%; height: 100vh;
	overflow: hidden;
	//background: black;
	.TOPBAR {
		box-sizing: border-box;
		//position: fixed; left: 0; top: 0;
		position: relative;
		width: 100%;
		padding: 10px 10px;
		border-bottom: 1px solid lightgrey;
		font-size: 18px;
		background: white;
		opacity: 0.8;
	}
}
</style>

<template>
	<div class="RouteItem">
		<div class="TOPBAR">
			<span @click="back">返回</span>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods: {
			back: function(){
				history.go(-1);
			}
		}
	}
</script>
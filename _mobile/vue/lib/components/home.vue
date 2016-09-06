<template>
<div class="home">
	前端是如何做动画的
</div>
</template>

<style lang="less" scoped>
.home {
	width: 100%; height: 100%;
	font-size: 0.5rem; text-align: center;

}
</style>

<script>
var home = {
	data: function(){
		return {
			color: 'red',
			items: [0,1,2]
		}
	},
	ready: function(){
	},
	methods: {
		change: function(){
			this.color = 'orange';
		}
	}
}
module.exports = home;
</script>
<template>
<div class="box" style="background:{{color}}" v-on:click="change">
	<div class="item" v-for="item in items">{{item}}</div>
</div>
</template>

<style lang="less" scoped>
.box {
	width: 4rem; height: 2rem;
	overflow: hidden;
	.item {
		float: left;
	}
}
</style>

<script>
var box = {
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
module.exports = box;
</script>
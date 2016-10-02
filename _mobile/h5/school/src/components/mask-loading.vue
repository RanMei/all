<template>
<div class="mask-loading" v-show="show">
	加载中...
</div>
</template>

<style lang="less" scoped>
.mask-loading {
	position: fixed; left: 0; top: 0;
	width: 100%; height: 100%;
	background: white;
	z-index: 9999;
	overflow: hidden;
	font-size: 20px;
	text-align: center;
	color: grey;
}
</style>

<script>
module.exports = {
	data: function(){
		return {
			show: true
		}
	},
	created: function(){
		var body = document.querySelector('body');
		body.style.overflow = 'hidden';
		window.addEventListener('load',()=>{
			this.show = false;
			body.style.overflow = 'visible';
		})
	}
}
</script>
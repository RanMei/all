<style lang="less" scoped>
	@import (reference) '../vars.less';
	.Slider {
		border-bottom: 1px solid @grey-border;
		overflow: hidden;
		a {
			display: block;
			float: left;
			padding: 10px;
			font-size: 14px;

		}
	}
</style>

<template>
	<div class="Slider">
		<a href="#/home">Home</a>
		<a href="#/projects">Projects</a>
		<a href="#/animations">Animation</a>
		<a href="#/blog">Blog</a>
		<a href="./farm/index.html">Farm</a>
		<a href="./vue/index.html">Vue</a>
		<a href="./time/index.html">Time</a>
		<a href="./time/admin.html">Admin</a>
	</div>
</template>
<style lang="less" scoped>
	@import '../vars.less';
	.Home {
		padding: 15px;
		font-size: 14px;
		color: #2c3e50;
		.title_ {
			padding: 15px 0;
			font-size: 24px;
			border-bottom: 1px solid #ddd;
		}
		.block {
			box-sizing: border-box;
			width: 100%;
			display: block;
			padding: 15px 0;
			font-size: 14px; line-height: 24px;
			//background: @green-bg;
			color: #2c3e50;
			//border-bottom: 1px solid @grey-border;
			p {
				margin: 10px 0;
			}
		}
	}
</style>

<template>
	<div class="Home">
		<div class="title_">
			Greetings!
		</div>
		<div class="block">
			<p>Greetings! I am a front-end developer.</p>
			<p>Github: github.com/403177368</p>
			<p>Website: madsoap.net</p>
			<p>Welcome, my friend! This is my personal website! Maybe you want to tap the navicon on top-left?</p>
			<p>These are the npm packages I am maintaining currently:</p>
			<p>soap-rem: A package which could set rem of current webpage according to the width of viewport.</p>
			<p>soap-canvas: A library which</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		
	}
</script>
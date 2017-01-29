<style lang="less" scoped>
	.RibbonCorner {
		.ribbon {
			position: relative;
			width: 400px;
			height: 20px;
			background-color: #CC0000;
			color: white;
			text-align: center;
			font-size: 14px;
			line-height: 20px;
			text-shadow: grey 0px 1px 0px;
			transform-origin: 50% 0;
			transform: translate(-180px,20px) rotate(-45deg);
			/*
			box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.3);
			*/
		}

		.panel {
			position: relative;
			margin: 50px auto;
			width: 300px;
			height: 180px;
			overflow: hidden;
			box-shadow: grey 1px 1px 5px;
		}
	}
</style>

<template>
	<div class="RibbonCorner">
		<div class="panel">
			<div class="ribbon">
				限 免
			</div>
		</div>
	</div>
</template>
<template>
<!-- Abstract Canvas Visualization -->
<div class="_space">
	<canvas id="scope" width="400" height="400"></canvas>
</div>
</template>

<style lang="less" scoped>
._space {
	width: 100%; height: 100vh;
	background: black;
	canvas {
		display: block;
		position: absolute; left: 0; top: 0; right: 0; bottom: 0;
		margin: auto;
		width: 60%;
	}
}
@media (min-width:1000px) {
	._space {
		canvas {
			width: 400px!important;
		}
	}
}
</style>

<script>
import {Scope} from './lib/Scope.js';
export default {
	mounted: function(){
		new Scope({
			el: '#scope',
			width: 400,
			height: 400
		})
	}
}
</script>
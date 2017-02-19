<template>
	<canvas id="NEON" width="500" height="500"></canvas>
</template>

<style lang="less" scoped>
	#NEON {
		display: block;
		margin: auto;
		width: 100%;
	}
</style>

<script>
import {NeonHexagons} from './lib/NeonHexagons.js';

export default {
	mounted: function(){
		new NeonHexagons({
			el: '#NEON'
		})
	}
}
</script>
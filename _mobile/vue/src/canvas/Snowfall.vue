<template>
	<canvas id="SNOWFALL" width="1000" height="1000"></canvas>
</template>

<style lang="less" scoped>
	#SNOWFALL {
		display: block;
		margin: auto;
		width: 100%;
		background: #0BA2FF;
	}
</style>

<script>
import {Snowfall} from './lib/Snowfall.js';
export default {
	mounted: function(){
		new Snowfall({
			el: '#SNOWFALL'
		})
	}
}
</script>
<template>
	<canvas id="CIRCLES"></canvas>
</template>

<style lang="less" scoped>
	#CIRCLES {
		display: block;
		width: 100%;
	}
	@media (min-width:1000px){
		#CIRCLES {
			width: 500px;
			margin: auto;
		}
	}
</style>

<script>
import {Circles} from './lib/Circles.js';

export default {
	mounted: function(){
		new Circles({
			el: '#CIRCLES'
		})
	}
}
</script>
<template>
	<canvas id="RAIN"></canvas>
</template>

<style lang="less" scoped>
	#RAIN {
		display: block;
		width: 100%;
	}
</style>

<script>
import {Rain} from '../lib/Rain.js';

export default {
	mounted: function(){
		new Rain({
			el: '#RAIN',
			width: 2000,
			height: 1000,
			data: {
				dropCount: 50
			}
		})
	}
}
</script>
<template>
	<canvas id="RAIN" width="1000" height="1000"></canvas>
</template>

<style lang="less" scoped>
	#RAIN {
		display: block;
		margin: auto;
		width: 100%;
	}
</style>

<script>
import {Rain} from './lib/Rain.js';

export default {
	mounted: function(){
		new Rain({
			el: '#RAIN',
			data: {
				dropCount: 500
			}
		})
	}
}
</script>
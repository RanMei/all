<template>
	<div id="root">
		<slider :img="img"></slider>
	</div>
</template>

<script type="text/javascript">
	import {data,act} from './store.js';
	export default {
		components: {
			Slider: require('../components/Slider.vue')
		},
		data: function(){
			return data;
		},
		methods: {
			act: act
		}
	}
</script>
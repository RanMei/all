<template>
	<div id="root">

		
		<div class="main">
			<farm></farm>
		</div>

<!-- 		<debugger
		:state="$data"></debugger> -->
	</div>
</template>

<style lang="less" scoped>
	#root {
		position: relative;
		width: 100%;
		overflow: hidden;
		.main {
			position: relative;
			width: 100%;
			overflow: hidden;
			//background: #f8dfb9;
			.header_writers {
				width: 100%;
				margin-bottom: 0.55rem;
			}
			.male_writer {
				width: 5.64rem;
				margin: auto; margin-bottom: 0.49rem;
			}
			.female_writer {
				width: 5.64rem;
				margin: auto; margin-top: 0.56rem; margin-bottom: 0.44rem;
			}
			.link {
				width: 4.8rem;
				margin: auto;
				margin-top: 0.58rem;
				margin-bottom: 0.6rem;
				overflow: hidden;
				img {
					width: 100%;
				}
			}
		}
	}
</style>

<script type="text/javascript">


	export default {
		components: {
			Farm: require('../lib/Farm.vue')
		},
		data: function(){
			return {}
		},
		computed: {
		},
		watch: {
		},
		created: function(){
		},
		mounted: function(){
			//this.act({type:'INIT'});
			//console.log(this)
		},
		methods: {

		}
	}
</script>
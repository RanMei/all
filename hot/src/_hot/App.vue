<template>
	<div id="app">
		<navbar></navbar>
		<ribbon-corner></ribbon-corner>
		<div class="box">
			<img :src=" '../img/cover.jpg' "/>
			<p>{{count}} {{msg}}</p>
			<div>ijdsa</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	#app {
		.box {
			width: 80%;
			margin: auto;
			background: red;
			img {
				width: 20%; height: 2rem;
				margin: auto;
			}
			p {
				padding: 0.2rem 0;
				font-size: 0.3rem;
				text-align: center;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			Navbar: require('../components/Navbar.vue'),
			RibbonCorner: require('../components/RibbonCorner.vue')
		},
		data: function(){
			return {
				msg: 'peterson'
			}
		},
		computed: {
			count: function(){
				return this.$store.state.count;
			}
		}
	}
</script>
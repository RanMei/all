<template>
	<div id="app">
		<navbar></navbar>
		<div class="box">
			<img :src=" '../img/cover.jpg' "/>
			<p>{{count}} {{msg}}</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	#app {
		.box {
			width: 100%;
			background: yellow;
			img {
				width: 80%; height: 2rem;
			}
			p {
				font-size: 0.3rem;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			Navbar: require('../components/Navbar.vue')
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
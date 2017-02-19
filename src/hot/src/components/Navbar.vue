<template>
	<div class="Navbar"
	@click="click">
		111 222 333<br/>
		{{text}}
	</div>
</template>

<style lang="less" scoped>
	.Navbar {
		box-sizing: border-box;
		width: 100%;
		padding: 0.1rem;
		margin: auto;
		font-size: 0.26rem;
		background: orange;
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				text: 'click here..'
			}
		},
		methods: {
			click: function(){
				this.text = 'clicked!!!';
			}
		}
	}
</script>
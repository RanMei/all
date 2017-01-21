<template>
	<div id="root">
		<back-to-top></back-to-top>

		<my-header :dir="dir"></my-header>
		
		<shopping-cart :cart="cart"></shopping-cart>
		
		<my-footer></my-footer>		
	</div>
</template>

<style lang="less" scoped>
	
</style>

<script type="text/javascript">
	export default {
		components: {
			BackToTop: require('../components/BackToTop.vue'),
			MyHeader: require('../components/MyHeader.vue'),
			MyFooter: require('../components/MyFooter.vue'),
			ShoppingCart: require('../components/ShoppingCart.vue')
		},
		computed: {
			dir: function(){
				return this.$store.state.base.DIR;
			},
			cart: function(){
				return this.$store.state.cart;
			}
		},

	}
</script>
<template>
	<div id="root">
		<topbar-black></topbar-black>
		<router-view></router-view>
	</div>
</template>

<style lang="less" scoped>
	
</style>

<script type="text/javascript">
	export default {
		components: {
			TopbarBlack: require('../components/TopbarBlack.vue')
		},
		created: function(){
			this.$store.dispatch('fetchItems');
			//this.$store.dispatch('PLUS');
		},
		computed: {
			items: function(){
				return this.$store.state.items;
			},
			num: function(){
				return this.$store.state.num.num;
			}
		},
		methods: {
			act: function(){}
		}
	}
</script>
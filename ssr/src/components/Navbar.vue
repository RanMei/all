<template>
	<div class="Navbar"
	@click="click">
		<a v-for="a in items">{{a.name}}</a>
	</div>
</template>

<style lang="less" scoped>
</style>

<script type="text/javascript">
	export default {
		props: {
			items: {
				default: function(){
					return [{
						name: '111'
					},{
						name: '222'
					},{
						name: '333'
					}]
				}
			}
		},
		data: function(){
			return {
			}
		},
		created: function(){
			console.log('created')
		},
		methods: {
			click: function(){
				console.log('clicked')
				this.msg = 'world';
			}
		}
	}
</script>
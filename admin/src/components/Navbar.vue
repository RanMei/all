<template>
	<div class="Navbar panel">
		<a class="btn btn-danger btn-rounded" href="#/">
			users
		</a>

		<a class="btn btn-danger btn-pill" href="#/">
			items
		</a>

		<a class="btn btn-danger btn-pill" href="#/signin">
			signin
		</a>
		{{id}}
	</div>
</template>

<style lang="less" scoped>
	.Navbar {
		overflow: hidden;
	}
</style>

<script type="text/javascript">
	export default {
		computed: {
			id: function(){
				return this.$store.state.user.id;
			}
		}
	}
</script>
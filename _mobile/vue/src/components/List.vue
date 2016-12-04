<template>
	<div class="List">
		<div class="item__"
		v-for="a in items">
			{{a.name}}
		</div>
	</div>
</template>

<style lang="less" scoped>
	.List {
		position: relative;
		.item__ {
			padding: 8px 15px;
			border-bottom: 1px solid lightgrey;
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			items: {}
		}
	}
</script>
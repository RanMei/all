<template>
	<div class="List">
		<div class="item__"
		v-for="a in items">
			<a :href=" '#/item/'+a.name.toLowerCase() ">{{a.name}}</a>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.List {
		position: relative;
		.item__ {
			padding: 8px 15px;
			border-bottom: 1px solid lightgrey;
			a {
				text-decoration: none;
			}
			a:link {
				color: red;
			}
			a:visited {
				color: red;
			}
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
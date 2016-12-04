<style lang="less">
	.Showcase {
		position: relative;
		overflow: hidden;
		.item__ {
			display: block;
			box-sizing: border-box;
			float: left;
			width: 50%;
			padding: 15px;
			border-right: 1px solid lightgrey;
			border-bottom: 1px solid lightgrey;
			&:link {
				text-decoration: none;
				color: red;
			}
			&:visited {
				color: red;
			}
		}
	}
</style>

<template>
	<div class="Showcase">
		<a class="item__"
		v-for="a in items"
		:href=" '#/item/'+a.name.toLowerCase() ">
			{{a.name}}
		</a>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			items: {
			}
		}	
	}
</script>

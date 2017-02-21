<template>
	<div class="NavLeft">
		<a v-for="a in tabs" :href="a.href">{{a.name}}</a>
	</div>
</template>

<style lang="less" scoped>
	.NavLeft {
		float: left;
		overflow: hidden;
		width: 200px; height: 1000px;
		background: #1C2B36;
		a {
			display: block;
			padding: 10px 20px;
			background: #1C2B36;
			color: #869fb1;
			cursor: pointer;
			&:hover {
				color: white;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				tabs: [{
					name: 'Items',
					href: '#/admin/management',
					subs: []
				},{
					name: 'Posts',
					href: '#/admin/posts',
					subs: []
				},{
					name: 'Tables',
					href: '#/admin/tables',
					subs: []
				}]
			}
		},
		computed: {
		}
	}
</script>
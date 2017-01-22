<style lang="less" scoped>
	@import '../vars.less';

	.Blog {
		.list {
			.list-item {
				padding: 15px;
				border-bottom: 1px solid @grey-border;
				.title {
					font-size: 16px;
				}
				.time {
					font-size: 14px;
					color: @grey-text;
				}
			}
		}
	}
</style>

<template>
	<div class="Blog">
		<div class="list">
			<div class="list-item"
			v-for="a in list">
				<a class="title" :href=" '#/post?time='+a.time ">
					{{a.title}}
				</a>
				<p class="time">{{a.time}}</p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			list: function(){
				return this.$store.state.posts.items;
			}
		}
	}
</script>
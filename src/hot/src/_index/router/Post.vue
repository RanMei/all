<style lang="less" scoped>
	.Post {
		padding: 0 15px;
		overflow: hidden;
		.post-title {
			margin: 15px 0;
			font-size: 20px;
		}
		p {
			margin: 15px 0;
			font-size: 14px;
		}
	}
</style>

<template>
	<div class="Post">
		<div class="post-title">{{post.title}}</div>
		<div class="post-time">{{post.time}}</div>
		<div class="post-body">
			<p v-for="a in post.body">{{a}}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
		},
		computed: {
			post: function(){
				return this.$store.state.post;
			}
		},
		mounted: function(){
			var time = location.hash.match(/time=[\d|-]+/)[0].replace(/time=/,'');
			this.$store.dispatch('fetchPost',time);
		}
	}
</script>
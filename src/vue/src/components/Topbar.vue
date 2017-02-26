<template>
	<div class="Topbar">
		<div class="scroller">
			<div class="tab"
			v-for="(a,i) in tabs"
			@click="change(i)"
			:class=" i===current?'active':'' ">
				{{a}}
				<div class="bar_"
				:class=" i===current?'active':'' "></div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Topbar {
		position: relative;
		width: 100%; height: 0.92rem;
		background: white;
		.scroller {
			box-sizing: border-box;
			position: fixed; left: 0; top: 0;
			width: 100%; height: 0.92rem;
			padding: 0 0.4rem;
			background: white;
			z-index: 999;
			overflow: hidden;
			.tab {
				position: relative;
				float: left;
				width: 25%;
				text-align: center; font-size: 0.32rem; line-height: 0.92rem;
				font-weight: 500;
				&.active {
					color: #66ceff;
				}
				.bar_ {
					position: absolute; left: 15%; bottom: 0;
					width: 70%; height: 0.04rem;
					background: transparent;
					&.active {
						background: #66ceff;
					}
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			tabs: {
				default: function(){
					return ['全部','CSS3','SVG','Canvas'];
				}
			}
		},
		data: function(){
			return {
			}
		},
		computed: {
			current(){
				return this.$store.state.topbar.current;
			}
		},
		methods: {
			change(i){
				this.$store.dispatch('topbarToTab',i);
			}
		}
	}
</script>
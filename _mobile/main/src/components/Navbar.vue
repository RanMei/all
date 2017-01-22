<style lang="less" scoped>
	@import (reference) '../vars.less';
	.Navbar {
		box-sizing: border-box;
		position: relative;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 24px;
		color: #333;
		border-bottom: 1px solid @grey-border;
		z-index: 10;
		.navicon {
			position: absolute; left: 0; top: 0;
			width: 44px; height: 44px;
			font-size: 20px;
			line-height: 44px; text-align: center;
			cursor: pointer;
		}
		.box {
			position: absolute; left: 0; top: 100%;
			width: 100%;
			border-top: 1px solid @grey-border;
			border-bottom: 1px solid @grey-border;
			background: white;
			font-size: 15px;
			text-align: left;
			display: none;
			box-shadow: inset 0 1px 0 #fff,0 8px 10px rgba(0,0,0,0.15);
			.section {
				padding: 8px 0;
				border-bottom: 1px solid @grey-border;
			}
			.section-bottom {
				padding: 8px 0;
			}
			.tab {
				padding: 8px 15px;
				line-height: normal;
				&:hover {
					background: @pink;
					a {
						color: white;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="Navbar">
		<div class="navicon" @click="toggle">
			<i class="fa fa-navicon"></i>
		</div>
		MadSoap
		<div :class="show?'box _show':'box'" 
		@click="hide">
			<div class="section">
				<div class="tab"><a href="#/home"><i class="fa fa-home"></i> Home</a></div>
				<div class="tab"><a href="#/projects"><i class="fa fa-rocket"></i> Projects</a></div>
				<div class="tab"><a href="#/animations"><i class="fa fa-cog fa-spin"></i> Animations</a></div>
				<div class="tab"><a href="#/blog"><i class="fa fa-book"></i> Blog</a></div>
			</div>
			<div class="section-bottom">
				<div class="tab"><a href="./_mobile/farm/index.html" target="_blank"><i class="fa fa-money"></i> Farm</a></div>
				<div class="tab"><a href="./front_end.html" target="_blank"><i class="fa fa-file-text"></i> Animation Library</a></div>
				<div class="tab"><a href="./time/index.html" target="_blank"><i class="fa fa-file-text"></i> Time</a></div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				show: false
			}
		},
		methods: {
			toggle(){
				this.show = !this.show;
			},
			hide(){
				this.show = false;
			}
		}
	}
</script>
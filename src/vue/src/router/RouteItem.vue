<style lang="less" scoped>
.RouteItem {
	display: table;
	position: relative;
	width: 100%; height: 100vh;
	overflow: hidden;
	background: #e3e3e6;
	.cell {
		width: 100%; height: 100%;
		display: table-cell;
		vertical-align: middle;
	}
	.bottom_bar {
		box-sizing: border-box;
		position: fixed; left: 0; bottom: 0;
		width: 100%; height: 0.8rem;
		// padding: 10px 10px;
		// border-bottom: 1px solid lightgrey;
		overflow: hidden;
		font-size: 18px;
		background: white;
		opacity: 0.9;
		.back {
			display: table;
			box-sizing: border-box;
			float: left;
			width: 16%; height: 100%;
			border-right: 1px solid #e3e3e6;
			background: #f9f9f9;
			.back_arrow {
				width: 0.13rem;
				margin: auto;
			}
		}
		.btns {
			float: left;
			width: 68%; height: 100%;
			overflow: hidden;
			.prev__,.next__ {
				float: left;
				width: 50%; height: 100%;
				font-size: 0.24rem; line-height: 0.8rem;
			}
			.prev__ {
				.btn {
					display: table;
					float: right;
					margin-right: 0.48rem;
					color: #676767;
					&.disabled {
						color: #bcbcbc;
					}
				}
			}
			.next__ {
				.btn {
					display: table;
					float: left;
					margin-left: 0.48rem;
					color: #676767;
					&.disabled {
						color: #bcbcbc;
					}
				}
			}
		}
		.info {
			display: table;
			box-sizing: border-box;
			float: left;
			width: 16%; height: 100%;
			border-left: 1px solid #e3e3e6;
			background: #f9f9f9;
			.info_img {
				width: 0.46rem;
				margin: auto;
			}
		}
	}
}
</style>

<template>
	<div class="RouteItem" v-if="current>-1">
		<mask-info></mask-info>
		<div class="cell">
			<router-view></router-view>
		</div>
		<div class="bottom_bar">
			<div class="back"
			@click="back">
				<div class="cell">
					<img class="back_arrow" :src="img+'/back.png'"/>
				</div>
			</div>
			<div class="btns">
				<div class="prev__">
					<div class="btn"
					:class=" current===0?'disabled':'' "
					@click="$store.commit('TO_PREV_ITEM')">
						上一页 <i class="fa fa-angle-up"/>
					</div>
				</div>
				<div class="next__">
					<div class="btn"
					:class=" current===length-1?'disabled':'' "
					@click="$store.commit('TO_NEXT_ITEM')">
						下一页 <i class="fa fa-angle-down"/>
					</div>
				</div>
			</div>
			<div class="info"
			@click="to_info">
				<div class="cell">
					<img class="info_img" :src="img+'/info.png'"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			MaskInfo: require('../components/MaskInfo.vue')
		},
		computed: {
			img(){
				return this.$store.state.img;
			},
			current(){
				return this.$store.state.current;
			},
			length(){
				return this.$store.state.items.length;
			}
		},
		methods: {
			back: function(){
				this.$store.commit('TO_HOME');
			},
			to_info(){
				this.$store.commit('SHOW','maskInfo')
			}
		},
		created: function(){
			if( this.current===-1 ){
				location.href = '#/home';
			}
		},
		mounted: function(){
			window.scroll(0,0);
		}
	}
</script>
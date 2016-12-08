<style lang="less" scoped>
	.NavbarWeifeng {
		width: 100%; min-width: 1000px;
		background: #3D455F;
		.container__ {
			width: 1000px;
			margin: auto;
			background: #3D455F;
			.tabs {padding:10px 0 10px 0;overflow:hidden;}
			.tabs li {width:83px;height:28px;line-height:28px;text-align:center;float:left;font-size:15px;color:white;cursor:pointer;}
			.tabs li:hover {color:#00CCFF}
			.bar-wrapper {
				position: relative;
				height: 3px;
			}
			.bar {
				position: absolute; left: 0; top: 0;
				width: 83px; height: 3px;
				background: #00CCFF;
				transition: transform 300ms;
			}
		}
	}
</style>

<template>
	<div class="NavbarWeifeng">
		<div class="container__">
			<ul class="tabs"
			@mouseleave="mouseleave">
				<li v-for="(a,i) in items"
				@mouseenter="mouseenter($event,i)">{{a.name}}</li>
			</ul>
			<div class="bar-wrapper">
				<div class="bar"
				:style=" 'transform:translate3d('+(current*83)+'px,0,0);' "></div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			items: {
				default: function(){
					return [{
						name: '首页'
					},{
						name: '新手'
					},{
						name: '游戏'
					},{
						name: '新闻'
					},{
						name: '锋科技'
					},{
						name: '锋观点'
					},{
						name: '评测'
					},{
						name: '论坛'
					},{
						name: '威锋源'
					},{
						name: '威锋游戏'
					},{
						name: '威锋商城'
					},{
						name: '兔兔助手'
					}]
				}
			}
		},
		data: function(){
			return {
				current: 0
			}
		},
		methods: {
			mouseenter: function(e,i){
				this.current = i;
			},
			mouseleave: function(){
				this.current = 0;
			},
			haha: function(e){
				console.log(e)
			}
		}
	}
</script>
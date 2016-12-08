<style lang="less" scoped>
	.Item2 {
		box-sizing: border-box; display: table;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		background: #A176EA;
		background: linear-gradient(45deg, #8C379F, #A176EA);
		.cell {
			display: table-cell; vertical-align: middle;
			.title {
				margin-bottom: 0.1rem;
				font-size: 0.4rem; color: white;
				text-align: center;
				opacity: 0;
				&.active {
					animation: text_shrink 1000ms forwards;
				}
			}
			.text {
				margin-bottom: 0.1rem;
				font-size: 0.26rem;
				text-align: center;
				color: white;
				opacity: 0;
				&.active {
					animation: text_shrink 1000ms forwards;
				}
			}
		}
	}
</style>

<template>
	<div class="Item2">
		<div class="cell">
			<card-carousel :img="img" :active="active"></card-carousel>
			<p class="title"
			:class="an.title.s">发展历程</p>
			<p class="text text_0"
			:class="an.text_0.s">2012年，团队组建，紫狼游戏蓄势待发</p>
			<p class="text text_1"
			:class="an.text_1.s">经过三年的努力</p>
			<p class="text text_2"
			:class="an.text_2.s">紫狼游戏已经在整个游戏产业中积累了相当的资源</p>
			<p class="text text_3"
			:class="an.text_3.s">未来，我们的竞争优势会与日俱增</p>
		</div>
		<arrow :img="img"></arrow>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			img: {},
			active: {}
		},
		components: {
			CardCarousel: require('./CardCarousel.vue'),
			Arrow: require('./Arrow.vue')
		},
		data: function(){
			return {
				count: 0,
				an: {
					carousel: {
						s: '',
						p: 0
					},
					title: {
						s: '',
						p: 1000
					},
					text_0: {
						s: '',
						p: 1500
					},
					text_1: {
						s: '',
						p: 2000
					},
					text_2: {
						s: '',
						p: 2500
					},
					text_3: {
						s: '',
						p: 3000
					}
				}
			}
		},
		watch: {
			active: function(neo){
				if(neo){
					this.go();
				}else{
					this.reset();
				}
			}
		},
		mounted: function(){
		},
		methods: {
			go: function(){
				this.reset();
				this.count++;
				var count = this.count;
				for(let key in this.an){
					setTimeout(()=>{
						if( count!==this.count )return;
						this.an[key].s = 'active';
					},this.an[key].p)
				}
			},
			reset: function(){
				for(let key in this.an){
					this.an[key].s = '';
				}
			}
		}
	}
</script>
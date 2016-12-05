<style lang="less" scoped>
	.Item1 {
		box-sizing: border-box; display: table;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		background: #B35539;
		//perspective: 1000px;
		.cell {
			display: table-cell; vertical-align: middle;
			.title {
				margin-bottom: 0.3rem;
				font-size: 0.4rem; color: white;
				text-align: center;
				opacity: 0;
				transform: scaleX(2);
				&.active {
					transition-property: transform,opacity;
					transition-duration: 1s;
					opacity: 1;
					transform: scaleX(1);
				}
			}
			.warrior {
				width: 8rem;
				margin-left: -0.5rem; margin-bottom: 0.6rem;
				//transition: 300ms;
				opacity: 0;
				//transform: scale(0);
				&.active {
					animation: warrior-dash 1s forwards;
				}
			}
			@keyframes warrior-dash{
				0% {
					opacity: 0;
					transform: scale(0.2) rotate(15deg); 
				}
				75%{
					opacity: 1; 
					transform: scale(1) rotate(-5deg); 
				}
				80%{ transform: scale(1) rotate(20deg); }
				85%{ transform: scale(1) rotate(-15deg); }
				90%{ transform: scale(1) rotate(15deg); }
				95%{ transform: scale(1) rotate(-10deg); }
				100%{
					opacity: 1; 
					transform: scale(1) rotate(5deg); 
				}
			}

			.text {
				font-size: 0.26rem; text-align: center; color: white;
				margin-bottom: 0.1rem;
				opacity: 0;
				&.active {
					animation: text_shrink 1000ms forwards;
				}
			}
		}
	}
</style>

<template>
	<div class="Item1">
		<div class="cell">
			<img class="warrior"
			:src=" img+'/cont2_m.png' "
			:class=" an.warrior.s "/>

			<p class="title"
			:class=" an.title.s ">做业内最优秀的游戏开拓者</p>

			<p class="text text_0"
			:class=" an.text_0.s ">紫狼游戏是一家专业从事游戏开发的高科技企业</p>
			<p class="text text_1"
			:class=" an.text_1.s ">由一群经验丰富、技术扎实、严谨的年轻人创建</p>
			<p class="text text_2"
			:class=" an.text_2.s ">是一个具有创造力和核心竞争力的团队</p>
			<p class="text text_3"
			:class=" an.text_3.s ">致力于为玩家及用户带来高品质的游戏</p>
			<div style="height:0.8rem"></div>
		</div>

		<arrow :img="img"></arrow>
	</div>
</template>

<script>
	export default {
		components: {
			Arrow: require('./Arrow.vue')
		},
		props: {
			img: {},
			active: {}
		},
		data: function(){
			return {
				count: 0,
				an: {
					warrior: {
						s: '',
						p: 0
					},
					title: {
						s: '',
						p: 1200
					},
					text_0: {
						s: '',
						p: 1400
					},
					text_1: {
						s: '',
						p: 1600
					},
					text_2: {
						s: '',
						p: 1800
					},
					text_3: {
						s: '',
						p: 2000
					}
				}
			}
		},
		watch: {
			active: function(b){
				if(b){
					this.go();
				}else{
					this.reset();
				}
			}
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
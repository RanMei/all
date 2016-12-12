<style lang="less" scoped>
	.Item4 {
		box-sizing: border-box; display: table;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		background: #388bff;
		//background: linear-gradient(20deg, #388bff, blue);
		.cell {
			display: table-cell; vertical-align: middle;
			.text {
				margin-bottom: 0.1rem;
				font-size: 0.4rem; color: white;
				text-align: center;
				opacity: 0;
				transform: scaleX(2);
			}
			.text_0,.text_1 {
				margin-top: 0.15rem;
				&.active {
					animation: text_shrink 1000ms forwards;
				}
			}
		}
	}
</style>

<template>
	<div class="Item4">
		<div class="cell">
			<svg-penguin 
			:active="an.svg_penguin.s"></svg-penguin>
			<p class="text text_0"
			:class="an.text_0.s">海量原著</p>
			<p class="text text_1"
			:class="an.text_1.s">想读就读</p>
			<div style="height:0.8rem"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			img: {},
			active: {}
		},
		data: function(){
			return {
				count: 0,
				an: {
					svg_penguin: {
						s: '',
						p: 0
					},
					text_0: {
						s: '',
						p: 7000
					},
					text_1: {
						s: '',
						p: 7500
					}
				}
			}
		},
		components: {
			SvgPenguin: require('./SvgPenguin.vue')
		},
		watch: {
			active: function(neo){
				//console.log(neo)
				if(neo){
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
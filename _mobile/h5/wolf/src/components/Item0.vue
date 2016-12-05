<template>
<li class="Item0"
style="background:white;">
	<div class="cell">
		<img class="logo" 
		:src=" img+'/Logo.png' "
		:class=" an.logo.s ">
		<circles :active=" an.circles.s "></circles>
		<p class="text_new"
		:class=" an.text_new.s ">全新的紫狼游戏</p>
		<p class="text text_0"
		:class=" an.text_0.s ">紫狼游戏创立于2008年</p>
		<p class="text text_1"
		:class=" an.text_1.s ">发起人是一群热爱游戏的小伙伴</p>
		<p class="text text_2"
		:class=" an.text_2.s ">公司创始人中有多位高级程序员</p>
		<p class="text text_3"
		:class=" an.text_3.s ">因此公司在创立之初就被灌注了浓厚的技术基因</p>
		<div style="height:0.8rem"></div>
	</div>

	<arrow :img="img"></arrow>
</li>
</template>

<style lang="less" scoped>
	.Item0 {
		box-sizing: border-box; display: table;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		//perspective: 1000px;
		.cell {
			padding-bottom: 0.5rem;
			display: table-cell; vertical-align: middle;
			.logo {
				width: 2rem;
				margin: auto; margin-bottom: 0.25rem;
				&.active {
					transition: transform 1s;
					transform: rotateY(720deg);
				}
			}
			.text_new {
				margin-bottom: 0.25rem;
				font-size: 0.5rem;
				text-align: center;
				opacity: 0;
				transform: translate3d(0,-100%,0);
				&.active {
					transition-property: transform,opacity;
					transition-duration: 1s;
					transform: translate3d(0,0,0);
					opacity: 1;
				}
			}
			.text {
				padding-bottom: 0.05rem;
				font-size: 0.26rem;
				text-align: center;
			}
			.text_0,.text_1,.text_2,.text_3 {
				opacity: 0;
				&.active {
					transition: opacity 1s;
					opacity: 1;
				}
			}
		}
	}
</style>

<script>
export default {
	components: {
		Circles: require('./Circles.vue'),
		Arrow: require('./Arrow.vue')
	},
	props: ['img','act','active'],
	data: function(){
		return {
			count: 0,
			an: {
				logo: {
					s: '',
					p: 0
				},
				circles: {
					s: '',
					p: 1000
				},
				text_new: {
					s: '',
					p: 2000
				},
				text_0: {
					s: '',
					p: 3000
				},
				text_1: {
					s: '',
					p: 4000
				},
				text_2: {
					s: '',
					p: 5000
				},
				text_3: {
					s: '',
					p: 6000
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
	mounted: function(){
		//this.go();
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
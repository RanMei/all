<template>
<li class="Item0"
style="background:white;">
	<img class="logo" 
	:src=" img+'/logo.png' "
	:class=" logoActive?'active':'' ">
	<circles :active="circlesActive"></circles>
	<p class="text_new"
	:class=" text_new?'active':'' ">全新的紫狼游戏</p>
	<p class="text text_0"
	:class=" text_0?'active':'' ">紫狼游戏创立于2008年</p>
	<p class="text text_1"
	:class=" text_1?'active':'' ">发起人是一群热爱游戏的小伙伴</p>
	<p class="text text_2"
	:class=" text_2?'active':'' ">公司创始人中有多位高级程序员</p>
	<p class="text text_3"
	:class=" text_3?'active':'' ">因此公司在创立之初就被灌注了浓厚的技术基因</p>
	<img class="arrow"/>
</li>
</template>

<style lang="less" scoped>
	.Item0 {
		box-sizing: border-box;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		//perspective: 1000px;
		.logo {
			width: 2rem;
			margin: auto; margin-top: 0.5rem; margin-bottom: 0.25rem;
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
</style>

<script>
export default {
	components: {
		Circles: require('./Circles.vue')
	},
	props: ['img','act','active'],
	data: function(){
		return {
			logoActive: false,
			circlesActive: false,
			text_new: false,
			text_0: false,
			text_1: false,
			text_2: false,
			text_3: false
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
			if(!this.active)return;
			this.logoActive = true;
			setTimeout(()=>{
				if(!this.active)return;
				this.circlesActive = true;
				setTimeout(()=>{
					if(!this.active)return;
					this.text_new = true;
					setTimeout(()=>{
						if(!this.active)return;
						this.text_0 = true;
						setTimeout(()=>{
							if(!this.active)return;
							this.text_1 = true;
							setTimeout(()=>{
								if(!this.active)return;
								this.text_2 = true;
								setTimeout(()=>{
									if(!this.active)return;
									this.text_3 = true;
								},1000)
							},1000)
						},1000)
					},1000)
				},1000)
			},1000)
		},
		reset: function(){
			this.logoActive = false;
			this.circlesActive = false;
			this.text_new = false;
			this.text_0 = false;
			this.text_1 = false;
			this.text_2 = false;
			this.text_3 = false;
		}
	}
}
</script>
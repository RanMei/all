<template>
<ul class="Focus wrapper">
	<a :href=" dir.item " 
	class="item" 
	v-for="(a,i) in items"
	:class=" i===current?'active':'' ">
		<li 
		:style=" 'background:url('+dir.img+'/focus/'+(i)+'.jpg) no-repeat center;' ">
		</li>
	</a>
	<ul class="pagination">
		<div class="dot" 
		v-for="(b,index) in items" 
		:class=" index===current?'active':'' "
		@click="jump(index)"></div>
	</ul>
	<div class="focus-last"
	@click="prev"><i class="fa fa-angle-left"></i></div>
	<div class="focus-next" 
	@click="next"><i class="fa fa-angle-right"></i></div>		
</ul>
</template>

<style lang="less" scoped>
.Focus {
	position: relative;
	width: 100%; height: 500px;
	margin: auto;
	background: white;
	overflow: hidden;
	.item {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		display: none;
		&.active {
			display: block;
		}
		li {
			position: relative;
			width: 100%; height: 100%;
		}
		img {
			display: block;
			position: absolute; left: 0; top: 0; bottom: 0; right: 0;
			margin: auto;
			height: 100%;
		}
	}
	.pagination {
		display: table; margin: auto;
		margin-top: 400px;
		overflow: hidden;
		z-index: 99;
		.dot {
			float: left;
			width: 15px; height:15px;
			margin: 0 5px;
			border-radius: 50%;
			border: 1px solid black;
			background: white;
			cursor: pointer;
			opacity: 0.5;
			&.active {
				//background: red;
				opacity: 0.99;
			}
		}
	}
	.focus-last {
		position: absolute; left: 10px; top: 200px;
		width: 49px; height: 104px;
		background: black;
		line-height: 104px; text-align: center;
		cursor: pointer; font-size: 50px; color: white;
		z-index: 1;
		opacity: 0.5;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		&:hover {
			opacity: 0.7;
		}
	}

	.focus-next {
		position: absolute; right: 10px; top: 200px;
		width: 49px; height: 104px;
		background: black;
		line-height: 104px; text-align: center;
		cursor: pointer; font-size: 50px; color: white;
		z-index: 1;
		opacity: 0.5;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		&:hover {
			opacity: 0.7;
		}
	}
}
</style>

<script type="text/javascript">
export default {
	props: ['dir'],
	data: function(){
		return {
			items: [0,1,2,3],
			current: 0
		}
	},
	watch: {
		curernt: function(val,prev_val){
			
		}
	},
	methods: {
		prev: function(){
			if(this.current>0){
				this.current--;
			}else{
				this.current = 3;
			}
		},
		next: function(){
			if(this.current<3){
				this.current++;
			}else{
				this.current = 0;
			}
		},
		jump: function(i){
			this.current = i;
		}
	}
}
</script>
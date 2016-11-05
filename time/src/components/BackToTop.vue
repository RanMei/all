<template>
<div class="BACK-TO-TOP"
@click="back"><i class="fa fa-angle-up"></i></div>
</template>

<style lang="less" scoped>
.BACK-TO-TOP {
	position:fixed;
	right:10px;
	bottom:10px;
	width:50px;
	height:50px;
	background:lightgrey;
	z-index:100;
	font-size:30px;
	line-height:50px;
	text-align:center;
	cursor:pointer;
}
</style>

<script type="text/javascript">
var body = document.querySelector('body');
export default {
	data: function(){
		return {
			scrolling: false
		}
	},
	methods: {
		back: function(){
			if(!this.scrolling){
				this.scrolling = true;
				var duration = 300;
				var distance = body.scrollTop;
				var dy = 10*distance/duration;
				var interval = setInterval(()=>{
					if( body.scrollTop-dy>0 ){
						body.scrollTop -= dy;
					}else{
						body.scrollTop = 0;
						clearInterval(interval);
						this.scrolling = false;
					}
				},10)
			}
			//window.scroll(0,0);
		}
	}
}
</script>
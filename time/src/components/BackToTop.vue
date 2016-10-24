<template>
<div class="BACK-TO-TOP"
@click="back"><i class="fa fa-angle-up"></i></div>
</template>

<style lang="less" scoped>
/* back_to_top button */
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
export default {
	methods: {
		back: function(){
			window.scroll(0,0);
		}
	}
}
</script>
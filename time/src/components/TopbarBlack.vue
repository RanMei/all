<template>
	<div class="TopbarBlack">
		<a class="li" href="./index.html">Home</a>
		<a class="li" href="./test.html">Test</a>
		<a class="li" href="./admin.html">Admin</a>
	</div>
</template>

<style lang="less" scoped>
.TopbarBlack {
	box-sizing: border-box;
	width: 100%; height: 60px;
	padding-left: 20px;
	background: #192332;
	a {
		display: block;
		float: left;
		margin-right: 20px;
		font-size: 14px;
		line-height: 60px;
		color: #c8c8c8;
		&:visited {
			color: #c8c8c8;
		}
		&:hover {
			color: white;
		}
	}
}
</style>

<script type="text/javascript">
	export default {
		props: {
			items: {
				default: function(){
					return [{
						
					}]
				}
			}
		}
	}
</script>
<template>
	<div class="Topbar">
		{{text}}
	</div>
</template>

<style lang="less" scoped>
	.Topbar {
		box-sizing: border-box;
		width: 100%;
		padding: 10px;
		margin: auto;
		background: orange;
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				text: 'hellodddddddddddd world'
			}
		}
	}
</script>
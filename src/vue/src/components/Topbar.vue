<template>
	<div class="Topbar">
		<div class="scroller">

		</div>
	</div>
</template>

<style lang="less" scoped>
	.Topbar {
		position: relative;
		width: 100%; height: 0.92rem;
		background: white;
		.scroller {
			position: fixed; left: 0; top: 0;
			width: 100%; height: 0.92rem;
			background: white;
			z-index: 999;
		}
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				tabs: [
					['']
				]
			}
		}
	}
</script>
<style lang="less" scoped>
	.Arrows {
		position: absolute; left: 4.6rem; top: 0.36rem;
		overflow: hidden;
		.arrow {
			float: left;
			width: 0.15rem;
		}
		@keyframes arrow1 {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes arrow2 {
			0% {
				opacity: 0;
			}
			9% {
				opacity: 0;
			}
			10% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes arrow3 {
			0% {
				opacity: 0;
			}
			19% {
				opacity: 0;
			}
			20% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		.arrow1 {
			animation: arrow1 1.5s infinite;
		}
		.arrow2 {
			animation: arrow2 1.5s infinite;
		}
		.arrow3 {
			animation: arrow3 1.5s infinite;
		}
	}
</style>

<template>
	<div class="Arrows">
		<img class="arrow arrow1" :src=" img+'/arrow.png' "/>
		<img class="arrow arrow2" :src=" img+'/arrow.png' "/>
		<img class="arrow arrow3" :src=" img+'/arrow.png' "/>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			img: {}
		},
		data: function(){
			return {}
		}
	}
</script>
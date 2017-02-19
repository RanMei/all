<style lang="less" scoped>
.Chips {
	position: absolute; left: 0; top: 0;
	width: 100%;
	.chip0 {
		position: absolute; left: 0.68rem; top: 2.78rem;
		width: 0.28rem;
	}
	.chip1 {
		position: absolute; left: 1.96rem; top: 0.9rem;
		width: 0.2rem;
	}
	.chip2 {
		position: absolute; left: 2.6rem; top: 3.2rem;
		width: 0.28rem;
	}
	.chip3 {
		position: absolute; left: 4.58rem; top: 4.48rem;
		width: 0.38rem;
	}
	.chip4 {
		position: absolute; left: 5.14rem; top: 2.46rem;
		width: 0.3rem;
	}
	.chip5 {
		position: absolute; left: 5.84rem; top: 1.42rem;
		width: 0.16rem;
	}
	.chip6 {
		position: absolute; left: 6.24rem; top: 3rem;
		width: 0.28rem;
	}

	@keyframes chip0 {
		0% {
			opacity: 0;
			transform: translate3d(0.5rem,-1rem,0);
		}
		50% {
			opacity: 1;
			//transform: translate3d(-0.05rem,0,0);
		}
		100% {
			opacity: 0;
			transform: translate3d(-0.2rem,1rem,0) skew(30deg,10deg);
		}
	}
	.chip0 {
		animation: chip0 6s infinite;
	}
	@keyframes chip1 {
		0% {
			opacity: 0;
			transform: translate3d(-0.4rem,-0.5rem,0);
		}
		50% {
			opacity: 1;
			//transform: translate3d(-0.05rem,0,0);
		}
		100% {
			opacity: 0;
			transform: translate3d(0.1rem,1rem,0) skew(30deg,10deg);
		}
	}
	.chip1 {
		//animation-delay: 0.5s;
		animation: chip1 4s infinite;
	}
	@keyframes chip2 {
		0% {
			opacity: 0;
			transform: translate3d(-0.4rem,-0.5rem,0);
		}
		50% {
			opacity: 1;
			//transform: translate3d(-0.05rem,0,0);
		}
		100% {
			opacity: 0;
			transform: translate3d(0.1rem,1rem,0) skew(30deg,10deg);
		}
	}
	.chip2 {
		//animation-delay: 0.5s;
		animation: chip2 4.5s infinite;
	}
	@keyframes chip3 {
		0% {
			opacity: 0;
			transform: translate3d(-0.4rem,-0.8rem,0);
		}
		50% {
			opacity: 1;
			//transform: translate3d(-0.05rem,0,0);
		}
		100% {
			opacity: 0;
			transform: translate3d(0.1rem,0.2rem,0) skew(30deg,10deg);
		}
	}
	.chip3 {
		//animation-delay: 0.5s;
		animation: chip3 4s infinite;
	}
	@keyframes chip4 {
		0% {
			opacity: 0;
			transform: translate3d(0.4rem,-0.8rem,0);
		}
		50% {
			opacity: 1;
			//transform: translate3d(-0.05rem,0,0);
		}
		100% {
			opacity: 0;
			transform: translate3d(-0.2rem,1rem,0) skew(30deg,10deg);
		}
	}
	.chip4 {
		//animation-delay: 0.5s;
		animation: chip4 5.8s infinite;
	}
	@keyframes chip5 {
		0% {
			opacity: 0;
			transform: translate3d(0.1rem,-0.8rem,0);
		}
		50% {
			opacity: 1;
			//transform: translate3d(-0.05rem,0,0);
		}
		100% {
			opacity: 0;
			transform: translate3d(-0.4rem,1rem,0) skew(30deg,10deg);
		}
	}
	.chip5 {
		//animation-delay: 0.5s;
		animation: chip5 4.1s infinite;
	}
	@keyframes chip6 {
		0% {
			opacity: 0;
			transform: translate3d(-0.2rem,-0.8rem,0);
		}
		50% {
			opacity: 1;
			//transform: translate3d(-0.05rem,0,0);
		}
		100% {
			opacity: 0;
			transform: translate3d(0.5rem,1rem,0) skew(30deg,10deg);
		}
	}
	.chip6 {
		//animation-delay: 0.5s;
		animation: chip6 6.2s infinite;
	}
}
</style>

<template>
	<div class="Chips">
		<img v-for="n in 7" 
		:class=" 'chip'+(n-1) " 
		:src=" img+'/chip'+(n-1)+'.png' "/>
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
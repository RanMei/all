<template>
<svg class="test" viewBox="0,0,1000,1000" pointer-events="all" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient 
		id="linearGradient-1"
		x1="0%" y1="100%" x2="100%" y2="100%">
			<stop stop-color="#2090F8" offset="0%"></stop>
			<stop stop-color="#01FCE4" offset="41.7610013%"></stop>
			<stop stop-color="#0BFF8C" offset="78.6870217%"></stop>
			<stop stop-color="#51FF00" offset="100%"></stop>
		</linearGradient>
	</defs>

	<circle 
	class="circle-red"
	cx="500" cy="500" r="200"
	stroke="url(#linearGradient-1)"
	/>
	<circle 
	class="circle-red-1"
	cx="500" cy="500" r="100"
	stroke="url(#linearGradient-1)"
	/>

</svg>
</template>

<style lang="less" scoped>
* {
	margin: 0; padding: 0;
}

.test {
	width: 100%;
	background: black;
	.circle-red {
		cx: 500;
		cy: 500;
		r: 200;
		stroke: url(#linearGradient-1);
		stroke-width: 15;
		stroke-linecap: round;
		stroke-dasharray: 1256;
		animation: dashing 2s ease-in-out 0s infinite;
		@keyframes dashing {
			0% {
				stroke-dashoffset: -1256;
				opacity: 0;
				// fill: red;
			}
			50% {
				stroke-dashoffset: 0;
				opacity: 1;
				// fill: green;
				// opacity: 0.6;
			}
			100% {
				stroke-dashoffset: 1256;
				opacity: 0;
				//stroke: yellow;
				// fill: red;
			}
		}
	}
	.circle-red-1 {
		cx: 500;
		cy: 500;
		r: 100;
		stroke-width: 15;
		stroke-linecap: round;
		stroke-dasharray: 314;
		animation: dashing1 2s linear 0s infinite;
		@keyframes dashing1 {
			0% {
				stroke-dashoffset: -314;
				// fill: red;
			}
			50% {
				stroke-dashoffset: 0;
				// fill: green;
				// opacity: 0.6;
			}
			100% {
				stroke-dashoffset: 314;
				// fill: red;
			}
		}
	}
}
</style>

<script>
var strokeCircle = {

}
module.exports = strokeCircle;
</script>
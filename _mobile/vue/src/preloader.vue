<template>
	<svg viewBox="0 0 120 120">
		<symbol id="s-circle">
			<circle r="10" cx="20" cy="20"></circle>
		</symbol>
		<g class="g-circles">
			<g class="g-circle" v-for="a in circles">
				<use xlink:href="#s-circle"/>
			</g>
		</g>
	</svg>
</template>

<style lang="less">
	BODY {
		background: 
			linear-gradient(45deg, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 52%), 
			linear-gradient(-45deg, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 52%);
		background-size: 1em 1em;
		background-color: #000;
	}

	svg {
		display: block;
		width: 30%;
		margin: auto;
		overflow: visible;
		//border: 1px solid red;
	}

	.g-circle {
		transform-origin: 60px 60px;
		fill: dodgerblue;
		fill-opacity: 0;
		animation: opacity 1.2s linear infinite;
		@keyframes opacity {
			3% {
				fill-opacity: 1;
			}
			75% {
				fill-opacity: 0;
			}
		}
		&:nth-child(12n+1) {
			animation-delay: -0.1s;
			transform: rotate(-30deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 2) {
			animation-delay: -0.2s;
			transform: rotate(-60deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 3) {
			animation-delay: -0.3s;
			transform: rotate(-90deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 4) {
			animation-delay: -0.4s;
			transform: rotate(-120deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 5) {
			animation-delay: -0.5s;
			transform: rotate(-150deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 6) {
			animation-delay: -0.6s;
			transform: rotate(-180deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 7) {
			animation-delay: -0.7s;
			transform: rotate(-210deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 8) {
			animation-delay: -0.8s;
			transform: rotate(-240deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 9) {
			animation-delay: -0.9s;
			transform: rotate(-270deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 10) {
			animation-delay: -1s;
			transform: rotate(-300deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 11) {
			animation-delay: -1.1s;
			transform: rotate(-330deg) translate(5px, 5px) scale(0.9);
		}
		&:nth-child(12n + 12) {
			animation-delay: -1.2s;
			transform: rotate(-360deg) translate(5px, 5px) scale(0.9);
		}
	}

</style>

<script>
	module.exports = {
		data: function(){
			return {
				circles: [0,1,2,3,4,5,6,7,8,9,10,11]
			}
		}
	}
</script>
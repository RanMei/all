<style lang="less" scoped>
	.ButtonRipple {
		background: #2196F3;
		overflow: hidden;
		.button {
			position: relative; display: block; overflow: hidden; z-index: 0;
			width: 40vw; height: 10vw;
			margin: 5vw auto 5vw auto;
			color: #6ab8f7;
			font-size: 4vw; font-weight: 100; text-align: center; line-height: 10vw;
			border-radius: 1vw;
			cursor: pointer;
			&.raised {
				transition: all 0.1s;
				background: #0c84e4;
				box-shadow: 0 1vw 0 #085a9b;
			}
			&.raised:active {
				background: #0c7dd8;
				box-shadow: 0 0 0 #085a9b;
				transform: translate3d(0,1vw,0);
			}
			.ripple {
				position: absolute; left: 0; top: -15vw;
				width: 40vw; height: 40vw;
				border-radius: 20vw;
				background: rgba(0, 0, 0, 0.25);;
				transform: scale(0);
				animation: ripple 1.5s infinite;
				@keyframes ripple {
					0% {
						transform: scale(0);
						opacity: 1;
					}
					100% {
						transform: scale(1);
						opacity: 0;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="ButtonRipple">
		<div class="button">
			<div class="ripple"></div>
			<span>Stark</span>
		</div>

		<div class="button raised">
			<div class="ripple"></div>
			<span>Lannister</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>
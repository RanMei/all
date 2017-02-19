<style lang="less" scoped>
	.Wave {
		width: 100%;
		background: #020438;
		font: 14px/1 'Open Sans', helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		.WATER {
			width: 80%;
			margin: auto;
			fill: orange;
			display: block;
		}

		.box {
			position: relative;
			width: 100%; height: 50vw;
			margin: auto; margin-top: 10vw;
			//transform: translate(-50%, -50%);
			background: #020438;
			//border-radius: 100%;
			overflow: hidden;
			@blue: #4D6DE3;
			.water {
				position: absolute; left: 0; top: 0;
				z-index: 2;
				width: 100%; height: 100%;
				transform: translate3d(0, 50%, 0);
				background: @blue;
				.wave {
					position: absolute; bottom: 100%;
					width: 200vw; height: 200*20/560vw;
				}
			}
			.wave_front {
				left: 0;
				fill: @blue;
				margin-bottom: -1px;
				animation: wave-front .7s infinite linear;
			}
			.wave_back {
				right: 0;
				fill: #C7EEFF;
				animation: wave-back 1.4s infinite linear;
			}
		}
		.box .percent {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 3;
			width: 100%;
			height: 100%;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			display: -webkit-flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			-ms-flex-pack: center;
			justify-content: center;
			color: #fff;
			font-size: 64px;
		}

		@keyframes wave-front {

			100% {
				transform: translate3d(-50%, 0, 0);
			}
		}

		@keyframes wave-back {
			100% {
				transform: translate3d(50%, 0, 0);
			}
		}
	}
</style>

<template>
	<div class="Wave">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;">
			<symbol id="wave">
				<path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
				<path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
				<path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
				<path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
			</symbol>
		</svg>

		<svg class="WATER" viewBox="0 0 560 20">
			<use xlink:href="#wave"></use>
		</svg>
		
		<div class="box">
			<!-- <div class="percent">
				<div class="percentNum" id="count">0</div>
				<div class="percentB">%</div>
			</div> -->
			<div id="water" class="water">
				<svg 
					class="wave wave_back"
					viewBox="0 0 560 20">
					<use xlink:href="#wave"></use>
				</svg>
				<svg 
					class="wave wave_front"
					viewBox="0 0 560 20" >
					<use xlink:href="#wave"></use>
				</svg>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function(){
			return {

			}
		}
	}
</script>
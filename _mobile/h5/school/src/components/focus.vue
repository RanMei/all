<template>
<div class="focus">
	<div class="face">
		<img class="cloud_1" :src="img.cloud_1"/>
		<img class="cloud_2" :src="img.cloud_2"/>
		<img class="cloud_3" :src="img.cloud_3"/>
		<img class="cloud_4" :src="img.cloud_4"/>
		<img class="clouds_1" :src="img.clouds_1"/>
		<img class="clouds_2" :src="img.clouds_2"/>
		<img class="logos" :src="img.logos"/>
		<img class="planet" :src="img.planet"/>
		<img class="clouds_3" :src="img.clouds_3"/>
		<img class="grass" :src="img.grass"/>
		<img class="trees" :src="img.trees"/>
		<img class="car" :src="img.car"/>
	</div>
	<div class="avatar">
		<img :src="avatar"/>
	</div>
</div>
</template>

<style lang="less" scoped>
.focus {
	position: relative;
	width: 100%;
	.face {
		position: relative;
		width: 100%; height: 5.8rem;
		overflow: hidden;
		background: #5acce6;
		.cloud_1 {
			position: absolute; left: 0.32rem; top: 0.75rem;
			width: 0.52rem;
			animation: cloud_1 15s linear infinite;
			@keyframes cloud_1 {
				0% {
					transform: translate3d(-200%,0,0);
				}
				100% {
					transform: translate3d(1500%,0,0);
				}
			}
		}
		.cloud_2 {
			position: absolute; left: 0.75rem; top: 2.25rem;
			width: 0.87rem;
			animation: cloud_2 10s linear infinite;
			@keyframes cloud_2 {
				0% {
					transform: translate3d(-200%,0,0);
				}
				100% {
					transform: translate3d(900%,0,0);
				}
			}
		}
		.cloud_3 {
			position: absolute; left: 4.6rem; top: -0.1rem;
			width: 0.9rem;
			animation: cloud_3 12s linear infinite;
			@keyframes cloud_3 {
				0% {
					transform: translate3d(-650%,0,0);
				}
				100% {
					transform: translate3d(300%,0,0);
				}
			}
		}
		.cloud_4 {
			position: absolute; left: 6.25rem; top: 1.32rem;
			width: 0.48rem;
			animation: cloud_4 20s linear infinite;
			@keyframes cloud_4 {
				0% {
					transform: translate3d(-1500%,0,0);
				}
				100% {
					transform: translate3d(300%,0,0);
				}
			}
		}
		.clouds_1 {
			position: absolute; left: -0rem; top: 2.2rem;
			width: 7.2rem;
			animation: twinkle 3s linear infinite;
			@keyframes twinkle {
				0% {
					opacity: 1;
				}
				50% {
					opacity: 0.2;
				}
				100% {
					opacity: 1;
				}
			}
		}
		.clouds_2 {
			position: absolute; left: -0rem; top: 2.9rem;
			width: 7.2rem;
			animation: twinkle2 3s linear infinite;
			@keyframes twinkle2 {
				0% {
					opacity: 0.2;
				}
				50% {
					opacity: 1;
				}
				100% {
					opacity: 0.2;
				}
			}
		}
		.logos {
			position: absolute; left: 0.14rem; top: 0.2rem;
			width: 2.88rem;
		}
		.planet {
			position: absolute; left: 0.7rem; top: 0.7rem;
			width: 5.8rem;
		}
		.clouds_3 {
			position: absolute; left: 0; top: 3.2rem;
			width: 100%;
		}
		.grass {
			position: absolute; left: 0; top: 5rem;
			width: 100%;
		}
		.trees {
			position: absolute; left: 5.88rem; top: 4.24rem;
			width: 1.35rem;
		}
		.car {
			position: absolute; left: 0.5rem; top: 4.75rem;
			width: 0.9rem;
		}
	}
	.avatar {
		box-sizing: border-box;
		position: absolute; left: 2.85rem; top: 3.9rem;
		width: 1.5rem; height: 1.5rem;
		border-radius: 5rem;
		border: 0.08rem solid #eeeeee;
		overflow: hidden;
		img {
			margin-left: -0.08rem; margin-top: -0.08rem;
			width: 1.5rem; height: 1.5rem;
		}
	}
	.title {
		width: 100%;
	}
}
</style>

<script>
module.exports = {
	props: ['avatar'],
	data: function(){
		return {
			img: {
				cloud_1: './img/face/cloud_1.png',
				cloud_2: './img/face/cloud_2.png',
				cloud_3: './img/face/cloud_3.png',
				cloud_4: './img/face/cloud_4.png',
				clouds_1: './img/face/clouds_1.png',
				clouds_2: './img/face/clouds_2.png',
				logos: './img/face/logos.png',
				planet: './img/face/planet.png',
				clouds_3: './img/face/clouds_3.png',
				grass: './img/face/grass.png',
				trees: './img/face/trees.png',
				car: './img/face/car.png'
			}
		}
	}
}
</script>
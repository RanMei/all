<style lang="less">
.face {
	position: relative;
	width: 100%; height: 5.8rem;
	background: #5acce6;
	.cloud_1 {
		position: absolute; left: 0.32rem; top: 0.75rem;
		width: 0.52rem;
		animation: cloud_1 10s linear infinite;
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
		animation: cloud_2 15s linear infinite;
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
		animation: cloud_3 20s linear infinite;
		@keyframes cloud_3 {
			0% {
				transform: translate3d(-650%,0,0);
			}
			100% {
				transform: translate3d(300%,0,0);
			}
		}
	}
}
</style>

<script>
module.exports = {
	template: `
		<div class="face">
			<img class="cloud_1" src="./img/face/cloud_1.png"/>
			<img class="cloud_2" src="./img/face/cloud_2.png"/>
			<img class="cloud_3" src="./img/face/cloud_3.png"/>
		</div>
	`,
	data: function(){
		return {

		}
	}
}
</script>
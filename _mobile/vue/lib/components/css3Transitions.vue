<style lang="less" scoped>
</style>

<script>
module.exports = {
	template: `
		<li class="item">
			<h2>
				CSS3 Transitions
			</h2>
			<div class="strip">
				<div class="left">
					<table><tr><th>
						transform: translate3d(20vw,5vw,0);
					</th></tr></table>
				</div>
				<img class="r2d2 translate" src="img/r2d2.png"/>
			</div>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					transform: scale3d(1.2,1.2,1);
					</th></tr></table>
				</div>
				<img class="r2d2 scale3d" src="img/r2d2.png"/>
			</div>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					transform: skew(30deg,30deg);
					</th></tr></table>
				</div>
				<img class="r2d2 skew" src="img/r2d2.png"/>
			</div>
		</li>
		<li class="item">
			<h2>
				CSS3 Transitions
			</h2>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					transform: rotateY(360deg);
					</th></tr></table>
				</div>
				<img class="r2d2 rotateY" src="img/r2d2.png"/>
			</div>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					transform: rotateX(60deg);
					</th></tr></table>
				</div>
				<div class="square0 rotateX"></div>
			</div>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					perspective: 1000px;<br/>
					transform: rotateX(60deg);
					</th></tr></table>
				</div>
				<div class="space">
					<div class="square rotate"></div>
				</div>
			</div>
		</li>
		<li class="item">
			<h2>
				CSS3 Transitions
			</h2>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					opacity: 0;
					</th></tr></table>
				</div>
				<img class="r2d2 opacity" src="img/r2d2.png"/>
			</div>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					background: red;
					</th></tr></table>
				</div>
				<div class="space">
					<div class="square background"></div>
				</div>
			</div>
			<div class="strip">
				<div class="left">
					<table><tr><th>
					box-shadow: 0 0 10vw 1vw green;
					</th></tr></table>
				</div>
				<div class="space">
					<div class="square box-shadow"></div>
				</div>
			</div>
		</li>
	`
}
</script>
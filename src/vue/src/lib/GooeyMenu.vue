<style lang="less" scoped>
.GooeyMenuContainer {
	background: #8bc34a;
	overflow: hidden;
}
.GooeyMenu {
	position: relative;
	width: 20vw; height: 20vw;
	margin: auto; margin-top: 30vw; margin-bottom: 30vw;
	box-sizing: border-box;
	font-size: 20px;
	text-align: left;
	//filter: url("#goo");
	svg {
		margin: auto;
		width: 20vw; height: 20vw;
		margin-top: 20vw;
		background: orange;
		display: none;
		//filter: url("#goo");
	}
	.menu-open {
		display: none;
	}
	.menu-item, .menu-open-button {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100%;
		transform: translate3d(0, 0, 0);
		transition: transform ease-out 200ms;
		background: #e91e63;
		border-radius: 100%;
		color: white;
		text-align: center;
		line-height: 20vw;
	}
	.menu-open-button {
		z-index: 2;
		transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transition-duration: 400ms;
		transform: scale(1.1, 1.1) translate3d(0, 0, 0);
		cursor: pointer;
		&:hover {
			transform: scale(1.2, 1.2) translate3d(0, 0, 0);
		}
	}

	.hamburger {
		position: absolute; left: 29%; top: 47%;
		width: 42%; height: 6%;
		background: white;
		display: block;
		transition: transform 200ms;
	}

	.hamburger-1 {
		transform: translate3d(0, -200%, 0);
	}

	.hamburger-2 {
		transform: translate3d(0, 0, 0);
	}

	.hamburger-3 {
		transform: translate3d(0, 200%, 0);
	}

	.menu-open:checked + .menu-open-button .hamburger-1 {
		transform: translate3d(0, 0, 0) rotate(45deg);
	}
	.menu-open:checked + .menu-open-button .hamburger-2 {
		transform: translate3d(0, 0, 0) scale(0.1, 1);
	}
	.menu-open:checked + .menu-open-button .hamburger-3 {
		transform: translate3d(0, 0, 0) rotate(-45deg);
	}



	.menu-item:hover {
		background: white;
		color: #e91e63;
	}
	.menu-item {
		font-size: 200%;
		transition-duration: 180ms;
	}

	.menu-open:checked + .menu-open-button {
		transition-timing-function: linear;
		transition-duration: 200ms;
		transform: scale(0.8, 0.8) translate3d(0, 0, 0);
	}

	.menu-open:checked ~ .menu-item {
		transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
	}
	.menu-open:checked ~ .menu-item:nth-child(3) {
		transition-duration: 180ms;
		transform: translate3d(0, -120%, 0);
	}
	.menu-open:checked ~ .menu-item:nth-child(4) {
		transition-duration: 280ms;
		transform: translate3d(100%, -58%, 0);
	}
	.menu-open:checked ~ .menu-item:nth-child(5) {
		transition-duration: 380ms;
		transform: translate3d(100%, 58%, 0);
	}
	.menu-open:checked ~ .menu-item:nth-child(6) {
		transition-duration: 480ms;
		transform: translate3d(0, 120%, 0);
	}
	.menu-open:checked ~ .menu-item:nth-child(7) {
		transition-duration: 580ms;
		transform: translate3d(-100%, 58%, 0);
	}
	.menu-open:checked ~ .menu-item:nth-child(8) {
		transition-duration: 680ms;
		transform: translate3d(-100%, -58%, 0);
	}
}
</style>

<template>
<div class="GooeyMenuContainer">
	<div class="GooeyMenu">
		<!-- CSS Gooey Menu (Version 2) -->
		<input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
		<label class="menu-open-button" for="menu-open">
			<span class="hamburger hamburger-1"></span>
			<span class="hamburger hamburger-2"></span>
			<span class="hamburger hamburger-3"></span>
		</label>

		<a class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
		<a class="menu-item"> <i class="fa fa-plus"></i> </a>
		<a class="menu-item"> <i class="fa fa-heart"></i> </a>
		<a class="menu-item"> <i class="fa fa-envelope"></i> </a>
		<a class="menu-item"> <i class="fa fa-cog"></i> </a>
		<a class="menu-item"> <i class="fa fa-ellipsis-h"></i> </a>

		<!-- filters -->
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
			viewBox="0 0 100 100">
			<circle 
				cx="50" cy="50" r="20" fill="red"/>
			<defs>
				<filter id="shadowed-goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
					<feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
					<feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
					<feOffset in="shadow" dx="1" dy="1" result="shadow" />
					<feComposite in2="shadow" in="goo" result="goo" />
					<feComposite in2="goo" in="SourceGraphic" result="mix" />
				</filter>
				<filter id="goo" x="-300%" y="-300%" width="600%" height="600%">
					<feGaussianBlur id="feGB" in="SourceGraphic" result="blur" stdDeviation="8" />
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
					<feComposite in2="goo" in="SourceGraphic" result="mix" />
				</filter>
			</defs>
		</svg>
	</div>
</div>
</template>

<script type="text/javascript">
	export default {
		mounted: function(){
			function App(){
				this.elem = document.querySelector('#feGB');
				this.init();
			}
			App.prototype = {
				init: function(){
					this.setStdDeviation();
					window.addEventListener('resize',this.setStdDeviation.bind(this));
				},
				setStdDeviation: function(){
					var self = this;
					setTimeout(function(){
						self.width = window.innerWidth;
						var deviation = 12*self.width/720;
						self.elem.setAttribute('stdDeviation',deviation);
					},300);
				}
			}
			new App();
		}
	}
</script>
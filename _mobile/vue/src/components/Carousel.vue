<template>
<!-- CSS 3D Carousel -->
<div class="container">
	<div class="carousel"
	:style=" 'transform: rotateY('+rotateY+'deg);-webkit-transform: rotateY('+rotateY+'deg);' ">
		<div class="item a">A</div>
		<div class="item b">B</div>
		<div class="item c">C</div>
		<div class="item d">D</div>
		<div class="item e">E</div>
		<div class="item f">F</div>
	</div>
	<div class="next" @click="next">Next</div>
	<div class="prev" @click="prev">Prev</div>
</div>
</template>

<style lang="less" scoped>
@w: 2.5rem;
.container {
	position: relative;
	width: 100%;
	margin: auto;
	perspective: 1000px;
	overflow: hidden;
	._controls {
		height: 2rem;
		z-index: -1;
	}
	.carousel {
		position: relative;
		width: 2.5rem; height: 2rem;
		margin: 2rem auto;
		transform-style: preserve-3d;
		transition: transform 1s;
	}
}


.item {
	display: block;
	position: absolute;
	width: 100%; height: 100%;
	background: #000;
	line-height: 2rem;
	font-size: 0.2rem;
	text-align: center;
	color: #FFF;
	opacity: 0.95;
	border-radius: 0.05rem;
}

.a {
	transform: rotateY(0deg) translateZ(2.5rem);
	background: #ed1c24;
}
.b {
	transform: rotateY(60deg) translateZ(2.5rem);
	background: #0072bc;
}
.c {
	transform: rotateY(120deg) translateZ(2.5rem);
	background: #39b54a;
}
.d {
	transform: rotateY(180deg) translateZ(2.5rem);
	background: #f26522;
}
.e {
	transform: rotateY(240deg) translateZ(2.5rem);
	background: #630460;
} 
.f {
	transform: rotateY(300deg) translateZ(2.5rem);
	background: #8c6239;
}

.next, .prev {
	color: #444;
	position: absolute; top: 0;
	padding: 0.1rem;
	cursor: pointer;
	background: #CCC;
	border-radius: 5px;
	font-size: 0.3rem;
	border-top: 1px solid #FFF;
	box-shadow: 0 5px 0 #999;
	transition: box-shadow 0.1s, top 0.1s;
}
.next:hover, .prev:hover { color: #000; }
.next:active, .prev:active {
	box-shadow: 0 1px 0 #999;
}
.next { right: 0; }
.prev { left: 0; }
</style>

<script>
export default {
	data: function(){
		return {
			rotateY: 0
		}
	},
	methods: {
		next: function(){
			this.rotateY -= 60;
		},
		prev: function(){
			this.rotateY += 60;
		}
	}
}
</script>
<template>
<li class="item">
	<h2>SVG的本质</h2>
	<p>
		一张SVG图片本质上是由一些路径围成的色块组成的。<br/>
	</p>
	<img class="svg-essence" :src="img.svg_essence"/>
</li>
<li class="item">
	<h2>Color-changing Animation</h2>
	<div class="two">
		<div class="col normal">
			Example:<br/>
			&emsp;sunset<br/>
		</div>
		<div class="col">
			<img class="pen" :src="img.orange"/>
		</div>
	</div>
</li>
<li class="item">
	<h2>SVG Stroke Animation</h2>
	<div class="two">
		<div class="col normal">
			Examples:<br/>
			&emsp;stroke-arsenal<br/>
			&emsp;stroke-square<br/>
			&emsp;stroke-circle<br/>
			&emsp;stroke-gameboy<br/>
			&emsp;stroke-qq<br/>
		</div>
		<div class="col">
			<img class="pen" :src="img.pen"/>
		</div>
	</div>
</li>
<li class="item">
	<h2>Shape-morphing Animation</h2>
	<div class="two">
		<div class="col normal">
			Examples:<br/>
			&emsp;morphing-phones<br/>
		</div>
		<div class="col">
			<img class="pen" :src="img.transformer"/>
		</div>
	</div>
</li>	
</template>

<style lang="less" scoped>
.svg-essence {
	width: 50%;
	margin: auto;
}
.pen {
	width: 90%;
	margin: auto;
}
</style>

<script>
module.exports = {
	data: function(){
		return {
			img: {
				svg_essence: 'img/svg_essence.jpg',
				pen: 'img/pen.jpg',
				orange: 'img/orange.png',
				transformer: 'img/transformer.jpeg'
			}
		}
	}
}
</script>
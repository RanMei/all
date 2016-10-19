<template>
<li class="item">
	<h2>
		制作网页动画的技术
	</h2>
	<ul class="three">
		<li>
			<img :src="css3"/>
			<h3>CSS3</h3>
		</li>
		<li>
			<img :src="svg"/>
			<h3>SVG</h3>
		</li>
		<li>
			<img :src="html5"/>
			<h3>Canvas</h3>
		</li>
	</ul>
</li>
</template>

<style lang="less" scoped>
.three {
	overflow: hidden;
	li {
		width: 33.333333%;
		float: left;
		img {
			height: 20vw;
			margin: auto; margin-top: 10vw;
		}
	}
}
</style>

<script>
import {path} from '../config.js';
module.exports = {
	data: function(){
		return {
			css3: path+'css3.svg',
			svg: path+'svg.png',
			html5: path+'html5.svg'
		}
	}
};
</script>
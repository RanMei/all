var fs = require('fs');

// var files = [
// 	'./containers/preloader-container.vue',
// 	'./containers/swiper-container.js',
// 	'./containers/svg-qq-container.js',
// 	'./components/orientation.vue',
// 	'./components/3d.vue',
// 	'./components/3d-cube.vue',
// 	'./components/Heart.vue',
// 	'./canvas/Scope.vue',
// 	'./components/StrokeCircle.vue',
// 	'./components/Carousel.vue',
// 	'./components/Panoramic.vue',
// 	'./canvas/Rain.vue',
// 	'./canvas/Circles.vue',
// 	'./canvas/Snowfall.vue',
// 	'./canvas/NeonHexagons.vue'
// ];
var files = [
	'./generate/src/Scope.vue',
	'./generate/src/Carousel.vue'
];

files.forEach((a,i)=>{
	var src = fs.readFileSync( a ).toString().replace(/\r/g,'');
	//console.log(src)
	var name = a.split('/').pop().replace(/\.(.+)/,'');
	var content = src.replace(/\n/g,'').match(/<template>.+<\/template>/)[0].replace(/(<template>)|<\/template>/g,'');
	var style = src.replace(/\n/g,'').match(/<style>.+<\/style>/)[0].replace(/(<style>)|<\/style>/g,'');
	var script = src.replace(/\n/g,'').match(/<script>.+<\/script>/)[0].replace(/(<script>)|<\/script>/g,'');
	var html =
`<!DOCTYPE html>
<html>
	<head>
		<title>${name}</title>
		<style>
		${style}
		</style>
	</head>

	<body>
		<div class="topbar"></div>
		${content}
		<script>
			${script}
		</script>
	</body>
</html>`;
	fs.writeFileSync( './json/tpl/'+name+'.html',html );
})
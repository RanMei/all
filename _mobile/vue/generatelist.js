var fs = require('fs');

var files = [
	'./containers/preloader-container.vue',
	'./containers/swiper-container.js',
	'./containers/svg-qq-container.js',
	'./components/orientation.vue',
	'./components/3d.vue',
	'./components/3d-cube.vue',
	'./components/Heart.vue',
	'./canvas/Scope.vue',
	'./components/StrokeCircle.vue',
	'./components/Carousel.vue',
	'./components/Panoramic.vue',
	'./canvas/Rain.vue',
	'./canvas/Circles.vue',
	'./canvas/Snowfall.vue',
	'./canvas/NeonHexagons.vue'
];

var list = [];
files.forEach(a=>{
	list.push({
		path: a.split('/').pop().split('.')[0].toLowerCase(),
		file: a
	})
})

var text = `var list = [`

list.forEach((a,i)=>{
	text += 
	`{
		path:'${a.path}',
		component:r=>{
			require.ensure([],()=>{
				r( require('${a.file}') )
			},\'${a.path}\')
		}
	}`;
	text += i===list.length-1?'':',';
})

text.replace(/\,$/,'');

text += `];export {list};`

fs.writeFileSync( './_mobile/vue/src/list.js',text );
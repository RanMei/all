const items = [{
	name: 'Preloader',
	name_: 'Preloader',
	path: '../lib/Preloader.vue',
	tags: ['图标','动画'],
	comments: {
		designer: '作为一种思维的方式，它被普遍认为具有综合处理能力的性质，能够理解问题产生的背景、能够催生洞察力及解决方法，并能够理性地分析和找出最合适的解决方案。',
		developer: '作为一种思维的方式，它被普遍认为具有综合处理能力的性质，能够理解问题产生的背景、能够催生洞察力及解决方法，并能够理性地分析和找出最合适的解决方案。'
	},
	examples: [
		'https://ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.html?tf=1'
	]
},{
	name: 'Card',
	name_: '卡片翻转',
	path: '../lib/Card.vue'
},{
	name: 'CardsTwo',
	name_: '卡片切换',
	path: '../lib/CardsTwo.vue'
},{
	name: 'GooeyMenu',
	name_: 'GooeyMenu',
	path: '../lib/GooeyMenu.vue'
},{
	name: 'Wave',
	name_: 'Wave',
	path: '../lib/Wave.vue'
},{
	name: '3dCube',
	name_: '3dCube',
	path: '../lib/3dCube.vue'
},{
	name: 'ButtonRipple',
	name_: 'ButtonRipple',
	path: '../lib/ButtonRipple.vue'
},{
	name: 'SvgPenguin',
	name_: 'QQ阅读LOGO描边动画',
	path: '../lib/SvgPenguin.vue'
},{
	name: 'Carousel',
	name_: 'Carousel',
	path: '../lib/Carousel.vue'
},{
	name: 'StrokeCircle',
	name_: 'StrokeCircle',
	path: '../lib/StrokeCircle.vue'
},{
	name: 'MorphingPhones',
	name_: 'MorphingPhones',
	path: '../lib/MorphingPhones.vue'
},{
	name: 'TextSmoky',
	name_: 'TextSmoky',
	path: '../lib/TextSmoky.vue'
},{
	name: 'Ribbon',
	name_: 'Ribbon',
	path: '../lib/Ribbon.vue'

// },{
// 	name: 'Orientation',
// 	component: 'Orientation',
// 	path: '../lib/Orientation.vue'
// },{
// 	name: 'TextMachineGun',
// 	component: 'TextMachineGun',
// 	path: '../lib/TextMachineGun.vue'
// },{
// 	name: 'CanvasCounter',
// 	component: 'CanvasCounter',
// 	path: '../lib/CanvasCounter.vue'
// },{



// 	name: 'Blizzard',
// 	component: 'Blizzard',
// 	path: '../canvas/Blizzard.js'
// },{
// 	name: 'Confetti',
// 	component: 'Confetti',
// 	path: '../canvas/Confetti.js'
// },{
// 	name: 'Rain',
// 	component: 'Rain',
// 	path: '../canvas/Rain.js'
// },{
// 	name: 'Circles',
// 	component: 'Circles',
// 	path: '../canvas/Circles.js'
// },{
// 	name: 'Snow',
// 	component: 'Snow',
// 	path: '../canvas/Snow.js'
// },{
// 	name: 'Heart',
// 	component: 'Heart',
// 	path: '../canvas/Heart.vue'
// },{
// 	name: 'Scope',
// 	tags: ['canvas'],
// 	component: 'Scope',
// 	path: '../Canvas/Scope.js'
}];

items.forEach(a=>{
	if( a.examples===undefined ){
		a.examples = ['https://ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.html?tf=1'];
	}
})

module.exports = items;
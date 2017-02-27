const items = [{
	name: 'Preloader',
	name_: 'Preloader',
	path: '../lib/Preloader.vue',
	date: '2016-10-01 08:09:04',
	class_: '元素',
	sub_class: '图标',
	tags: ['图标','SVG'],
	comments: {
		designer: '作为一种思维的方式，它被普遍认为具有综合处理能力的性质，能够理解问题产生的背景、能够催生洞察力及解决方法，并能够理性地分析和找出最合适的解决方案。',
		developer: '作为一种思维的方式，它被普遍认为具有综合处理能力的性质，能够理解问题产生的背景、能够催生洞察力及解决方法，并能够理性地分析和找出最合适的解决方案。'
	},
	examples: [{
		name: '冬牧场', 
		url: 'https://ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.html?tf=1'
	}]
},{
	name: 'Card',
	name_: '卡片翻转',
	path: '../lib/Card.vue',
	date: '2016-11-10 08:09:04',
	class_: '组件',
	tags: ['CSS3'],
},{
	name: 'CardsTwo',
	name_: '卡片切换',
	path: '../lib/CardsTwo.vue',
	date: '2016-11-01 08:09:04',
	class_: '组件',
	tags: ['CSS3'],
},{
	name: 'GooeyMenu',
	name_: 'GooeyMenu',
	path: '../lib/GooeyMenu.vue',
	date: '2016-09-01 08:09:04',
	class_: '组件',
	sub_class: '',
	tags: ['CSS3'],
},{
	name: 'Wave',
	name_: 'Wave',
	path: '../lib/Wave.vue',
	date: '2016-09-10 08:09:04',
	class_: '组件',
	tags: ['SVG']
},{
	name: '3dCube',
	name_: '3dCube',
	path: '../lib/3dCube.vue',
	date: '2016-09-21 08:09:04',
	class_: '组件',
	tags: ['3D']
},{
	name: 'ButtonRipple',
	name_: 'ButtonRipple',
	path: '../lib/ButtonRipple.vue',
	date: '2016-09-03 08:09:04',
	class_: '元素',
	tags: ['按钮','CSS3'],
},{
	name: 'SvgPenguin',
	name_: 'QQ阅读LOGO描边动画企鹅',
	path: '../lib/SvgPenguin.vue',
	date: '2016-10-05 08:09:04',
	class_: '组件',
	tags: ['SVG','描边']
},{
	name: 'Carousel',
	name_: 'Carousel',
	path: '../lib/Carousel.vue',
	date: '2016-12-01 08:09:04',
	class_: '组件',
	tags: ['3D','轮播']
},{
	name: 'StrokeCircle',
	name_: 'StrokeCircle',
	path: '../lib/StrokeCircle.vue',
	date: '2016-10-02 08:09:04',
	class_: '元素',
	tags: ['图标','SVG']
},{
	name: 'MorphingPhones',
	name_: 'MorphingPhones',
	path: '../lib/MorphingPhones.vue',
	date: '2016-09-08 08:09:04',
	class_: '组件',
	tags: ['SVG','形变']
},{
	name: 'TextSmoky',
	name_: 'TextSmoky',
	path: '../lib/TextSmoky.vue',
	date: '2016-12-03 08:09:04',
	class_: '元素',
	tags: ['文字','CSS3']
},{
	name: 'Fader',
	name_: 'Fader',
	path: '../lib/Fader.vue',
	date: '2017-02-27 08:09:04',
	class_: '组件',
	tags: ['轮播']

// },{
// 	name: 'Ribbon',
// 	name_: 'Ribbon',
// 	path: '../lib/Ribbon.vue',
// 	date: '2016-08-01 08:09:04',
// 	tags: ['CSS3'],

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
		a.examples = [{
			name: '冬牧场', 
			url: 'https://ptsolomo.reader.qq.com/book_res/event/act170201/adr/farm.html?tf=1'
		}];
	}
})

module.exports = items;
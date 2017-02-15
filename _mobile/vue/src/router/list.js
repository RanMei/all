var list = [{
	path:'preloader',
	//component: require('../lib/Preloader.vue')
	component: resolve => {
		require.ensure( ['../lib/Preloader.vue'], ()=>{
			resolve( require('../lib/Preloader.vue') );
		});
	}
},{
	path:'card',
	//component: require('../lib/Card.vue')
	component: resolve => {
		require.ensure( ['../lib/Card.vue'], ()=>{
			resolve( require('../lib/Card.vue') );
		});
	}
},{
	path:'cardstwo',
	//component: require('../lib/CardsTwo.vue')
	component: resolve => {
		require.ensure( ['../lib/CardsTwo.vue'], ()=>{
			resolve( require('../lib/CardsTwo.vue') );
		});
	}
},{
	path:'gooeymenu',
	//component: require('../lib/GooeyMenu.vue')
	component: resolve => {
		require.ensure( ['../lib/GooeyMenu.vue'], ()=>{
			resolve( require('../lib/GooeyMenu.vue') );
		});
	}
},{
	path:'wave',
	//component: require('../lib/Wave.vue')
	component: resolve => {
		require.ensure( ['../lib/Wave.vue'], ()=>{
			resolve( require('../lib/Wave.vue') );
		});
	}
},{
	path:'3dcube',
	//component: require('../lib/3dCube.vue')
	component: resolve => {
		require.ensure( ['../lib/3dCube.vue'], ()=>{
			resolve( require('../lib/3dCube.vue') );
		});
	}
},{
	path:'buttonripple',
	//component: require('../lib/ButtonRipple.vue')
	component: resolve => {
		require.ensure( ['../lib/ButtonRipple.vue'], ()=>{
			resolve( require('../lib/ButtonRipple.vue') );
		});
	}
},{
	path:'svgpenguin',
	//component: require('../lib/SvgPenguin.vue')
	component: resolve => {
		require.ensure( ['../lib/SvgPenguin.vue'], ()=>{
			resolve( require('../lib/SvgPenguin.vue') );
		});
	}
},{
	path:'carousel',
	//component: require('../lib/Carousel.vue')
	component: resolve => {
		require.ensure( ['../lib/Carousel.vue'], ()=>{
			resolve( require('../lib/Carousel.vue') );
		});
	}
},{
	path:'strokecircle',
	//component: require('../lib/StrokeCircle.vue')
	component: resolve => {
		require.ensure( ['../lib/StrokeCircle.vue'], ()=>{
			resolve( require('../lib/StrokeCircle.vue') );
		});
	}
},{
	path:'orientation',
	//component: require('../lib/Orientation.vue')
	component: resolve => {
		require.ensure( ['../lib/Orientation.vue'], ()=>{
			resolve( require('../lib/Orientation.vue') );
		});
	}
},{
	path:'morphingphones',
	//component: require('../lib/MorphingPhones.vue')
	component: resolve => {
		require.ensure( ['../lib/MorphingPhones.vue'], ()=>{
			resolve( require('../lib/MorphingPhones.vue') );
		});
	}
},{
	path:'textmachinegun',
	//component: require('../lib/TextMachineGun.vue')
	component: resolve => {
		require.ensure( ['../lib/TextMachineGun.vue'], ()=>{
			resolve( require('../lib/TextMachineGun.vue') );
		});
	}
},{
	path:'textsmoky',
	//component: require('../lib/TextSmoky.vue')
	component: resolve => {
		require.ensure( ['../lib/TextSmoky.vue'], ()=>{
			resolve( require('../lib/TextSmoky.vue') );
		});
	}
},{
	path:'ribbon',
	//component: require('../lib/Ribbon.vue')
	component: resolve => {
		require.ensure( ['../lib/Ribbon.vue'], ()=>{
			resolve( require('../lib/Ribbon.vue') );
		});
	}
},{
	path:'canvascounter',
	//component: require('../lib/CanvasCounter.vue')
	component: resolve => {
		require.ensure( ['../lib/CanvasCounter.vue'], ()=>{
			resolve( require('../lib/CanvasCounter.vue') );
		});
	}
}];
export {list};
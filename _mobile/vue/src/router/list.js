var list = [{
	path:'preloader',
	component: resolve => {
		require.ensure( ['../lib/Preloader.vue'], ()=>{
			resolve( require('../lib/Preloader.vue') );
		});
	}
},{
	path:'card',
	component: resolve => {
		require.ensure( ['../lib/Card.vue'], ()=>{
			resolve( require('../lib/Card.vue') );
		});
	}
},{
	path:'gooeymenu',
	component: resolve => {
		require.ensure( ['../lib/GooeyMenu.vue'], ()=>{
			resolve( require('../lib/GooeyMenu.vue') );
		});
	}
},{
	path:'wave',
	component: resolve => {
		require.ensure( ['../lib/Wave.vue'], ()=>{
			resolve( require('../lib/Wave.vue') );
		});
	}
},{
	path:'3dcube',
	component: resolve => {
		require.ensure( ['../lib/3dCube.vue'], ()=>{
			resolve( require('../lib/3dCube.vue') );
		});
	}
},{
	path:'buttonripple',
	component: resolve => {
		require.ensure( ['../lib/ButtonRipple.vue'], ()=>{
			resolve( require('../lib/ButtonRipple.vue') );
		});
	}
},{
	path:'svgpenguin',
	component: resolve => {
		require.ensure( ['../lib/SvgPenguin.vue'], ()=>{
			resolve( require('../lib/SvgPenguin.vue') );
		});
	}
},{
	path:'carousel',
	component: resolve => {
		require.ensure( ['../lib/Carousel.vue'], ()=>{
			resolve( require('../lib/Carousel.vue') );
		});
	}
},{
	path:'strokecircle',
	component: resolve => {
		require.ensure( ['../lib/StrokeCircle.vue'], ()=>{
			resolve( require('../lib/StrokeCircle.vue') );
		});
	}
},{
	path:'orientation',
	component: resolve => {
		require.ensure( ['../lib/Orientation.vue'], ()=>{
			resolve( require('../lib/Orientation.vue') );
		});
	}
},{
	path:'morphingphones',
	component: resolve => {
		require.ensure( ['../lib/MorphingPhones.vue'], ()=>{
			resolve( require('../lib/MorphingPhones.vue') );
		});
	}
},{
	path:'rain',
	component: resolve => {
		require.ensure( ['../canvas/Rain.vue'], ()=>{
			resolve( require('../canvas/Rain.vue') );
		});
	}
},{
	path:'snowfall',
	component: resolve => {
		require.ensure( ['../canvas/Snowfall.vue'], ()=>{
			resolve( require('../canvas/Snowfall.vue') );
		});
	}
},{
	path:'heart',
	component: resolve => {
		require.ensure( ['../canvas/Heart.vue'], ()=>{
			resolve( require('../canvas/Heart.vue') );
		});
	}
},{
	path:'scope',
	component: resolve => {
		require.ensure( ['../Canvas/Scope.vue'], ()=>{
			resolve( require('../Canvas/Scope.vue') );
		});
	}
}];
export {list};
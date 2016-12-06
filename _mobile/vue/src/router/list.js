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
		require.ensure( ['../components/Card.vue'], ()=>{
			resolve( require('../components/Card.vue') );
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
		require.ensure( ['../components/3dCube.vue'], ()=>{
			resolve( require('../components/3dCube.vue') );
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
		require.ensure( ['../components/SvgPenguin.vue'], ()=>{
			resolve( require('../components/SvgPenguin.vue') );
		});
	}
},{
	path:'carousel',
	component: resolve => {
		require.ensure( ['../components/Carousel.vue'], ()=>{
			resolve( require('../components/Carousel.vue') );
		});
	}
},{
	path:'strokecircle',
	component: resolve => {
		require.ensure( ['../components/StrokeCircle.vue'], ()=>{
			resolve( require('../components/StrokeCircle.vue') );
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
	path:'heart',
	component: resolve => {
		require.ensure( ['../components/Heart.vue'], ()=>{
			resolve( require('../components/Heart.vue') );
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
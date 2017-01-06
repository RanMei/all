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
	path:'cardstwo',
	component: resolve => {
		require.ensure( ['../lib/CardsTwo.vue'], ()=>{
			resolve( require('../lib/CardsTwo.vue') );
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
	path:'machineguntext',
	component: resolve => {
		require.ensure( ['../lib/MachineGunText.vue'], ()=>{
			resolve( require('../lib/MachineGunText.vue') );
		});
	}
},{
	path:'blizzard',
	component: resolve => {
		require.ensure( ['../canvas/Blizzard.js'], ()=>{
			resolve( require('../canvas/Blizzard.js') );
		});
	}
},{
	path:'confetti',
	component: resolve => {
		require.ensure( ['../canvas/Confetti.js'], ()=>{
			resolve( require('../canvas/Confetti.js') );
		});
	}
},{
	path:'rain',
	component: resolve => {
		require.ensure( ['../canvas/Rain.js'], ()=>{
			resolve( require('../canvas/Rain.js') );
		});
	}
},{
	path:'circles',
	component: resolve => {
		require.ensure( ['../canvas/Circles.js'], ()=>{
			resolve( require('../canvas/Circles.js') );
		});
	}
},{
	path:'snow',
	component: resolve => {
		require.ensure( ['../canvas/Snow.js'], ()=>{
			resolve( require('../canvas/Snow.js') );
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
		require.ensure( ['../Canvas/Scope.js'], ()=>{
			resolve( require('../Canvas/Scope.js') );
		});
	}
}];
export {list};
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
	path:'machineguntext',
	//component: require('../lib/MachineGunText.vue')
	component: resolve => {
		require.ensure( ['../lib/MachineGunText.vue'], ()=>{
			resolve( require('../lib/MachineGunText.vue') );
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
	path:'blizzard',
	//component: require('../canvas/Blizzard.js')
	component: resolve => {
		require.ensure( ['../canvas/Blizzard.js'], ()=>{
			resolve( require('../canvas/Blizzard.js') );
		});
	}
},{
	path:'confetti',
	//component: require('../canvas/Confetti.js')
	component: resolve => {
		require.ensure( ['../canvas/Confetti.js'], ()=>{
			resolve( require('../canvas/Confetti.js') );
		});
	}
},{
	path:'rain',
	//component: require('../canvas/Rain.js')
	component: resolve => {
		require.ensure( ['../canvas/Rain.js'], ()=>{
			resolve( require('../canvas/Rain.js') );
		});
	}
},{
	path:'circles',
	//component: require('../canvas/Circles.js')
	component: resolve => {
		require.ensure( ['../canvas/Circles.js'], ()=>{
			resolve( require('../canvas/Circles.js') );
		});
	}
},{
	path:'snow',
	//component: require('../canvas/Snow.js')
	component: resolve => {
		require.ensure( ['../canvas/Snow.js'], ()=>{
			resolve( require('../canvas/Snow.js') );
		});
	}
},{
	path:'heart',
	//component: require('../canvas/Heart.vue')
	component: resolve => {
		require.ensure( ['../canvas/Heart.vue'], ()=>{
			resolve( require('../canvas/Heart.vue') );
		});
	}
},{
	path:'scope',
	//component: require('../Canvas/Scope.js')
	component: resolve => {
		require.ensure( ['../Canvas/Scope.js'], ()=>{
			resolve( require('../Canvas/Scope.js') );
		});
	}
}];
export {list};
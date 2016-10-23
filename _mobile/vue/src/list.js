var list = [{
		path:'preloader-container',
		component:r=>{
			require.ensure([],()=>{
				r( require('./containers/preloader-container.vue') )
			},'preloader-container')
		}
	},{
		path:'swiper-container',
		component:r=>{
			require.ensure([],()=>{
				r( require('./containers/swiper-container.js') )
			},'swiper-container')
		}
	},{
		path:'svg-qq-container',
		component:r=>{
			require.ensure([],()=>{
				r( require('./containers/svg-qq-container.js') )
			},'svg-qq-container')
		}
	},{
		path:'orientation',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/orientation.vue') )
			},'orientation')
		}
	},{
		path:'3d',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/3d.vue') )
			},'3d')
		}
	},{
		path:'3d-cube',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/3d-cube.vue') )
			},'3d-cube')
		}
	},{
		path:'heart',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/Heart.vue') )
			},'heart')
		}
	},{
		path:'scope',
		component:r=>{
			require.ensure([],()=>{
				r( require('./canvas/Scope.vue') )
			},'scope')
		}
	},{
		path:'strokecircle',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/StrokeCircle.vue') )
			},'strokecircle')
		}
	},{
		path:'carousel',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/Carousel.vue') )
			},'carousel')
		}
	},{
		path:'panoramic',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/Panoramic.vue') )
			},'panoramic')
		}
	},{
		path:'rain',
		component:r=>{
			require.ensure([],()=>{
				r( require('./canvas/Rain.vue') )
			},'rain')
		}
	},{
		path:'circles',
		component:r=>{
			require.ensure([],()=>{
				r( require('./canvas/Circles.vue') )
			},'circles')
		}
	},{
		path:'snowfall',
		component:r=>{
			require.ensure([],()=>{
				r( require('./canvas/Snowfall.vue') )
			},'snowfall')
		}
	},{
		path:'neonhexagons',
		component:r=>{
			require.ensure([],()=>{
				r( require('./canvas/NeonHexagons.vue') )
			},'neonhexagons')
		}
	}];export {list};
var list = [{
		path:'preloader-container',
		component:r=>{
			require.ensure([],()=>{
				r( require('./containers/preloader-container.vue') )
			})
		}}{
		path:'swiper-container',
		component:r=>{
			require.ensure([],()=>{
				r( require('./containers/swiper-container.js') )
			})
		}}{
		path:'svg-qq-container',
		component:r=>{
			require.ensure([],()=>{
				r( require('./containers/svg-qq-container.js') )
			})
		}}{
		path:'orientation',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/orientation.vue') )
			})
		}}{
		path:'3d',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/3d.vue') )
			})
		}}{
		path:'3d-cube',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/3d-cube.vue') )
			})
		}}{
		path:'heart',
		component:r=>{
			require.ensure([],()=>{
				r( require('./components/Heart.vue') )
			})
		}}{
		path:'scope',
		component:r=>{
			require.ensure([],()=>{
				r( require('./canvas/Scope.vue') )
			})
		}}];export {list};
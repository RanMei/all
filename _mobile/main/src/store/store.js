var store = new Vuex.Store({
	modules: {
		projects: {
			state: require('../api/projects').default
		},
		posts: {
			state: require('../api/posts').default
		}
	}
})

export default store;
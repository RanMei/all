import Vue from 'vue'
import Vuex from 'vuex';

var store = new Vuex.Store({
	modules: {
		user: require('./modules/user.js').default,
		posts: require('./modules/posts.js').default,
		projects: require('./modules/projects.js').default,
		post: require('./modules/post.js').default
	},
	state: {
	},
	actions: {
		init(ctx){
			ctx.dispatch('fetchPosts');
			ctx.dispatch('fetchProjects');
		},
	}
})

export default store;
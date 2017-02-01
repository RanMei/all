import Vue from 'vue'
import Vuex from 'vuex';
if( process.env.NODE_ENV!=='production' ){
	Vue.use(Vuex)
}

var store = new Vuex.Store({
	state: {
		projects: [],
		posts: {
			items: []
		},
		post: {
			title: '--',
			time: '--',
			body: []
		}
	},
	mutations: {
		INIT(state,pl){
			console.log(pl)
			state.projects.push(...pl.projects);
			state.posts.items.push(...pl.posts);
		},
		FETCH_POST(state,pl){
			if( pl ){
				state.post = pl;
			};
		}
	},
	actions: {
		$INIT({commit}){
			var projects = JSON.parse( JSON.stringify(require('../api/projects').default) );
			var posts = require('../api/posts').default;
			commit('INIT',{projects,posts});
		},
		$FETCH_POST({state,commit}){
			console.log(state)
			var newPost;
			var time = location.hash.match(/time=[\d|-]+/)[0].replace(/time=/,'');
			state.posts.items.forEach(a=>{
				if(a.time===time){
					newPost = a;
				}
			});
			commit('FETCH_POST',newPost);
		}
	}
})

export default store;
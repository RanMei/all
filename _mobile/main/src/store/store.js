import projects from './modules/projects.js';
import posts from './modules/posts.js';
import post from './modules/post.js';

var store = new Vuex.Store({
	modules: {
		projects,
		posts,
		post
	},
	actions: {
		INIT({commit}){
			var projects = require('../api/projects').default;
			var posts = require('../api/posts').default;
			commit('PROJECTS.FETCH',projects);
			commit('POSTS.FETCH',posts);
		},
		$POST_FETCH({state,commit}){
			console.log(state)
			var newPost;
			var time = location.hash.match(/time=[\d|-]+/)[0].replace(/time=/,'');
			state.posts.forEach(a=>{
				if(a.time===time){
					newPost = a;
				}
			});
			commit('POST.FETCH',newPost);
		}
	}
})

export default store;
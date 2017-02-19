const state = {
	items: []
};

const actions = {
  fetchPosts(ctx){
    var posts = require('../../api/posts.js').default;
    ctx.commit('FETCH_POSTS',posts);
  }
}

const mutations = {
	FETCH_POSTS(state,arr){
		state.items.push(...arr);
	}
}

export default {state,actions,mutations};
const state = {
	title: '',
	time: '',
	body: []
};

const actions = {
  fetchPost(ctx,time){
    var newPost;
    ctx.rootState.posts.items.forEach(a=>{
      if(a.time===time){
        newPost = JSON.parse( JSON.stringify(a) );
      }
    });
    ctx.commit('FETCH_POST',newPost);
  }
}

const mutations = {
	FETCH_POST(state,obj){
		for(var key in obj){
			state[key] = obj[key];
		}
	}
}

export default {state,actions,mutations};
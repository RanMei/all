const state = {
	items: []
};

const mutations = {
	POSTS_FETCH(state,arr){
		state.items.push(...arr);
	}
}

export default {state,mutations};
const state = {
	items: []
};

const mutations = {
	'POSTS.FETCH'(state,arr){
		state.items.push(...arr);
	}
}

export default {state,mutations};
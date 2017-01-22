const state = [];

const mutations = {
	'PROJECTS.FETCH'(state,arr){
		state.push(...arr);
	}
}

export default {state,mutations};

const state = {
	num: 0
};

const mutations = {
	PLUS: function(state){
		state.num++;
	}
}

const num = {
	state,mutations
}

export {num};
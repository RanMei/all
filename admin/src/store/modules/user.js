const state = {
	id: ''
}

const mutations = {
	LOGIN: function(state,user){
		for(var key in state){
			state[key] = user[key];
		}
	}
}


export default {state,mutations};
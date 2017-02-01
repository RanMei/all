const state = {
	title: '',
	time: '',
	body: []
};

const mutations = {
	'POST.FETCH'(state,obj){
		for(var key in obj){
			state[key] = obj[key];
		}
	}
}

export default {state,mutations};
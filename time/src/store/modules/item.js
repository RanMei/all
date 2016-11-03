const state = {
	id: '',
	name: '',
	desc_: '',
	spec: '',
	price: 0,
	class_: '',
	sub_class: ''
}

const mutations = {
	SET_ITEM: function(state,item){
		for(var key in state){
			state[key] = item[key];
		}
	}
}


export default {state,mutations};
const state = {
	id: '',
	name: '',
	desc_: '',
	spec: '',
	price: '',
	class_: '',
	sub_class: ''
}

const mutations = {
	TO_ITEM: function(state,item){
		for(var key in state){
			state[key] = item[key];
		}
	}
}


export default {state,mutations};
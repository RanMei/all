
const state = [];

const actions = {
}

const mutations = {
	ITEMS_PUSH: function(state,items){
		state.push(...items);
	},
	SAVE_ITEM: function(state,item){
		state.forEach(a=>{
			if(a.id===item.id){
				for(var key in a){
					a[key] = item[key];
				}
			}
		})
	},
	ADD_ITEM: function(state,new_item){
		state.push(new_item);
	},
	DELETE_ITEMS: function(state){
		var i = state.length-1;
		while( i>=0 ){
			if( state[i].checked === true ){
				state.splice(i,1)
			};
			i--;
		}
	},
	CHECK_TOGGLE: function(state,i){
		if(state[i].checked===true){
			state[i].checked = false;
		}else{
			state[i].checked = true;
		}
	}
}

export default {state,actions,mutations};
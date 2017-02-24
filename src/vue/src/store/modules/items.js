import api from 'api/api.js';

export default {
  state: [],
  actions: {
    fetchItems(ctx,params){
      var items = api.getItems(params);
      ctx.commit('FETCH_ITEMS',items);
    }
  },
  mutations: {
    FETCH_ITEMS(state,items){
      state.splice(0,state.length);
      state.push(...items);
    }
  }
}
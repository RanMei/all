export default {
  state: {
    current: -1
  },
  actions: {
    toNextItem(ctx){
      if( ctx.state.current<ctx.rootState.items.length-1 ){
        ctx.commit('TO_NEXT_ITEM');
      }
    }
  },
  mutations: {
    TO_HOME(state,i){
      state.current = -1;
    },
    TO_ITEM(state,i){
      state.current = i;
    },
    TO_PREV_ITEM(state){
      if( state.current>0 ){
        state.current--;
      }
    },
    TO_NEXT_ITEM(state){
      state.current++;
    }
  }
}
export default {
  state: {
    current: -1
  },
  actions: {
    toItem(ctx,i){
      var items = ctx.rootState.items;
      if(i>=0&&i<=items.length-1){
        ctx.commit('TO_ITEM',i);
        if( items[i].url ){
          location.href = '#/item/others';
        }else{
          location.href = '#/item/'+items[i].name.toLowerCase();
        }
      };
    },
    toHome(ctx){
      location.href = '#/home';
      ctx.commit('TO_HOME');
    },
  },
  mutations: {
    TO_HOME(state,i){
      state.current = -1;
    },
    TO_ITEM(state,i){
      state.current = i;
    }
  }
}
export default {
	state: {
    tabs: [
      ['按钮','图标','图片','文字',],
      ['全部'],
      ['全部'],
      ['全部']
    ],
    current: 0,
  },
	actions: {
		topbarToTab(ctx,i){
      ctx.commit('TOPBAR_TO_TAB',i);
      var name = ctx.state.tabs[ctx.rootState.navbar.current][i];
      if( name==='全部' ){
        ctx.dispatch('fetchItems',{
          class_: ctx.rootState.navbar.tabs[ctx.rootState.navbar.current].name
        });
      }else{
        ctx.dispatch('fetchItems',{
          tag: name
        })
      }
    }
	},
	mutations: {
		TOPBAR_TO_TAB(state,i){
      state.current = i;
    },
	}
}
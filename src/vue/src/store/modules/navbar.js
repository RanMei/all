export default {
  state: {
    tabs: [{
      class_: 'element',
      name: '元素'
    },{
      class_: 'component',
      name: '组件'
    },{
      class_: 'tpl',
      name: '活动模板'
    },{
      class_: 'scene',
      name: '场景'
    }],
    current: 0
  },
  actions: {
    toClass(ctx,i){
      ctx.commit('TO_CLASS',i);
      ctx.dispatch('topbarToTab',0);
    }
  },
  mutations: {
    TO_CLASS(state,i){
      state.current = i;
    },
  }
}
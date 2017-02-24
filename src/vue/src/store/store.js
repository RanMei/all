import api from 'api/api.js';

function add(module,target){
  for(let part in module){
    for(let key in part){
      if(target[part][key]!==undefined){
        throw Error('dog');
      }else{
        target[part][key] = module[part][key];
      }
    }
  }
}

const store = new Vuex.Store({
  modules: {
    navbar: require('./modules/navbar.js').default,
    items: require('./modules/items.js').default,
    item: require('./modules/item.js').default,
  },
  state: {
    initialized: false,
    img: '../img/vue',

    topbar: {
      tabs: [
        ['按钮','图标','图片','文字',],
        [],
        [],
        []
      ],
      current: 0,
    },
    
    maskInfo: {
      show: false
    },

    example: {
      name: 'baidu', 
      url: 'http://www.baidu.com'
    }
  },
  actions: {
    init(ctx){
      if( ctx.rootState.initialized===false ){
        ctx.commit('INIT');
        ctx.dispatch('fetchItems',{
          tag: '按钮'
        });
      };
    },
    topbarToTab(ctx,{i,name}){
      ctx.commit('TOPBAR_TO_TAB',i);
      if( name==='全部' ){
        ctx.dispatch('fetchItems');
      }else{
        ctx.dispatch('fetchItems',{
          tag: name
        })
      }
    }
  },
  mutations: {
    INIT(state){
      state.initialized = true;
    },

    TOPBAR_TO_TAB(state,i){
      state.topbar.current = i;
    },

    


    TO_EXAMPLE(state,url){
      state.example = url;
    },
    SHOW(state,what){
      state[what].show = true;
    },
    HIDE(state,what){
      state[what].show = false;
    }
  }
})

export default store;
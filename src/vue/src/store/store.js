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
    // app
    // user
    navbar: require('./modules/navbar.js').default,
    topbar: require('./modules/topbar.js').default,
    items: require('./modules/items.js').default,
    item: require('./modules/item.js').default,
    example: require('./modules/example.js').default,
  },
  state: {
    initialized: false,
    img: '../img/vue',
    
    maskInfo: {
      show: false
    },

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
  },
  mutations: {
    INIT(state){
      state.initialized = true;
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
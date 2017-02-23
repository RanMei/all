import api from 'api/api.js';

const store = new Vuex.Store({
  state: {
    img: '../img/vue',
    currentTab: 0,
    current: -1,
    maskInfo: {
      show: false
    },
    items: [],
    example: {
      name: 'baidu', 
      url: 'http://www.baidu.com'
    }
  },
  mutations: {
    FETCH_ITEMS(state){
      var items = api.getItems({tag:'SVG'});      
      state.items.push(...items);
    },
    TO_TAB(state,i){
      state.currentTab = i;
    },
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
      if( state.current<state.items.length-1 ){
        state.current++;
      }
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
const store = new Vuex.Store({
  state: {
    img: '../img/vue',
    currentTab: 0,
    current: -1,
    maskInfo: {
      show: false
    },
    items: []
  },
  mutations: {
    FETCH_ITEMS(state){
      var items = JSON.parse( JSON.stringify(require('api/items.js')) );
      items.sort((a,b)=>{
       if (a.name < b.name) {
         return -1;
       }
       if (a.name > b.name) {
         return 1;
       }
       return 0;
      })
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
    SHOW(state,what){
      state[what].show = true;
    },
    HIDE(state,what){
      state[what].show = false;
    }
  }
})

export default store;
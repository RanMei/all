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
      var items = JSON.parse( JSON.stringify(require('api/items.js')) );
      // var items_others = JSON.parse( JSON.stringify(require('api/items.others.js')) );
      // items = items.concat(items_others);
      items.sort((a,b)=>{
        var a_date = new Date(a.date?a.date:'2016-01-01 08:09:04').getTime();
        var b_date = new Date(b.date?b.date:'2016-01-01 08:09:04').getTime();
        if (a_date > b_date) {
          return -1;
        }
        if (a_date < b_date) {
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
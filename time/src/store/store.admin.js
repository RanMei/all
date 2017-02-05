import items from './modules/items.js';

const store = new Vuex.Store({
  state: {
  },
  modules: {
    items
  }
})

//console.log(store.state)

export default store;
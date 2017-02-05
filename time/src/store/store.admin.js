import items from './modules/items.js';
console.log(items)

const store = new Vuex.Store({
  modules: {
    items
  }
})

export default store;
import Vue from 'vue';
import Vuex from 'vuex';

import dir from './modules/dir.js';
import cart from './modules/cart.js';

import items from './modules/items.js';
import item from './modules/item.js';
import user from './modules/user.js';

import actions from './actions/actions.js';
//Vue.use( Vuex );

var store = new Vuex.Store({
  // modules in Vuex are just like reducers in Redux
  modules: {
    dir,
    user,
    cart,
    items,
    item
  },
  actions: actions
})

export default store;
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
    signup: require('./modules/signup.js').default,
    user,
    cart,
    items,
    item
  },
  actions: {
    init(){
      fetch( '/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: "cors"
      }).then(function(res) {
        if (res.status === 200) {
          return res.json()
        } else {
          return ;
        }
      }).then(function(data) {
        if(data.user.id){
          ctx.commit('INIT',data.user);
        }else{
        }
      }).catch(function(err) {
        console.log(err);
      });
    }
  },
  mutations: {
    INIT(state,user){
      console.log(state)
      state.user.name = user.name;
    }
  }
})

export default store;

/*
state = {
  dir: {
    root: '',
    api: '',
    img: '',
  },
  user: {
    name: ''
  },
  items: [{
    id: '',
    price: 5000,
  }],
  cart: [{
    id: '111',
    name: 'iPhone 7',
    price: 4000,
    quantity: 1,
    checked: false
  }],
  orders: [],
  mask: {
    show: false
  }
}
 */
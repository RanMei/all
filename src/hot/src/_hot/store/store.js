import Vue from 'vue'
import Vuex from 'vuex'

if( process.env.NODE_ENV!=='production' ){
	Vue.use(Vuex)
};

const store = new Vuex.Store({
  state: {
  	count: 700
  }
})

export default store; 
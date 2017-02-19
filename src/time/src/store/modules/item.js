import dir from 'api/dir.js';

const state = {
  id: '',
  name: '',
  desc_: '',
  spec: '',
  price: 0,
  class_: '',
  sub_class: ''
}

const actions = {
  fetchItem(ctx,id){
    fetch( dir.api+'/item?id='+id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors"
    }).then(function(res) {
      if (res.status === 200) {
        return res.json()
      } else {
        //return Promise.reject(res.json())
      }
    }).then(function(item) {
      ctx.commit('FETCH_ITEM',item)
    }).catch(function(err) {
      console.log(err);
    });
  },
  addToCart(ctx){
    
  }
}

const mutations = {
  FETCH_ITEM: function(state,item){
    for(var key in state){
      state[key] = item[key];
    }
  }
}


export default {state,actions,mutations};
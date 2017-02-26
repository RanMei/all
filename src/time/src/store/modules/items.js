import dir from 'api/dir.js';

const state = [];

const actions = {
  fetchItems (ctx) {
    fetch( dir.api+'/items/', {
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
    }).then(function(items) {
      items.forEach(a=>{
        a.checked = false;
      })
      //console.log(items)
      ctx.commit('FETCH_ITEMS',items)
    }).catch(function(err) {
      console.log(err);
    });
  },
  saveItem ({commit},item_json) {
    fetch( dir.api+'/items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors",
      body: item_json
    }).then(function(res) {
      if (res.status === 200) {
        //return res.json()
      } else {
        //return Promise.reject(res.json())
      }
    }).then(function(data) {
      var new_item = JSON.parse(item_json);
      new_item.checked = false;
      commit('SAVE_ITEM',new_item)
    }).catch(function(err) {
      console.log(err);
    });
  },
  addItem ({commit},item_json) {
    fetch( dir.api+'/items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors",
      body: item_json
    }).then(function(res) {
      if (res.status === 200) {
        //return res.json()
      } else {
        //return Promise.reject(res.json())
      }
    }).then(function(data) {
      var new_item = JSON.parse(item_json);
      new_item.checked = false;
      commit('ADD_ITEM',new_item)
    }).catch(function(err) {
      console.log(err);
    });
  },
  deleteItems ({commit},ids) {
    fetch( dir.api+'/items/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors",
      body: JSON.stringify(ids)
    }).then(function(res) {
      if (res.status === 204) {
        //return res.json()
      } else {
        return console.warn('111');
      }
    }).then(function(data) {
      commit('DELETE_ITEMS')
    }).catch(function(err) {
      console.log(err);
    });
  }
}

const mutations = {
  FETCH_ITEMS: function(state,items){
    state.push(...items);
  },
  SAVE_ITEM: function(state,item){
    state.forEach(a=>{
      if(a.id===item.id){
        for(var key in a){
          a[key] = item[key];
        }
      }
    })
  },
  ADD_ITEM: function(state,new_item){
    state.push(new_item);
  },
  DELETE_ITEMS: function(state){
    var i = state.length-1;
    while( i>=0 ){
      if( state[i].checked === true ){
        state.splice(i,1)
      };
      i--;
    }
  },
  CHECK_TOGGLE: function(state,i){
    if(state[i].checked===true){
      state[i].checked = false;
    }else{
      state[i].checked = true;
    }
  }
}

export default {state,actions,mutations};
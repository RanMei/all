const state = {
  loggedIn: false,
  state: '',
  name: ''
};

const actions = {
  login(ctx,user){
    ctx.commit('LOGIN_PENDING');
    fetch( '/api/login/', {
      // this is essential cause a fetch request is without cookie by default
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors",
      body: user
    }).then(function(res) {
      if (res.status === 200) {
        return res.json()
      } else {
        return ;
      }
    }).then(function(data) {
      if(data.state==='successful'){
        ctx.commit('LOGIN',user);
        //location.href = ctx.rootState.dir.index;
      }else{
        ctx.commit('LOGIN_FAILED');
      }
    }).catch(function(err) {
      console.log(err);
    });
  },
  logout(ctx){
    fetch( '/api/logout/', {
      // this is essential cause a fetch request is without cookie by default
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors",
    }).then(function(res) {
      if (res.status === 200) {
        return res.json()
      } else {
        return ;
      }
    }).then(function(data) {
      // if(data.state==='successful'){
      //   ctx.commit('LOGIN',user);
      //   //location.href = ctx.rootState.dir.index;
      // }else{
      //   ctx.commit('LOGIN_FAILED');
      // }
    }).catch(function(err) {
      console.log(err);
    });
  }
}

const mutations = {
  LOGIN_PENDING(state){
    state.state = 'pending';
  },
  LOGIN_FAILED(state){
    state.state = 'failed';
  },
	LOGIN(state){
    state.loggedIn = true;
    state.name = '111';
    state.state = 'resolved';
    location.href = '#/home';
	},
  LOGOUT(state){
    state.name = '';
  }
}

export default {state,actions,mutations};
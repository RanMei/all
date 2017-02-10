const state = {
  state: '',
  name: ''
};

const actions = {
  login(ctx,user){
    user = JSON.parse(user);
    ctx.commit('LOGIN_PENDING');
    setTimeout(()=>{
      if( user.name==='111111'&&user.password==='111111' ){
        ctx.commit('LOGIN');
      }else{
        ctx.commit('LOGIN_FAILED');
      }
    },1000);
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
    state.name = '111';
    state.state = 'resolved';
    location.href = '#/home';
	},
  LOGOUT(state){
    state.name = '';
  }
}

export default {state,actions,mutations};
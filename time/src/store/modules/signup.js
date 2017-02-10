const state = {
  form: {
    mobile: {
      val: '',
      state: '',
      info: ''
    },
    password: {
      val: '',
      state: '',
      info: ''
    },
    password2: {
      val: '',
      state: '',
      info: ''
    },
    verif: {
      val: '',
      state: '',
      info: ''
    },
    agreed: false
  },
}

const actions = {
  checkMobile(ctx,mobile){
    fetch( '/api/checkMobile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: "cors",
      body: JSON.stringify({mobile:mobile})
    }).then(function(res) {
      if (res.status === 200) {
        return res.json()
      } else {
        return ;
      }
    }).then(function(data) {
      ctx.commit('CHECK_MOBILE',{
        mobile: mobile,
        green: !data.state
      })
    }).catch(function(err) {
      console.log(err);
    });
  },
  signup(ctx,payload){
    var form = ctx.state.form;
    if(
      form.mobile.state==='success'&&
      form.password.state==='success'&&
      form.password2.state==='success'&&
      form.verif.state==='success'&&
      form.agreed===true
      ){

    }else{

    }
  }
}

const mutations = {
  SIGNUP_FOCUS(state,str){
    state.form[str].state = 'active';
    state.form[str].info = '';
  },
  CHECK_MOBILE(state,{mobile,green}){
    state.form.mobile.val = mobile;
    if( mobile==='' ){
      state.form.mobile.state = '';
    }else if( !/^1[3|4|5|8]\d{9}$/.test(mobile) ){
      state.form.mobile.state = 'error';
      state.form.mobile.info = '手机号格式不正确';
    }else{
      if( green===false ){
        state.form.mobile.state = 'error';
        state.form.mobile.info = '该手机号已被注册';
      }else{
        state.form.mobile.state = 'success';
      }
    }
  },
  CHECK_PASSWORD(state,password){
    state.form.password.val = password;
    if( /^\w{6,20}$/.test(password) ){
      state.form.password.state = 'success';
    }else if( password==='' ){
      state.form.password.state = '';
    }else{
      state.form.password.state = 'error';
      state.form.password.info = '密码格式不正确';
    }
  },
  CHECK_PASSWORD2(state,password2){
    state.form.password2.val = password2;
    if( /^\w{6,20}$/.test(password2)&&state.form.password.val===password2 ){
      state.form.password2.state = 'success';
    }else if( state.password===''&&password2==='' ){
      state.form.password2.state = '';
    }else{
      state.form.password2.state = 'error';
      state.form.password2.info = '两次输入的密码不一致';
    }
  },
  CHECK_VERIF(state,verif){
    state.form.verif.val = verif;
    if( verif ){
      state.form.verif.state = 'success';
    }else{
      state.form.verif.state = 'error';
    }
  },
  CHECK_AGREE(state){
    state.form.agreed = !state.form.agreed;
  },
	SIGNUP(state,user){
		for(var key in state){
			state[key] = user[key];
		}
	}
}

export default {state,actions,mutations};
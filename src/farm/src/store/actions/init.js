import api from 'api/api.js';

export function init(){
  var user = {};
  var shoppingCart = [];
  if( sessionStorage.user ){
    user = JSON.parse( sessionStorage.user );
  };
  if( sessionStorage.shoppingCart ){
    shoppingCart = JSON.parse( sessionStorage.shoppingCart );
  };
  var items = api.getItems();
  var homeSwiper = require('api/homeSwiper.js').default;
  return dispatch=>{
    dispatch({
      type: 'INIT',
      user: user,
      shoppingCart: shoppingCart,
      items: items,
      homeSwiper: homeSwiper
    })
  }
}

export function login(user){
  return dispatch=>{
    setTimeout(()=>{
      if( user.id==='15911111111'&&user.password==='111111' ){
        sessionStorage.user = '{"id":"15911111111"}';
        sessionStorage.shoppingCart = '[]';
        dispatch({
          type: 'LOGIN',
          user: {
            id: '15911111111'
          },
          shoppingCart: []
        });
        location.hash = 'member';
      }else{
        dispatch({
          type: 'ALERT',
          text: '您输入的用户名或密码有误！'
        })
      }
    },100);
  }
}

export function login_as_guest(){
  return dispatch=>{
    setTimeout(()=>{
      sessionStorage.user = '{"id":"guest"}';
      sessionStorage.shoppingCart = '[]';
      dispatch({
        type: 'LOGIN',
        user: {
          id: 'guest'
        },
        shoppingCart: []
      })
      location.hash = 'member';
    },100);
  }
}

export function logout(){
  return dispatch=>{
    setTimeout(()=>{
      delete sessionStorage.user;
      dispatch({
        type: 'LOGOUT'
      });
      location.hash = 'signin';
    },100);
  }
}
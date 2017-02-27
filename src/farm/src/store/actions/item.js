import api from 'api/api.js';

export function fetch_item(id){
  return dispatch=>{
    var item = api.getItem(id);
    dispatch({
      type: 'SET_ITEM',
      item
    })
  }
}

export function addToCart(item){
  return dispatch=>{
    setTimeout(()=>{
      if( sessionStorage.shoppingCart ){
        var shoppingCart = JSON.parse( sessionStorage.shoppingCart );
        shoppingCart.push( item )
        sessionStorage.shoppingCart = JSON.stringify( shoppingCart );
      }else{
        sessionStorage.shoppingCart = '[]';
      }
      dispatch({
        type: 'ADD_TO_CART',
        item: item
      });
      dispatch({
        type: 'ALERT',
        text: '成功加入购物车'
      });
    },20);
  }
}
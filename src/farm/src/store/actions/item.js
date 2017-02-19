export function fetch_item(id){
  return dispatch=>{
    var item = {};
    var items = require('api/items.js').default;
    items.forEach((a)=>{
      if( id===a.id ){
        item = a;
        item.quantity = 1;
      }
    })
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
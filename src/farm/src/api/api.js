import items from './items.js';

const api = {};
api.getItems = function(){
  return items;
}
api.getItem = function(id){
  var item;
  items.forEach((a)=>{
    if( id===a.id ){
      item = a;
      item.quantity = 1;
    }
  });
  return item;
}

export default api;
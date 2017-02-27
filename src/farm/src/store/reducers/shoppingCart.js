function shoppingCart (state=[],action){

  var newState = [...state];

  switch (action.type) {
    case 'INIT':
      return action.shoppingCart;
    case 'LOGIN':
      return action.shoppingCart;
    case 'PLUS':
      newState[action.i].quantity++;
      return newState;
    case 'MINUS':
      if( state[action.i].quantity>1 ){
        newState[action.i].quantity--;
      }
      return newState;
    case 'CHECK_THIS':
      return state.map( (a,i)=>{
        if(i===action.i){
          var new_item = {};
          for(var key in a){
            new_item[key] = a[key];
            new_item.selected = a.selected?false:true;
          }
          return new_item;
        }else{
          return a;
        }
      });
    case 'CHECK_ALL':
      var allChecked = (function(){
        for(let i=0;i<state.length;i++){
          if( !state[i].selected ){
            return false;
          };
        };
        return true;
      })();
      if( allChecked ){
        newState.forEach(a=>{
          a.selected = false;
        })
      }else{
        newState.forEach(a=>{
          a.selected = true;
        })
      }
      return newState;
    case 'REMOVE':
      var _newState = [];
      newState.forEach((a)=>{
        if( !a.selected ){
          _newState.push(a);
        };
      })
      return _newState;
    case 'ADD_TO_CART':
      return [...state,action.item];
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
}

export default shoppingCart;
function notice (state={tick:0,text:''},action){
  switch (action.type) {
    case 'ALERT':
      var newState = {
        tick: state.tick+1,
        text: action.text
      }
      return newState;
    case 'LOGIN':
      return {
        tick: state.tick+1,
        text: '登录成功！'
      }
    case 'LOGOUT':
      return {
        tick: state.tick+1,
        text: '注销成功！'
      }   
    default:
      return state;
  }
}

export {notice};
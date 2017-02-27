function mask (state={
  show: false,
  text: ''
},action){
  switch (action.type) {
    case 'CONFIRM':
      var newState = {
        show: true,
        text: action.text
      }
      return newState;
    case 'CLOSE_MASK':
      return {
        show: false,
        text: ''
      }
    default:
      return state;
  }
}

export default mask;
import {$$store} from '../store/index.jsx';
import {Member} from '../components/Member.jsx';

function act(action){
	switch(action.type){
		case 'LOGOUT':
			delete sessionStorage.user;
			setTimeout(()=>{
				$$store.dispatch(action);
			},10);
			break;
		default:
			$$store.dispatch(action);
	}
}

var MemberContainer = ReactRedux.connect(function(state){
	return {
		user: state.user,
		act: act
	}
})( Member );

export {MemberContainer};
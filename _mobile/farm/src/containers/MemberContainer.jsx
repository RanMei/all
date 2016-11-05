import {$$store} from '../store/index.jsx';
import {Member} from '../components/Member.jsx';

function act(action){

}

var MemberContainer = ReactRedux.connect(function(state){
	return {
		user: state.user,
		act: act
	}
})( Member );

export {MemberContainer};
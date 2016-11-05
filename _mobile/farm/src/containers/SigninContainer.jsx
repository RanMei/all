import {$$store} from '../store/index.jsx';
import {Signin} from '../components/Signin.jsx';

function act(action){
}

var SigninContainer = ReactRedux.connect(function(state){
	return {
		act: act
	}
})( Signin );

export {SigninContainer};
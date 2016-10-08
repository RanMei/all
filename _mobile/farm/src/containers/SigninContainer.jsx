import {$$store} from '../store/index.jsx';
import {Signin} from '../components/Signin.jsx';

function act(action){
	switch (action.type) {
		case 'LOGIN':
			if( action.user.id==='15911111111'&&action.user.password==='111111' ){
				sessionStorage.user = '{"id":"15911111111"}';
				sessionStorage.shoppingCart = '[]';
				$$store.dispatch({
					type: 'LOGIN',
					user: {
						id: '15911111111'
					},
					shoppingCart: []
				});
				$$store.dispatch({
					type: 'ALERT',
					text: '登录成功！'
				})
			}else{
				$$store.dispatch({
					type: 'ALERT',
					text: '您输入的用户名或密码有误！'
				})
			}
			break;
		case 'LOGIN_AS_GUEST':
			sessionStorage.user = '{"id":"guest"}';
			sessionStorage.shoppingCart = '[]';
			$$store.dispatch({
				type: 'LOGIN',
				user: {
					id: 'guest'
				},
				shoppingCart: []
			})
			$$store.dispatch({
				type: 'ALERT',
				text: '登录成功！'
			})
			break;
		default :
			$$store.dispatch(action);
			break;
	}
}

var SigninContainer = ReactRedux.connect(function(state){
	return {
		act: act
	}
})( Signin );

export {SigninContainer};
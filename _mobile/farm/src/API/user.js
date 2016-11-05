export function user(API,$$store){
	API.LOGIN = function(user){
		if( user.id==='15911111111'&&user.password==='111111' ){
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
	}

	API.LOGIN_AS_GUEST = function(){
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
	}

	API.LOGOUT = function(){
		delete sessionStorage.user;
		setTimeout(()=>{
			$$store.dispatch({
				type: 'LOGOUT'
			});
		},10);
	}
}
import {$$rootDir,$$phpDir} from '../common.jsx';

function user (state={},action){
	switch (action.type) {
		case 'LOGIN':
			var ok = false;
			$.ajax({
				headers: {
					'Content-type': 'application/json'
				},
				type: 'POST',
				url: '/login',
				data: JSON.stringify( action.user ),
				async: false
			}).done(function(data){
				if( data==='true' ){
					alert('登录成功！');
					ok = true;
					location.hash = 'home';
				}else{
					alert('您输入的用户名或密码有误！');
				}
			});
			if( ok ){
				sessionStorage.userID = action.user.userID;
				return {userID: action.user.userID}
			};
		case 'LOGOUT':
			delete sessionStorage.userID;
			return {userID: undefined};
		default:
			return state;
	}
}

export {user};
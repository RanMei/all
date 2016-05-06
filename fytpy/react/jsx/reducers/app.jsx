import {$$rootDir,$$phpDir} from '../common.jsx';

function app (state={userID:null},action){
	switch (action.type) {
		case 'LOGIN':
			var dataSent = {
				username: action.data.userID,
				password: action.data.password
			}
			dataSent = JSON.stringify( dataSent );
			var ok = false;
			console.log($$phpDir,dataSent);
			$.ajax({
				type: 'POST',
				url: 'http://localhost/fytpy/php/login.php',
				data: {data:dataSent},
				async: false
			}).done(function(data){
				console.log(data);
				ok = (data)?true:false;
			});
			if( ok ){
				location.hash = "/home";
				return {userID:action.data.userID};
			}else{
				alert("您输入的用户名或密码有误！");
				return {userID:null}; 
			}
		default:
			return state;
	}
}

export {app};
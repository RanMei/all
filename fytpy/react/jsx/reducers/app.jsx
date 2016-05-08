import {$$rootDir,$$phpDir} from '../common.jsx';

function getUser (){
	var user;
	$.ajax({
		type: 'POST',
		url: 'http://localhost/fytpy/php/session.php',
		async: false
	}).done(function(data){
		user = eval('('+data+')');
		//console.log(user);
	});
	return user;
}

function user (state={},action){
	switch (action.type) {
		case 'LOGIN':
			var user;
			var dataSent = {
				username: action.data.userID,
				password: action.data.password
			}
			dataSent = JSON.stringify( dataSent );
			var ok = false;
			//console.log($$phpDir,dataSent);
			$.ajax({
				type: 'POST',
				url: 'http://localhost/fytpy/php/login.php',
				data: {data:dataSent},
				async: false
			}).done(function(data){
				//console.log(data);
				ok = (data)?true:false;
			});
			if( ok ){
				alert("登录成功！");
				location = "#/home";
				return getUser();
			}else{
				alert("您输入的用户名或密码有误！");
				return {}; 
			}
		case 'LOGOUT':
			location = "#/home";
			return {};
		case 'ADD_TO_CART':
			action.to_cart = true;
			$.ajax({
				type:'post',
				url:$$phpDir+'/insert.php',
				data:{data:JSON.stringify(action)}
			}).done(function(){
				alert('成功加入购物车');
			});
			return getUser();
		case 'REMOVE_ITEM':
			$.ajax({
				type:'post',
				url:$$phpDir+'/remove.php',
				data:{data:JSON.stringify(action)}
			}).done(function(){
			});
			return getUser();
		default:
			return state;
	}
}

export {user};
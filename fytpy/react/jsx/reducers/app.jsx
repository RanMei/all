import {$$rootDir,$$phpDir} from '../common.jsx';

function getUser (){
	var user;
	$.ajax({
		type: 'post',
		url: 'http://localhost/fytpy/php/session.php',
		// url: '/session',
		async: false,
		beforeSend: function(xhr){
			console.log(xhr);
		}
	}).done(function(data){
		console.log(data);
		//user = eval('('+data+')');
		user = JSON.parse(data);
		//console.log(user);
		sessionStorage.userID = user.username;
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
				// type: 'POST',
				// url: 'http://localhost/fytpy/php/login.php',
				// data: {data:dataSent},				
				headers:{
					'Content-type': 'application/json'
				},			
				url: '/login',
				data: dataSent,
				async: false
			}).done(function(data){
				//console.log(data);
				ok = (data==="true")?true:false;
				//document.cookie = 'userID='+action.data.userID;
				console.log( 'cookies:',document.cookie );
			});
			if( ok ){
				alert("登录成功！");
				location = "#/home";
				console.log('state updated by LOGIN');
				return getUser();
			}else{
				alert("您输入的用户名或密码有误！");
				return {}; 
			}
		case 'LOGOUT':
			location = "#/home";
			$.ajax({
				url:$$phpDir+'/logout.php',
				type:'post',
				async:false
			})
			delete sessionStorage.userID;
			return {};
		case 'ADD_TO_CART':
			var successful = false;
			$.ajax({
				type:'post',
				url:$$phpDir+'/insert.php',
				data:{data:JSON.stringify(action)},
				dataType: 'text',
				async:false
			}).done(function(data){
				if(data==='true'){
					alert('成功加入购物车！');
					successful = true;
				}else{
					alert('请先登录！');
				}
			});
			if( successful ){
				return getUser();
			}else{
				return state;
			};
		case 'REMOVE_ITEM':
			$.ajax({
				type:'post',
				url:$$phpDir+'/remove.php',
				data:{data:JSON.stringify(action)},
				async:false
			}).done(function(){
			});
			return getUser();
		default:
			if( sessionStorage.userID ){
				return getUser();
			}else{
				return state;
			}
	}
}

export {user};
import {$$rootDir,$$phpDir} from '../common.jsx';

function shoppingCart (state=[],action){
	switch (action.type) {
		case 'ADD_TO_CART':
			var successful = false;
			var shoppingCart = [];
			$.ajax({
				type:'post',
				url:$$phpDir+'/shoppingCart.php',
				data:{data:JSON.stringify(action)},
				//dataType: 'text',
				async:false
			}).done(function(data){
				if( data ){
					shoppingCart = JSON.parse(data);
					alert('成功加入购物车！');
					successful = true;
				}else{
					alert('请先登录！');
				}
			});
			return successful?shoppingCart:state;
		default:
			return state;
	}
}

export {shoppingCart};
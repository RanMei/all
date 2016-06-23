import {$$rootDir,$$phpDir} from '../common.jsx';

function shoppingCart (state=[],action){
	
	switch (action.type) {
		case 'ADD_TO_CART':
			var shoppingCart = [];
			var successful = false;
			console.log( JSON.stringify(action) )
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
			console.log( shoppingCart );
			return successful?
				{shoppingCart}:state;
		case 'REMOVE_ITEM':
			var shoppingCart = [];
			var successful = false;
			$.ajax({
				type:'post',
				url:$$phpDir+'/shoppingCart.php',
				data:{data:JSON.stringify(action)},
				async:false
			}).done(function(data){
				if( data ){
					shoppingCart = JSON.parse(data);
					successful = true;
				}else{
				}				
			});
			return successful?{shoppingCart}:state;
		default:
			return state;
	}
}

export {shoppingCart};
angular.module("app").controller("appCtrl",function($scope){
	
	$scope.alert = function(){
		alert("111");
	}
	
});
app.controller( "shoppingCartCtrl",function( $scope,$http ){
	
	$scope.items = [];

	$http({
		url: "API/items.json",
		method: "post"
	}).then( function(r){
		$scope.items = r.data;
	});
	
	/*
	$scope.items=[
		{	id:"0001",
			name:"苍溪猕猴桃",
			spec:"8个（约1kg）",
			price:79.00,
			quantity:1
		},
		{	id:"0002",
			name:"越南红心火龙果",
			spec:"2个（约1.2kg）",
			price:60.00,
			quantity:1
		},
		{	id:"0003",
			name:"北极甜虾",
			spec:"1kg",
			price:150.00,
			quantity:1
		}
	];
	*/
	//console.log( JSON.stringify($scope.items) );
	$scope.totalQuantity=function(){
		var tq=0;
		for( i=0;i<$scope.items.length;i++ ){
			if( $scope.items[i].selected===true ){
				tq++;
			}
		}
		return tq;
	}
	$scope.totalPrice=function(){
		var tp=0;
		for( i=0;i<$scope.items.length;i++ ){
			if( $scope.items[i].selected===true ){
				tp+=$scope.items[i].price*$scope.items[i].quantity;
			}
		}
		return tp;
	}
	////
	$scope.checkAll=function(e){
		if( e.target.checked===true ){
			for( i=0;i<$scope.items.length;i++ ){
				$scope.items[i].selected=true;
			}
		}else{
			for( i=0;i<$scope.items.length;i++ ){
				$scope.items[i].selected=false;
			}
		}
	}
	$scope.minus=function(i){
		if( $scope.items[i].quantity>1 ){
			$scope.items[i].quantity--;
		};
	};
	$scope.plus=function(i){
		$scope.items[i].quantity++;
	};
	$scope.remove=function(i){
		if( confirm("确定从购物车中删除这件商品吗？") ){
			$scope.items.splice(i,1);
		};
	};
	$scope.checkout=function(){
		var selected=[];
		for( i=0;i<$scope.items.length;i++ ){
			if( $scope.items[i].selected===true ){
				selected.push($scope.items[i]);
			}
		}
		if( selected.length===0 ){
			alert("您还没有选择任何商品！");
		}else{
			console.log(selected)
		}
	};
	
});
app.controller( "c_register",function( $scope ){
	
	$scope.user={
		ID:"",
		password:"",
		password2:""
	};
	
	$scope.status={
		userID:""
	};
	
	$scope.register=function(){
		
	}
	
	$scope.check=function(){
		if( !$scope.user.ID ){
			$scope.status.userID="error";
		}else{
			$scope.status.userID="success";
		}
	};

});
angular.module("app").directive("commentBox",function( $http ){

	return {
		//template: "",
		templateUrl: "tpl/commentBox.html",
		replace: false,
		link: function (scope,elem,attrs) {

			$http({
				url: "API/comments.json",
				method: "post"
			}).then( function(r){
				scope.comments = r.data.comments;
			});	
			
			elem.css({
				width: "400px",
				padding: "10px",
				background: "lightblue",
				border: "1px solid black",
				color: "red"
			});
			elem.find(".title").css({
				background: "white"
			})
		}
		
	}
	
});
angular.module("app").directive("icon",function(){

	return {
		template: "",
		controller: function($scope){
			$scope.heart = "\f004";
			$scope.plane = "plane";
		}		
	}
	
});
angular.module("app").directive("input-box",function( $http ){

	return {
		template: '<input type="text"/>',
		replace: true,
		link: function (scope,elem,attrs) {
			
		}
		
	}
	
});
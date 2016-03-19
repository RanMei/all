app.controller( "c_register",function($scope){
	
	$scope.user={
		ID:"",
		password:"",
		password2:""
	};
	
	$scope.status={
		userID:""
	}
	
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
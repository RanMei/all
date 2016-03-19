angular.module("app")
.controller("c_lockme",["$scope","$state",function($scope,$state){
	
	$scope.password="";
	$scope.submit=function(){
		if($scope.password=="111111"){
			$state.go("app.dashboard-v1");
		}
	}
	
}]);
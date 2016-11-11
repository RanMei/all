var app=
angular.module( "app", ['ui.router'] );

angular.module("app")
.config( ['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	//
	$urlRouterProvider.otherwise('/orderDetails');
	//
	$stateProvider
	.state('orderDetails',{
		url: '/orderDetails',
		templateUrl: 'tpl/orderDetails.html'
		});
}]);
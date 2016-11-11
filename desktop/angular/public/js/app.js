var app=
angular.module( "app", ['ui.router'] );

angular.module("app")
.config( ['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	//
	$urlRouterProvider.otherwise('/app/shoppingCart');
	//
	$stateProvider
	.state('app',{
		abstract: true,
		url: '/app',
		templateUrl: 'tpl/app.html',
		controller: 'appCtrl'
	})
	.state('app.shoppingCart',{
		url: '/shoppingCart',
		templateUrl: 'tpl/shoppingCart.html',
		controller: 'shoppingCartCtrl'
	})
	.state('app.mail',{
		url: '/mail',
		templateUrl: 'tpl/mail.html'
	})
	.state('app.signup',{
		url: '/signup',
		templateUrl: 'tpl/signup.html'
	})
}]);
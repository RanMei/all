var app=
angular.module( "app", ['ui.router'] );

angular.module("app")
.config( ['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	//
	$urlRouterProvider.otherwise('/app/shopping_cart');
	//
	$stateProvider
	.state('app',{
		abstract: true,
		url: '/app',
		templateUrl: 'tpl/app.html',
		controller: 'c_app'
	})
	.state('app.shopping_cart',{
		url: '/shopping_cart',
		templateUrl: 'tpl/shopping_cart.html',
		controller: 'c_shopping_cart'
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

angular.module("app").directive("hello",function(){
	return {
		controller: ["$scope",function($scope){
			$scope.items = [
				"stark",
				"lannister",
				"targaryen"
			]
		}],
		template: "<p ng-repeat='item in items'>{{item}}</p>"
		
	}
	
});
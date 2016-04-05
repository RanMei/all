var app=
angular.module(    "app",['ui.router'] );

angular.module("app").controller(    "appCtrl",function(){

})

angular.module(    "app")
.config(    ['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	//
	$urlRouterProvider.otherwise(    '/app/home');
	//
	$stateProvider
	.state(    'app',{
		abstract: true,
		url: '/app',
		templateUrl: 'tpl/app.html',
		controller: 'appCtrl'
	})
	.state(    'app.home',{
		url: '/home',
		templateUrl: 'tpl/home.html'
	})
	.state(    'app.brand',{
		url: '/brand',
		templateUrl: 'tpl/brand.html'
	})
	.state(    'app.joinUs',{
		url: '/joinUs',
		templateUrl: 'tpl/joinUs.html'
	})
	.state(    'app.products',{
		url: '/products',
		templateUrl: 'tpl/products.html'
	})
	.state(    'app.contactUs',{
		url: '/contactUs',
		templateUrl: 'tpl/contactUs.html'
	})
}]);

angular.module("app").directive("hello",function(){
	return {

		template: "<p ng-repeat='item in items'>{{item.name}}</p>"
		
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
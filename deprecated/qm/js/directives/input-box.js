angular.module("app").directive("input-box",function( $http ){

	return {
		template: '<input type="text"/>',
		replace: true,
		link: function (scope,elem,attrs) {
			
		}
		
	}
	
});
angular.module("app").directive("commentbox",function( $http ){

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
angular.module("app").directive("commentbox",function(){
	return {

		template: 
			"<h2 class='title'>comment box</h2>" +
			"<p class='commentItem' ng-repeat='x in comments'>" + 
				"{{x.author}} {{x.comment}}" +
			"</p>",
		replace: false,
		link: function (scope,elem,attrs) {
			console.log(elem.find("p"));
			scope.comments = [
				{
					author: "Clark Kent",
					comment: "If I wanted it, you've been dead already!"
				},
				{
					author: "Bruce Wayne",
					comment: "Do you bleed? You will."
				}
			];
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
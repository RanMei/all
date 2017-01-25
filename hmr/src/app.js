require("./example.js");

if(module.hot) {
	module.hot.accept(function(err) {
		if(err) {
			console.error("Cannot apply hot update", err);
		}
	});
}
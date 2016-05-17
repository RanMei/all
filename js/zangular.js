(function(){
	
	var angularModule;

	function setupModuleLoader(window){

		var modules = {};
		function createModule( name,requires ){
			var moduleInstance = {
				name:name,
				requires:requires
			}
			modules[name] = moduleInstance;
			return moduleInstance;
		}
		function getModule( name ){
			return modules[name];
		}
	}

	function angularInit(){

	}

	function bootstrap(){
		
	}

	function publishExternalAPI(){
		angularModule = setupModuleLoader(window);
	}

	function createInjector(){

	}

	function Scope (){
		this.$$watchers = [];
	}

	Scope.prototype = {
		$watch: function(){},
		$digest: function(){

		}
	}

	jqLite(document).ready(function(){
		angularInit( document,bootstrap );
	});

})();
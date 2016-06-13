import {_} from './_.es6';
var $ = window.jQuery || window.$;
	
var forEach = _.forEach;
var angularModule;

// function setupModuleLoader(window){

// 	var modules = {};
// 	function createModule( name,requires ){
// 		var moduleInstance = {
// 			name:name,
// 			requires:requires
// 		}
// 		modules[name] = moduleInstance;
// 		return moduleInstance;
// 	}
// 	function getModule( name ){
// 		return modules[name];
// 	}
// }

var jqLite = $;

function angularInit(){
	var appElement,
		module;
	if( !appElement ){
		appElement = document.querySelector('[ng-app]');
		module = appElement.getAttribute('ng-app');
	}
	console.log(appElement,module);
}

// function bootstrap(){
	
// }

// function publishExternalAPI(){
// 	angularModule = setupModuleLoader(window);
// }

// function createInjector(){

// }

function Scope(){
	this.$$watchers = [];
}

Scope.prototype = {
	$watch: function(){
		var watcher = {};
		this.$$watcher.push(watcher);
	},
	$digest: function(){
		var self = this;
		var oldValue,newValue;
		forEach(self.$$watchers,function( watcher ){

		})
	}
}

jqLite(document).ready(function(){
	angularInit();
});
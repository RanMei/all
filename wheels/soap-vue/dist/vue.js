(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function proxy$1 (vm,key) {
	Object.defineProperty(vm,key,{
		get: function(){
			return vm._data[key];
		},
		set: function(val){
			vm._data[key] = val;
		}
	});
}

function initMixin(Vue) {
	Vue.prototype._init = function(options){
		var vm = this;
		vm.$options = options;
		vm._data = options.data;
		
		var keys = Object.keys(vm._data);
		keys.forEach(key=>{
			proxy$1(vm,key);
		});

		vm._isMounted = false;
	};
}

Vue.prototype.$watch = function(exp,callback){
	var vm = this;
	var watcher = new Watcher(vm,exp,callback);
};

// take 'options' and return a vm.
function Vue (options) {
	this._init(options);
}

initMixin(Vue);
// stateMixin(Vue)
// eventsMixin(Vue)
// lifecycleMixin(Vue)
// renderMixin(Vue)

window.Vue = Vue;

//export default Vue;

})));



function initData(vm,proxy){
	var data = vm.$options.data;
	var keys = Object.keys(data);
	while(keys.length--){
		proxy(vm,key);
	}
}

function initLifecycle (vm) {
	vm._isMounted = false;
}

Vue.prototype.$watch = function(exp,callback){
	var vm = this;
	var watcher = new Watcher(vm,exp,callback);
}

import {initMixin} from './init.js';

// take 'options' and return a vm.
function Vue (options) {
	this._init(options);
}

initMixin(Vue)
// stateMixin(Vue)
// eventsMixin(Vue)
// lifecycleMixin(Vue)
// renderMixin(Vue)

window.Vue = Vue;

//export default Vue;
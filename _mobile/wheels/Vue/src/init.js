import {proxy} from './proxy.js';

function initMixin(Vue) {
	Vue.prototype._init = function(options){
		var vm = this;
		vm.$options = options;
		vm._data = options.data;
		
		var keys = Object.keys(vm._data);
		keys.forEach(key=>{
			proxy(vm,key)
		})

		vm._isMounted = false;
	}
}

export {
	initMixin
}
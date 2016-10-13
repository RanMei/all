function proxy (vm,key) {
	Object.defineProperty(vm,key,{
		get: function(){
			return vm._data[key];
		},
		set: function(val){
			vm._data[key] = val;
		}
	})
}

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



// take 'options' and return a vm.
function Vue (options) {
	this._init(options);
}

Vue.prototype._init = function(options){
	var vm = this;
	vm.$options;
}


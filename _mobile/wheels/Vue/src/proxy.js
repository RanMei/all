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

export {proxy};
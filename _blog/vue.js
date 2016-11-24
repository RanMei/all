vm: {
	uid: 1,
	$options: {},
	_self: vm,

	$parent:
	$root:
	$children:
	_watcher: 
	_isMounted: false,

	_events: [],

	_watchers: [],

	name: 
	get:
	set:
	
	__proto__: {
		_init:
	}
}

data: {
	__ob__: observer,

}

observer: {
	value: data,
	dep: {
		id: 0,
		subs: [watcher,watcher,...]
	},
	__proto__: {
		walk: 
	}
}

watcher: {
	vm: ,
	id: 0,
	expression: ' loggedIn?true:false ',
	callback: ,
	deps: [],
	getter: 
	__proto__: {
		addDep: ,
	}
}

function Observer()

function Watcher()

function Dep()
// the current target watcher being evaluated.
Dep.target = null;

function Vue()
// add some methods to Vue.prototype
initMixin(Vue)
	Vue.prototype._init = 
stateMixin(Vue)
	// vm.$data -> 
	Object.defineProperty(Vue.prototype, '$data', dataDef)
	Vue.prototype.$set = 
	Vue.prototype.$delete = 
	Vue.prototype.$watch =
eventsMixin(Vue)
	Vue.prototype.$on =
lifecycleMixin(Vue)
	Vue.prototype._mount =
	Vue.prototype.$destroy =
renderMixin(Vue)
	Vue.prototype._render =
initGlobalAPI(Vue)
	Object.defineProperty(Vue, 'config', configDef)
	Vue.options = Object.create(null)
	initUse(Vue)
		Vue.use = 
	initMixin(Vue)
		Vue.mixin =
	initExtend(Vue)
	initAssetRegisters(Vue)


// create a Vue instance
Vue(options)
	_init(options)
		vm._uid = 
		vm.$options = mergeOptions(parent,options||{},vm)
		vm._self = vm
		initLifecycle(vm)
			vm.$parent = 
			vm.$root =
			vm.$children = [];
			vm._watcher = null;
			vm.isMounted = false;
		initEvents(vm)
			vm._updateListeners = 
		callHook(vm,'beforeCreate')
		initState(vm)
			vm._watchers = [];
			initProps(vm)
				var props = vm.$options.props;
				// for every prop
				defineReactive( vm,key, )
			initData(vm)
				var data = vm.$options.data;
				// all the variables point to the data object you placed in
				// options
				vm._data = typeof data==='function'? data() : data||{};
				data = vm._data;
				var keys = Object.keys(data);
				while(i--)
					// define a property on vm and turn it into a getter/setter
					// to proxy vm._data[key]
					proxy(vm,keys[i])
						Object.defineProperty(vm,key,{
							configurable: true,
							enumerable: true,
							get: function proxyGetter () {
								return vm._data[key]
							},
							set: function proxySetter (val) {
								vm._data[key] = val
							}
						})
				// create an observer for data
				observe(data:value)
					// primitive-typed values need no observer
					if (!isObject(data)) {
						return
					}
					var observer;
					observer = new Observer(data);
						var observer = this;
						observer.value = data;
						// create a dependency representing data
						// which is actually useless
						// observer.dep
						// observer.dep.subs = [watcher,watcher,...]
						observer.dep = new Dep();
							dep_data.id = 
							// create subscriber
							dep_data.subs = [];
						// data.__ob__
						def(data, '__ob__', this)
						// 
						observer.walk(data)
							// for(var key in data)
							// make every data[key] reactive
							defineReactive(data, key, data[key])
								// create a closure
								// create a new dependency representing data[key]
								var dep_key = new Dep();
								// create a new observer for data[key] 
								// if it is a plain object or an array
								var childObserver = observe(data[key])
    							// create a getter/setter for data[key]
    							// start observe the changing of data[key]
								Object.defineProperty(data, key, {
									enumerable: true,
									configurable: true,
									get: function reactiveGetter(){
										// when data[key] was used,
										// which means that data[key] became a dependency for a watcher
										// push the watcher into dep_key.subs, which means that this
										// watcher becomes a subscriber
										if (Dep.target) {
											dep_key.depend()
												if (Dep.target) {
													var watcher = Dep.target
													watcher.addDep(dep_key)
														dep_key.subs.push(watcher)
									},
									set: function reactiveSetter(){
										// when data[key] was changed
										// the setter of data[key] was invoked
										// create a new observer to replace the old one
										childObserver = observe(newVal);
										// notify all the subscribers to update view
										dep_key.notify()
											var subs = dep_key.subs.slice();
											// for every watcher
											var watcher = subs[i];
											watcher.update();
												watcher.run();
													var value = watcher.get();
														// the current watcher is the target
														pushTarget(watcher);
															if (Dep.target) { targetStack.push(Dep.target) }
															Dep.target = watcher;
														var value = this.getter.call(this.vm, this.vm);
															// take vm._watcher for example
															var vnode = vm._render();
																vnode = render.call(vm._renderProxy, vm.$createElement)
															vm._update( vnode, hydrating )
																vm._vnode = vnode;
																// perform DOM manipulations
																vm.$el = vm.__patch__(prevVnode, vnode);
														popTarget();
													watcher.callback.call(wathcer.vm, value, oldValue)
									}
								})
					retrun observer;
			initComputed(vm)
				Object.defineProperty(vm, key, computedSharedDefinition);
			initMethods(vm)
			initWatch(vm)
				if(vm.$options.watch)
					// create a watcher for watch[key] and
					// push it into vm._watchers
					createWatcher(vm,key,watch[key])
						vm.$watch(key,watch[key])
							const watcher = new Watcher(vm,key,watch[key])
								var watcher = this;
								watcher.vm = vm;
								vm._watchers.push(this);
								watcher.expression = expOrFn.toString();
								watcher.cb = watch[key];
								watcher.id = ++uid;
								if (typeof expOrFn === 'function') {
									watcher.getter = expOrFn
								} else {
									watcher.getter = parsePath(expOrFn)
								}
								watcher.value = this.get();
									pushTarget(watcher)
										if (Dep.target) { targetStack.push(Dep.target) }
										Dep.target = watcher;
									var value = watcher.getter.call(watcher.vm, watcher.vm);


		callHook(vm,'created')
			vm.$emit('created')
		initRender(vm)
			vm.$vnode = null;
			if (vm.$options.el) {
				vm.$mount(vm.$options.el)
					var options = this.$options
					// create a render function if there isn't one
					if (!options.render) {
						var template = options.template;
						if (template) {}
						if (template) {
							var ref = compileToFunctions(template, {
								var res = {};
								// compile the template:string into ?
								var compiled = compile$$1(template, options)
									// Convert HTML string to AST
									var ast = parse( template.trim(), options );
										var root;
										parseHTML()
										return root;
									optimize(ast, options);
									var code = generate(ast, options);
								res.render = makeFunction(compiled.render)
									return new Function(compiled.render)
								return res;
							var render = ref.render;
							options.render = render;
							return vm._mount()
								callHook(vm, 'beforeMount')
								// create a watcher for vm and its callback is noop
								vm._watcher = new Watcher(vm, function () {
									vm._update(vm._render(), hydrating)
								}, noop);
								if(vm.$root===vm){
									vm._isMounted = true
									callHook(vm, 'mounted')
								}
								return vm;
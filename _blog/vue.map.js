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

var observerState = {
	shouldConvert: true,
	isSettingProps: false
};
function Observer()

function Watcher()

function Dep()
// the current target watcher being evaluated.
Dep.target = null;
var targetStack = [];

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
		vm._uid = uid++;
		vm.$options = mergeOptions(parent,options||{},vm)
			checkComponents(options);
			normalizeProps(options);
		initProxy(vm)
		vm._self = vm;
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
				defineReactive( vm,key,props[key]:value )
			// data-driven view-changing
			initData(vm)
				var data = vm.$options.data;
				// all the variables point to the data object you placed in
				// options
				vm._data = typeof data==='function'? data() : data||{};
				data = vm._data;
				var keys = Object.keys(data);
				// for every data[key]
				// define a property on vm and turn it into a getter/setter
				// to proxy vm._data[key]
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
				// make data observable
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
							defineReactive(data, key, data[key]:value)
								// create a closure
								// create a new dependency representing data[key]
								var dep_key = new Dep();
									dep.id = uid++;
									dep.subs = [];
								// create a new observer for data[key] 
								// if it is a plain object or an array
								var childObserver = observe(data[key])
    							// turn data[key] into a getter/setter
								Object.defineProperty(data, key, {
									enumerable: true,
									configurable: true,
									get: function reactiveGetter(){
										// when data[key] was used
										// if a watcher is currently being evaluated
										if (Dep.target) {
											// which means that data[key] is a dependency of current watcher
											dep_key.depend()
												if (Dep.target) {
													var watcher = Dep.target
													// push dep into current watcher's watcher.deps
													watcher.addDep(dep_key:dep)
														var id = dep.id
														if (!watcher.newDepIds.has(id)) {
															watcher.newDepIds.add(id)
															watcher.newDeps.push(dep)
															if (!watcher.depIds.has(id)) {
																dep.addSub(watcher)
																	dep.subs.push(watcher)
															}
														}
									},
									set: function reactiveSetter(newVal){
										if (newVal === value) {
											return
										}
										// when data[key] was changed
										// the setter of data[key] was invoked
										// create a new observer to replace the old one
										// but nothing will happen if newVal is primitive-typed
										childObserver = observe(newVal);
										// notify all the subscribers of this dep to update view
										dep_key.notify()
											var subs = dep_key.subs.slice();
											// do nothing if dep.subs is empty
											// which means that no watcher needs to update
											// for every watcher depending on data[key]
											var watcher = subs[i];
											watcher.update();
												watcher.run();
													// evaluate this watcher
													var value = watcher.get();
														// the current watcher is the target
														// var targetStack = [];
														pushTarget(watcher);
															if (Dep.target) { targetStack.push(Dep.target) }
															Dep.target = watcher;
														// get the new value of this watcher
														// and all the deps of current watcher will be recollected
														// into watcher.newDeps in this process
														var value = watcher.getter.call(watcher.vm, watcher.vm);

															// if the watcher is vm._watcher
															// regenerate the virtual DOM every time
															var vnode = vm._render();
																// call the render-function
																// vm._renderProxy is actually vm?
																vnode = render.call(vm._renderProxy, vm.$createElement)
															vm._update( vnode, hydrating )
																vm._vnode = vnode;
																// perform DOM manipulations
																vm.$el = vm.__patch__(prevVnode, vnode);

															// if the watcher is vm._watchers[i]
															// 
														popTarget();
															// Dep.target will be undefined if targetStack is already empty
															// which means that evaluation of watchers is over
															Dep.target = targetStack.pop();
														// 
														watcher.cleanupDeps();
															watcher.deps = watcher.newDeps;
														return value;
													watcher.callback.call(wathcer.vm, value, oldValue)
									}
								})
					retrun observer;
			initComputed(vm)
				var computed = vm.$options.computed;
				if (computed) {
					for (var key in computed) {
						Object.defineProperty(vm, key, computedSharedDefinition);
					};
				};
			initMethods(vm)
			initWatch(vm)
			// create the value of vm._watchers
				if(vm.$options.watch){
					// create a watcher for watch[key] and
					// push it into vm._watchers
					createWatcher(vm,key,watch[key])
						vm.$watch(key,watch[key])
							const watcher = new Watcher(vm,key:expOrFn,watch[key]:cb)
				}


		callHook(vm,'created')
			vm.$emit('created')
		initRender(vm)
		// vm._vnode = null;
		// vm._watcher = new Watcher
			vm.$vnode = null;
			vm._vnode = null;
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
										parseHTML(html,options)

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
									vm._update(vm._render():vnode, hydrating)
								}:expOrFn, noop);
									var watcher = this;
									watcher.vm = vm;
									vm._watchers.push(this);
									watcher.expression = expOrFn.toString();
									watcher.cb = watch[key];
									watcher.id = ++uid;
									watcher.active = true;
									watcher.deps = [];
									watcher.newDeps = [];
									if (typeof expOrFn === 'function') {
										// for vm._watcher
										watcher.getter = expOrFn
									} else {
										watcher.getter = parsePath(expOrFn)
									}
									// collect all the deps
									// the value of vm._watcher will always be undefined
									watcher.value = this.get();
										pushTarget(watcher)
											if (Dep.target) { targetStack.push(Dep.target) }
											Dep.target = watcher;
										var value = watcher.getter.call(watcher.vm, watcher.vm);
								if(vm.$root===vm){
									vm._isMounted = true
									callHook(vm, 'mounted')
								}
								return vm;
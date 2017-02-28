new Vue();
  return vm;
Vue.use();
Vue.extend();
Vue.Component();

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
new Vue(options)
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
        // convert data into an observable
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
                    
                  },
                  set: function reactiveSetter(newVal){
                    
                  }
                })
          retrun observer;
      initComputed(vm)
        var computed = vm.$options.computed;
        if (computed) {
          for (var key in computed) {
            var userDef = computed[key];
            if (typeof userDef === 'function') {
              computedSharedDefinition.get = makeComputedGetter(userDef, vm);
                var watcher = new Watcher(owner, getter, noop, {
                  lazy: true
                });
                return function computedGetter () {
                  if (watcher.dirty) {
                    watcher.evaluate();
                  }
                  if (Dep.target) {
                    watcher.depend();
                  }
                  return watcher.value
                }
              computedSharedDefinition.set = noop;
            }
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

// when data[key] was changed
vm[key] = val;
  proxySetter(val);
    vm._data[key] = val;
  // the setter of data[key] was invoked
  reactiveSetter( newVal );
    if (newVal === value) {
      return
    }
    // create a new observer to replace the old one
    // but nothing will happen if newVal is primitive-typed
    childObserver = observe(newVal);
    // notify all the subscribers(watchers) of this dep to update view
    dep.notify()
      var subs = dep.subs.slice();
      // do nothing if dep.subs is empty
      // which means that no watcher needs to update
      // for every watcher depending on data[key]
      var watcher = subs[i];
      watcher.update();
        if (watcher.lazy) {
          watcher.dirty = true;
        } else if (watcher.sync) {
          watcher.run();
        } else {
          queueWatcher( watcher );
            if (!flushing) {
              queue.push(watcher);
            } else {
              // if a flushing is in process
              // if already flushing, splice the watcher based on its id
              // if already past its id, it will be run next immediately.
              var i = queue.length - 1;
              while (i >= 0 && queue[i].id > watcher.id) {
                i--;
              }
              queue.splice(Math.max(i, index) + 1, 0, watcher);
            }
            if (!waiting) {
              waiting = true;
              // the next flushing will happen when the execution stack is empty
              nextTick(flushSchedulerQueue);
            }
        }

{
  var queue = [];
  var has$1 = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;
}

nextTickHandler()
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }

flushSchedulerQueue()
  flushing = true;
  // root_computed_watcher, root_watch_watcher, root_render_watcher, 
  // child_computed_watcher
  queue.sort(function (a, b) { return a.id - b.id; });
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has$1[id] = null;
    watcher.run();
      // evaluate this watcher
      // get the new value of the watcher
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

          // if the watcher is a computed_watcher or a watch_watcher
          // for example:
          return this.$store.state.user;

          // if the watcher is vm._watcher/(a render watcher)
          // call vm._render to get the new vnode
          // vnode is just a plain old object
          var vnode = vm._render();
            // call the render-function
            // vm._renderProxy is actually vm?
            vnode = render.call(vm._renderProxy, vm.$createElement)
          // update vm!!!!!
          vm._update( vnode, hydrating )
            if (vm._isMounted) {
              callHook(vm, 'beforeUpdate');
            }
            var prevEl = vm.$el;
            var prevVnode = vm._vnode;
            vm._vnode = vnode;
            // perform DOM manipulations on watcher.vm.$el
            // Vue.prototype.__patch__ = 
            vm.$el = vm.__patch__(prevVnode, vnode);

          // ********** 

          // for all the values used in the evaluation
          proxyGetter();
          reactiveGetter();
            // when data[key] was used
            // if a watcher is currently being evaluated
            if (Dep.target) {
              // which means that data[key] is a dependency of current watcher
              dep.depend()
                if (Dep.target) {
                  var watcher = Dep.target
                  
                  watcher.addDep(dep:dep)
                    var id = dep.id
                    // push dep into current watcher's watcher.deps
                    // if it is not in it
                    if (!watcher.newDepIds.has(id)) {
                      watcher.newDepIds.add(id)
                      watcher.newDeps.push(dep)
                      if (!watcher.depIds.has(id)) {
                        dep.addSub(watcher)
                          dep.subs.push(watcher)
                      }
                    }
        popTarget();
          // Dep.target will be undefined if targetStack is already empty
          // which means that evaluation of watchers is over
          Dep.target = targetStack.pop();
        // 
        watcher.cleanupDeps();
          watcher.deps = watcher.newDeps;
        return value;
      watcher.callback.call(wathcer.vm, value, oldValue)
  resetSchedulerState();
    // clear the queue
    queue.length = 0;
    has$1 = {};
    circular = {};
    // and this flushing is complete.
    waiting = flushing = false;

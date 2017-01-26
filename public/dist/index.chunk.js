/******/ (function(modules) { // webpackBootstrap
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(callback) { // eslint-disable-line no-unused-vars
/******/ 		if(typeof XMLHttpRequest === "undefined")
/******/ 			return callback(new Error("No browser support"));
/******/ 		try {
/******/ 			var request = new XMLHttpRequest();
/******/ 			var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 			request.open("GET", requestPath, true);
/******/ 			request.timeout = 10000;
/******/ 			request.send(null);
/******/ 		} catch(err) {
/******/ 			return callback(err);
/******/ 		}
/******/ 		request.onreadystatechange = function() {
/******/ 			if(request.readyState !== 4) return;
/******/ 			if(request.status === 0) {
/******/ 				// timeout
/******/ 				callback(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 			} else if(request.status === 404) {
/******/ 				// no update available
/******/ 				callback();
/******/ 			} else if(request.status !== 200 && request.status !== 304) {
/******/ 				// other failure
/******/ 				callback(new Error("Manifest request to " + requestPath + " failed."));
/******/ 			} else {
/******/ 				// success
/******/ 				try {
/******/ 					var update = JSON.parse(request.responseText);
/******/ 				} catch(e) {
/******/ 					callback(e);
/******/ 					return;
/******/ 				}
/******/ 				callback(null, update);
/******/ 			}
/******/ 		};
/******/ 	}

/******/ 	
/******/ 	
/******/ 	// Copied from https://github.com/facebook/react/blob/bef45b0/src/shared/utils/canDefineProperty.js
/******/ 	var canDefineProperty = false;
/******/ 	try {
/******/ 		Object.defineProperty({}, "x", {
/******/ 			get: function() {}
/******/ 		});
/******/ 		canDefineProperty = true;
/******/ 	} catch(x) {
/******/ 		// IE will fail on defineProperty
/******/ 	}
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "f04883c056626a706660"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					if(me.children.indexOf(request) < 0)
/******/ 						me.children.push(request);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				if(canDefineProperty) {
/******/ 					Object.defineProperty(fn, name, (function(name) {
/******/ 						return {
/******/ 							configurable: true,
/******/ 							enumerable: true,
/******/ 							get: function() {
/******/ 								return __webpack_require__[name];
/******/ 							},
/******/ 							set: function(value) {
/******/ 								__webpack_require__[name] = value;
/******/ 							}
/******/ 						};
/******/ 					}(name)));
/******/ 				} else {
/******/ 					fn[name] = __webpack_require__[name];
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		function ensure(chunkId, callback) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			__webpack_require__.e(chunkId, function() {
/******/ 				try {
/******/ 					callback.call(null, fn);
/******/ 				} finally {
/******/ 					finishChunkLoading();
/******/ 				}
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		}
/******/ 		if(canDefineProperty) {
/******/ 			Object.defineProperty(fn, "e", {
/******/ 				enumerable: true,
/******/ 				value: ensure
/******/ 			});
/******/ 		} else {
/******/ 			fn.e = ensure;
/******/ 		}
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback;
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback;
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "number")
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 				else
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailibleFilesMap = {};
/******/ 	var hotCallback;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply, callback) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		if(typeof apply === "function") {
/******/ 			hotApplyOnUpdate = false;
/******/ 			callback = apply;
/******/ 		} else {
/******/ 			hotApplyOnUpdate = apply;
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 		hotSetStatus("check");
/******/ 		hotDownloadManifest(function(err, update) {
/******/ 			if(err) return callback(err);
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				callback(null, null);
/******/ 				return;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotAvailibleFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			for(var i = 0; i < update.c.length; i++)
/******/ 				hotAvailibleFilesMap[update.c[i]] = true;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			hotCallback = callback;
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailibleFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailibleFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var callback = hotCallback;
/******/ 		hotCallback = null;
/******/ 		if(!callback) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate, callback);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			callback(null, outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options, callback) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		if(typeof options === "function") {
/******/ 			callback = options;
/******/ 			options = {};
/******/ 		} else if(options && typeof options === "object") {
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		} else {
/******/ 			options = {};
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function getAffectedStuff(module) {
/******/ 			var outdatedModules = [module];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice();
/******/ 			while(queue.length > 0) {
/******/ 				var moduleId = queue.pop();
/******/ 				var module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return new Error("Aborted because of self decline: " + moduleId);
/******/ 				}
/******/ 				if(moduleId === 0) {
/******/ 					return;
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return new Error("Aborted because of declined dependency: " + moduleId + " in " + parentId);
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push(parentId);
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return [outdatedModules, outdatedDependencies];
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				var moduleId = toModuleId(id);
/******/ 				var result = getAffectedStuff(moduleId);
/******/ 				if(!result) {
/******/ 					if(options.ignoreUnaccepted)
/******/ 						continue;
/******/ 					hotSetStatus("abort");
/******/ 					return callback(new Error("Aborted because " + moduleId + " is not accepted"));
/******/ 				}
/******/ 				if(result instanceof Error) {
/******/ 					hotSetStatus("abort");
/******/ 					return callback(result);
/******/ 				}
/******/ 				appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 				addAllToSet(outdatedModules, result[0]);
/******/ 				for(var moduleId in result[1]) {
/******/ 					if(Object.prototype.hasOwnProperty.call(result[1], moduleId)) {
/******/ 						if(!outdatedDependencies[moduleId])
/******/ 							outdatedDependencies[moduleId] = [];
/******/ 						addAllToSet(outdatedDependencies[moduleId], result[1][moduleId]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(var i = 0; i < outdatedModules.length; i++) {
/******/ 			var moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			var moduleId = queue.pop();
/******/ 			var module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(var j = 0; j < disposeHandlers.length; j++) {
/******/ 				var cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(var j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				var idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				for(var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 					var dependency = moduleOutdatedDependencies[j];
/******/ 					var idx = module.children.indexOf(dependency);
/******/ 					if(idx >= 0) module.children.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(var moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					var dependency = moduleOutdatedDependencies[i];
/******/ 					var cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(var i = 0; i < callbacks.length; i++) {
/******/ 					var cb = callbacks[i];
/******/ 					try {
/******/ 						cb(outdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(var i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			var moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else if(!error)
/******/ 					error = err;
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return callback(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		callback(null, outdatedModules);
/******/ 	}

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: hotCurrentParents,
/******/ 			children: []
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };

/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _router = __webpack_require__(3);

	var _store = __webpack_require__(22);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new Vue({
		el: '#root',
		store: _store2.default,
		router: _router.router,
		components: {
			App: __webpack_require__(29)
		},
		template: '<app></app>'
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Vue.use(VueRouter);

	var routes = [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		component: __webpack_require__(4)
	}, {
		path: '/projects',
		component: __webpack_require__(10)
	}, {
		path: '/blog',
		component: __webpack_require__(14)
	}, {
		path: '/post',
		component: __webpack_require__(18)
	}];
	// 	redirect: '/home',
	// 	children: [{
	// 		path: 'home',
	// 		component: require('./Home.vue')
	// 	}]
	// }];

	var router = new VueRouter({
		routes: routes
	});

	exports.router = router;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(5);

	/* script */
	__vue_exports__ = __webpack_require__(6);

	/* template */
	var __vue_template__ = __webpack_require__(7);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\router\\Home.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-5cf0da80";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-5cf0da80", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-5cf0da80", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] Home.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 5 */
2,
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Home"
	  }, [_c('div', {
	    staticClass: "block"
	  }, [_vm._v("\n\t\tGreetings! I am a front-end developer."), _c('br'), _vm._v("\n\t\tGithub: github.com/403177368"), _c('br'), _vm._v("\n\t\tWebsite: madsoap.net"), _c('br'), _vm._v("\n\t\tWelcome, my friend! This is my personal website! Maybe you want to tap the navicon on top-left?\n\t")])])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-5cf0da80", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	var Vue // late bind
	var map = window.__VUE_HOT_MAP__ = Object.create(null)
	var installed = false
	var isBrowserify = false
	var initHookName = 'beforeCreate'

	exports.install = function (vue, browserify) {
	  if (installed) return
	  installed = true

	  Vue = vue
	  isBrowserify = browserify

	  // compat with < 2.0.0-alpha.7
	  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
	    initHookName = 'init'
	  }

	  exports.compatible = Number(Vue.version.split('.')[0]) >= 2
	  if (!exports.compatible) {
	    console.warn(
	      '[HMR] You are using a version of vue-hot-reload-api that is ' +
	      'only compatible with Vue.js core ^2.0.0.'
	    )
	    return
	  }
	}

	/**
	 * Create a record for a hot module, which keeps track of its constructor
	 * and instances
	 *
	 * @param {String} id
	 * @param {Object} options
	 */

	exports.createRecord = function (id, options) {
	  var Ctor = null
	  if (typeof options === 'function') {
	    Ctor = options
	    options = Ctor.options
	  }
	  makeOptionsHot(id, options)
	  map[id] = {
	    Ctor: Vue.extend(options),
	    instances: []
	  }
	}

	/**
	 * Make a Component options object hot.
	 *
	 * @param {String} id
	 * @param {Object} options
	 */

	function makeOptionsHot (id, options) {
	  injectHook(options, initHookName, function () {
	    map[id].instances.push(this)
	  })
	  injectHook(options, 'beforeDestroy', function () {
	    var instances = map[id].instances
	    instances.splice(instances.indexOf(this), 1)
	  })
	}

	/**
	 * Inject a hook to a hot reloadable component so that
	 * we can keep track of it.
	 *
	 * @param {Object} options
	 * @param {String} name
	 * @param {Function} hook
	 */

	function injectHook (options, name, hook) {
	  var existing = options[name]
	  options[name] = existing
	    ? Array.isArray(existing)
	      ? existing.concat(hook)
	      : [existing, hook]
	    : [hook]
	}

	function tryWrap (fn) {
	  return function (id, arg) {
	    try { fn(id, arg) } catch (e) {
	      console.error(e)
	      console.warn('Something went wrong during Vue component hot-reload. Full reload required.')
	    }
	  }
	}

	exports.rerender = tryWrap(function (id, options) {
	  var record = map[id]
	  if (typeof options === 'function') {
	    options = options.options
	  }
	  record.Ctor.options.render = options.render
	  record.Ctor.options.staticRenderFns = options.staticRenderFns
	  record.instances.slice().forEach(function (instance) {
	    instance.$options.render = options.render
	    instance.$options.staticRenderFns = options.staticRenderFns
	    instance._staticTrees = [] // reset static trees
	    instance.$forceUpdate()
	  })
	})

	exports.reload = tryWrap(function (id, options) {
	  if (typeof options === 'function') {
	    options = options.options
	  }
	  makeOptionsHot(id, options)
	  var record = map[id]
	  record.Ctor.extendOptions = options
	  var newCtor = Vue.extend(options)
	  record.Ctor.options = newCtor.options
	  record.Ctor.cid = newCtor.cid
	  if (newCtor.release) {
	    // temporary global mixin strategy used in < 2.0.0-alpha.6
	    newCtor.release()
	  }
	  record.instances.slice().forEach(function (instance) {
	    if (instance.$vnode && instance.$vnode.context) {
	      instance.$vnode.context.$forceUpdate()
	    } else {
	      console.warn('Root or manually mounted instance modified. Full reload required.')
	    }
	  })
	})


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = window.Vue;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(11);

	/* script */
	__vue_exports__ = __webpack_require__(12);

	/* template */
	var __vue_template__ = __webpack_require__(13);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\router\\Projects.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-10d4374a";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-10d4374a", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-10d4374a", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] Projects.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 11 */
2,
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {},
		computed: {
			list: function list() {
				console.log(this.$store);
				return this.$store.state.projects;
			}
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Projects"
	  }, [_c('div', {
	    staticClass: "log"
	  }, [_vm._v("\n\t\tAh, you finally got here! These are the projects I am maintaining currently.\n\t")]), _vm._v(" "), _vm._l((_vm.list), function(a) {
	    return _c('div', {
	      staticClass: "panel--"
	    }, [_c('div', {
	      staticClass: "heading__"
	    }, [_c('span', {
	      staticClass: "title"
	    }, [_vm._v(_vm._s(a.title))])]), _vm._v(" "), (a.desc) ? _c('div', {
	      staticClass: "desc"
	    }, [_vm._v("\n\t\t\t" + _vm._s(a.desc) + "\n\t\t")]) : _vm._e(), _vm._v(" "), (a.hrefs) ? _c('div', {
	      staticClass: "panel-body"
	    }, _vm._l((a.hrefs), function(b) {
	      return _c('span', [_c('a', {
	        attrs: {
	          "href": b,
	          "target": "_blank"
	        }
	      }, [_vm._v(_vm._s(b))]), _c('br')])
	    })) : _vm._e()])
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-10d4374a", module.exports)
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(15);

	/* script */
	__vue_exports__ = __webpack_require__(16);

	/* template */
	var __vue_template__ = __webpack_require__(17);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\router\\Blog.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-71d897fa";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-71d897fa", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-71d897fa", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] Blog.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 15 */
2,
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		computed: {
			list: function list() {
				return this.$store.state.posts.items;
			}
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Blog"
	  }, [_c('div', {
	    staticClass: "list"
	  }, _vm._l((_vm.list), function(a) {
	    return _c('div', {
	      staticClass: "list-item"
	    }, [_c('a', {
	      staticClass: "title",
	      attrs: {
	        "href": '#/post?time=' + a.time
	      }
	    }, [_vm._v("\n\t\t\t\t" + _vm._s(a.title) + "\n\t\t\t")]), _vm._v(" "), _c('p', {
	      staticClass: "time"
	    }, [_vm._v(_vm._s(a.time))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-71d897fa", module.exports)
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(19);

	/* script */
	__vue_exports__ = __webpack_require__(20);

	/* template */
	var __vue_template__ = __webpack_require__(21);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\router\\Post.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-1ba16e01";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-1ba16e01", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-1ba16e01", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] Post.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 19 */
2,
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {},
		computed: {
			post: function post() {
				console.log(this.$store.state.post);
				return this.$store.state.post;
			}
		},
		mounted: function mounted() {
			this.$store.dispatch('$POST_FETCH');
		}
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Post"
	  }, [_c('div', {
	    staticClass: "post-title"
	  }, [_vm._v(_vm._s(_vm.post.title))]), _vm._v(" "), _c('div', {
	    staticClass: "post-time"
	  }, [_vm._v(_vm._s(_vm.post.time))]), _vm._v(" "), _c('div', {
	    staticClass: "post-body"
	  }, _vm._l((_vm.post.body), function(a) {
	    return _c('p', [_vm._v(_vm._s(a))])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-1ba16e01", module.exports)
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vuex = __webpack_require__(23);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _projects = __webpack_require__(24);

	var _projects2 = _interopRequireDefault(_projects);

	var _posts = __webpack_require__(25);

	var _posts2 = _interopRequireDefault(_posts);

	var _post = __webpack_require__(26);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = new _vuex2.default.Store({
		modules: {
			projects: _projects2.default,
			posts: _posts2.default,
			post: _post2.default
		},
		actions: {
			INIT: function INIT(_ref) {
				var commit = _ref.commit;

				var projects = __webpack_require__(27).default;
				var posts = __webpack_require__(28).default;
				commit('PROJECTS.FETCH', projects);
				commit('POSTS.FETCH', posts);
			},
			$POST_FETCH: function $POST_FETCH(_ref2) {
				var state = _ref2.state;
				var commit = _ref2.commit;

				console.log(state);
				var newPost;
				var time = location.hash.match(/time=[\d|-]+/)[0].replace(/time=/, '');
				state.posts.forEach(function (a) {
					if (a.time === time) {
						newPost = a;
					}
				});
				commit('POST.FETCH', newPost);
			}
		}
	});

	exports.default = store;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = window.Vuex;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var state = [];

	var mutations = {
		'PROJECTS.FETCH': function PROJECTSFETCH(state, arr) {
			state.push.apply(state, _toConsumableArray(arr));
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var state = {
		items: []
	};

	var mutations = {
		'POSTS.FETCH': function POSTSFETCH(state, arr) {
			var _state$items;

			(_state$items = state.items).push.apply(_state$items, _toConsumableArray(arr));
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var state = {
		title: '',
		time: '',
		body: []
	};

	var mutations = {
		'POST.FETCH': function POSTFETCH(state, obj) {
			for (var key in obj) {
				state[key] = obj[key];
			}
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = [{
		title: 'Farm',
		desc: 'An E-commerce mobile webapp built with react, react-router, redux and webpack.',
		hrefs: ['./_mobile/farm/index.html']
	}, {
		title: 'Time',
		desc: 'An E-commerce website with an admin system built using vue, vue-router, vuex and webpack.',
		hrefs: ['./time/index.html']
	}, {
		title: 'Desktop',
		desc: 'Some desktop website projects.',
		hrefs: ['./fytpy/index.html', './fytpy/react/index.html', './caredaily/index.html', './desktop/_wolf/index.html', './desktop/presentation/index.html']
	}, {
		title: 'H5',
		desc: 'So-called H5 projects',
		hrefs: ['./_mobile/h5/star_wars/index.html', './_mobile/h5/olympics/index.html', './_mobile/h5/olympics/result.html', './_mobile/h5/carnival/index.html', './_mobile/h5/school/index.html', './_mobile/h5/feast/feast.html', './_mobile/h5/live/live.html', './_mobile/h5/project/index.html', './_mobile/h5/wolf/index.html']
	}, {
		title: 'Canvas',
		desc: '',
		hrefs: ['./_canvas/Heart.html', './_canvas/NeonHexagons/index.html', './_canvas/DriftingBalls/index.html', './_canvas/lion/index.html', './_canvas/cube/canvas_geometry_cube.html']
	}, {
		title: 'Vue Components',
		desc: 'Some animated vue components',
		hrefs: ['./_mobile/vue/index.html']
	}];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = [{
		title: 'What is functional programming?',
		time: '2016-10-3',
		body: ['Functional programming is a programming paradigm. Functional programming is a programming paradigm.', 'These are some important concepts in functional programming: higher-order function, pure function, side effects... These are some important concepts in functional programming: higher-order function, pure function, side effects...']
	}, {
		title: 'How to learn English?',
		time: '2016-10-4',
		body: ['huh?adsgadga', 'what the hell?dfadfafa', 'dgfdgsfdhfdhfsdh']
	}];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(30);

	/* script */
	__vue_exports__ = __webpack_require__(31);

	/* template */
	var __vue_template__ = __webpack_require__(42);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\router\\App.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-09dac450";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-09dac450", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-09dac450", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 30 */
2,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		components: {
			Navbar: __webpack_require__(32),
			Slider: __webpack_require__(36),
			Footer: __webpack_require__(39)
		},
		mounted: function mounted() {
			this.$store.dispatch('INIT');
		}
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(33);

	/* script */
	__vue_exports__ = __webpack_require__(34);

	/* template */
	var __vue_template__ = __webpack_require__(35);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\components\\Navbar.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-65063b78";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-65063b78", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-65063b78", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] Navbar.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 33 */
2,
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		data: function data() {
			return {
				show: false
			};
		},
		methods: {
			toggle: function toggle() {
				this.show = !this.show;
			},
			hide: function hide() {
				this.show = false;
			}
		}
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Navbar"
	  }, [_c('div', {
	    staticClass: "navicon",
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-navicon"
	  })]), _vm._v("\n\tMadSoap\n\t"), _c('div', {
	    class: _vm.show ? 'box _show' : 'box',
	    on: {
	      "click": _vm.hide
	    }
	  }, [_vm._m(0), _vm._v(" "), _vm._m(1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "section"
	  }, [_c('div', {
	    staticClass: "tab"
	  }, [_c('a', {
	    attrs: {
	      "href": "#/home"
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-home"
	  }), _vm._v(" Home")])]), _vm._v(" "), _c('div', {
	    staticClass: "tab"
	  }, [_c('a', {
	    attrs: {
	      "href": "#/projects"
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-rocket"
	  }), _vm._v(" Projects")])]), _vm._v(" "), _c('div', {
	    staticClass: "tab"
	  }, [_c('a', {
	    attrs: {
	      "href": "#/animations"
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-cog fa-spin"
	  }), _vm._v(" Animations")])]), _vm._v(" "), _c('div', {
	    staticClass: "tab"
	  }, [_c('a', {
	    attrs: {
	      "href": "#/blog"
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-book"
	  }), _vm._v(" Blog")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "section-bottom"
	  }, [_c('div', {
	    staticClass: "tab"
	  }, [_c('a', {
	    attrs: {
	      "href": "./_mobile/farm/index.html",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-money"
	  }), _vm._v(" Farm")])]), _vm._v(" "), _c('div', {
	    staticClass: "tab"
	  }, [_c('a', {
	    attrs: {
	      "href": "./front_end.html",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-file-text"
	  }), _vm._v(" Animation Library")])]), _vm._v(" "), _c('div', {
	    staticClass: "tab"
	  }, [_c('a', {
	    attrs: {
	      "href": "./time/index.html",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-file-text"
	  }), _vm._v(" Time")])])])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-65063b78", module.exports)
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(37);

	/* template */
	var __vue_template__ = __webpack_require__(38);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\components\\Slider.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-1c0d6e95";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-1c0d6e95", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-1c0d6e95", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] Slider.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 37 */
2,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Slider"
	  }, [_c('a', {
	    attrs: {
	      "href": "#/home"
	    }
	  }, [_vm._v("Home")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#/projects"
	    }
	  }, [_vm._v("Projects")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#/animations"
	    }
	  }, [_vm._v("Animation")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#/blog"
	    }
	  }, [_vm._v("Blog")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "./_mobile/farm/index.html"
	    }
	  }, [_vm._v("Farm")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "./_mobile/vue/index.html"
	    }
	  }, [_vm._v("Vue")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "./time/index.html"
	    }
	  }, [_vm._v("Time")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "./time/admin.html"
	    }
	  }, [_vm._v("Admin")])])
	}]}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-1c0d6e95", module.exports)
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(40);

	/* template */
	var __vue_template__ = __webpack_require__(41);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "E:\\git\\all\\_mobile\\main\\src\\components\\Footer.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-2ecabe4f";

	/* hot reload */
	if (true) {
	  (function () {
	    var hotAPI = __webpack_require__(8);
	    hotAPI.install(__webpack_require__(9), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-2ecabe4f", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2ecabe4f", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] Footer.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 40 */
2,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Footer"
	  }, [_vm._v("\n\tCopyright ©2016 SoapTech\n")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-2ecabe4f", module.exports)
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "root"
	    }
	  }, [_c('Navbar'), _vm._v(" "), _c('Slider'), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('Footer')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(8).rerender("data-v-09dac450", module.exports)
	  }
	}

/***/ }
/******/ ])));
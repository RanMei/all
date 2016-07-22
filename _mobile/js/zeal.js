/******/ (function(modules) { // webpackBootstrap
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
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _2 = __webpack_require__(1);

	//var _ = require('./_.js');

	// Module: core
	var arr = [];
	var slice = arr.slice;

	// This is a factory function to create a Zeal object.
	// @param {string} selector
	var Zeal = function Zeal(selector, context) {
		return new Zeal.prototype.init(selector, context);
	};

	Zeal.fn = Zeal.prototype = {
		each: function each(callback) {
			for (var i = 0; i < this.length; i++) {
				callback(this[i], i);
			}
		},
		eq: function eq(i) {
			return Zeal(this[i]);
		},
		index: function index(selector) {
			var theOne = this[0];
			var match = Zeal(selector);
			var _index = -1;
			match.each(function (elem, i) {
				if (theOne === elem) {
					_index = i;
				}
			});
			return _index;
		},
		siblings: function siblings() {},
		toArray: function toArray() {
			return arr.slice.call(this);
		}
	};

	Zeal.extend = Zeal.fn.extend = function (src) {
		_2._.extend(this, src);
	};

	Zeal.extend({
		copy: _2._.copy,
		camelCase: _2._.camelCase
	});

	/**
	 * Create a Zeal object.
	 * This is a constructor.
	 * @param {object|string} selector
	 */
	var init = Zeal.prototype.init = function (selector, context) {
		if (!context) {
			var context = document;
		}
		var elems;
		this.selector = selector;
		// $(window), $(document), $(this)
		if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
			//if( Array.isArray(selector) ){
			if (selector.length) {
				for (var i = 0; i < selector.length; i++) {
					this[i] = selector[i];
				}
				this.length = selector.length;
			} else {
				this[0] = selector;
				this.length = 1;
			}
		};

		if (typeof selector === 'string') {
			if (selector === '') {
				this.length = 1;
			} else if (/>/.test(selector)) {
				elems = context.querySelectorAll(selector);
			} else if (/^#/.test(selector)) {
				// $('#id')
				var string = selector.replace(/#/, '');
				elems = context.getElementById(string);
			} else if (/^\./.test(selector)) {
				// $('.className')
				var string = selector.replace(/\./, '');
				elems = context.getElementsByClassName(string);
			} else {
				// $('tagName')
				elems = context.getElementsByTagName(selector);
			}
			;
			if (elems.length) {
				for (var i = 0; i < elems.length; i++) {
					this[i] = elems[i];
				}
			} else {
				this[0] = elems;
			}
			this.length = elems.length;
		};
	};
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	Zeal.fn = Zeal.prototype;
	init.prototype = Zeal.prototype;
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	Zeal.fn.find = function (selector) {
		var context = this[0];
		return Zeal(selector, context);
	};

	// $(document).ready()
	Zeal.fn.ready = function (callback) {
		// this[0] is actually document.
		var elem = this[0];
		// if( elem.readyState==="complete" ){
		// 	callback();
		// }else{
		// 	elem.addEventListener( "readystatechange",function(){
		// 		if( elem.readyState==="complete" ){
		// 			alert('444')
		// 			callback();
		// 		};
		// 	});
		// };
		document.addEventListener('DOMContentLoaded', callback);
	};

	// Module: events
	// $().on()
	Zeal.fn.on = function (events, callback) {
		events = events.split(' ');
		this.each(function (elem) {
			for (var i = 0; i < events.length; i++) {
				elem.addEventListener(events[i], function (e) {
					var event = {};
					event.originalEvent = e;
					event.preventDefault = e.preventDefault.bind(e);
					event.stopPropagation = e.stopPropagation.bind(e);
					callback.call(e.currentTarget, event);
				});
			};
		});
	};

	Zeal.fn.extend({
		// @param {string} className
		addClass: function addClass(className) {
			this.each(function (elem) {
				elem.classList.add(className);
			});
			return this;
		},
		removeClass: function removeClass(className) {
			this.each(function (elem) {
				elem.classList.remove(className);
			});
			return this;
		},
		attr: function attr(name, value) {
			if (arguments.length === 1) {
				return this[0].getAttribute(name);
			} else {
				this.each(function (elem) {
					elem.setAttribute(name, value);
				});
				return this;
			}
		},
		removeAttr: function removeAttr(key) {
			this.each(function (elem) {
				elem.removeAttribute(key);
			});
		}
	});

	// Module: DOM manipulation
	Zeal.fn.extend({
		/**
	  * Sets the innerHTML of matched elements.
	  * @param {string} string
	  */
		html: function html(string) {
			this.each(function (elem) {
				elem.innerHTML = string;
			});
			return this;
		},
		append: function append(obj) {
			this.each(function (elem) {
				if (typeof obj === 'string') {
					elem.innerHTML += obj;
				} else {
					for (var i = 0; i < obj.length; i++) {
						elem.appendChild(obj[i]);
					}
				}
			});
		},
		prepend: function prepend(obj) {
			var fragment = document.createDocumentFragment();
			var container = document.createElement('div');
			this.each(function (elem) {
				if (typeof obj === 'string') {
					container.innerHTML = obj;
					arr.slice.call(container.children).forEach(function (item) {
						fragment.appendChild(item);
					});
				} else {
					obj.forEach(function (item) {
						fragment.appendChild(item);
					});
				}
				elem.insertBefore(fragment, elem.firstChild);
				fragment.textContent = '';
			});
		},
		remove: function remove() {
			this.each(function (elem) {
				elem.parentNode.removeChild(elem);
			});
		}

	});

	// Module: css
	Zeal.fn.extend({
		// @param {object} opts
		css: function css(opts) {
			if (arguments.length === 1) {
				if (typeof arguments[0] === 'string') {
					// css( name )
					var elem = this[0] || this;
					var name = arguments[0];
					return document.defaultView.getComputedStyle(elem)[name];
				} else {
					// typeof arguments[0]==='object'
					this.each(function (elem) {
						var cssText = '';
						for (var prop in opts) {
							if (!/-/.test(prop)) {
								var _prop = prop.replace(/[A-Z]/g, function (letter) {
									return '-' + letter.toLowerCase();
								});
								if (/(transform)|(transition)/.test(_prop)) {
									cssText += _prop + ':' + opts[prop] + ';-webkit-' + _prop + ':' + opts[prop] + ';';
									//console.log(cssText)
								} else {
										cssText += _prop + ':' + opts[prop] + ';';
									}
							} else {
								cssText += prop + ':' + opts[prop] + ';';
							}
						};
						elem.style.cssText += cssText;
					});
					return this;
				}
			}
		},
		width: function width(number) {
			if (number) {
				this.each(function (elem) {
					elem.style.width = number + 'px';
				});
			} else {
				return Number(Zeal.fn.css.call(this, 'width').replace(/px/, ''));
			}
		},
		height: function height(number) {
			if (number) {
				this.each(function (elem) {
					elem.style.height = number + 'px';
				});
			} else {
				return Number(Zeal.fn.css.call(this, 'height').replace(/px/, ''));
			}
		},
		hide: function hide() {
			this.each(function (elem) {
				elem.style.display = 'none';
			});
			return this;
		},
		show: function show() {
			this.each(function (elem) {
				elem.style.display = 'block';
			});
			return this;
		}
	});

	// Module: animate
	/**
	 * @param {object} opts
	 * @param {number} time
	 * @param {function} callback
	 */
	Zeal.fn.animate = function (opts, duration, callback) {
		this.each(function (elem) {
			var p = {};
			var target = {};
			var dp = {};
			var interval;
			var iteration = Math.ceil(duration / 10);
			var i = 0;
			//console.log(iteration);
			for (var prop in opts) {
				p[prop] = Number(document.defaultView.getComputedStyle(elem)[prop].replace(/px/, ''));
				if (/\+|\-/.test(opts[prop])) {
					target[prop] = p[prop] + Number(opts[prop].replace(/(px)|\+|\=/g, ''));
				} else {
					target[prop] = opts[prop];
				}
				dp[prop] = (target[prop] - p[prop]) / (duration / 10);
			}
			interval = setInterval(function () {
				if (i < iteration) {
					for (var prop in opts) {
						p[prop] += dp[prop];
						elem.style[prop] = p[prop] + (prop === 'opacity' ? 0 : "px");
					};
					i++;
				} else {
					clearInterval(interval);
					for (var prop in opts) {
						elem.style[prop] = target[prop];
					};
					if (callback) {
						callback();
					};
				};
			}, 10);
		});
	};
	//
	Zeal.fn.extend({
		slideUp: function slideUp(duration, callback) {
			this.css({ overflow: 'hidden' });
			this.animate({ height: 0 }, duration, callback);
		},
		fadeOut: function fadeOut(duration, callback) {
			this.animate({ opacity: 0 }, duration, callback);
		},
		fadeIn: function fadeIn(duration) {
			this.animate({ opacity: 1 }, duration);
		},
		fadeToggle: function fadeToggle(duration) {
			this.each(function (elem, i) {
				var currentOpacity = Number(document.defaultView.getComputedStyle(elem).opacity);
				if (currentOpacity === 1) {
					Zeal(elem).fadeOut(duration);
				} else if (currentOpacity === 0) {
					Zeal(elem).fadeIn(duration);
				};
			});
		}
	});

	// Module: ajax
	Zeal.ajax = function (obj) {
		var xhr = new XMLHttpRequest();
		xhr.open(obj.type, obj.url);
		xhr.send(obj.data || null);
		xhr.onreadystatechange = function () {
			var data = xhr.responseText;
			if (xhr.status === 200) {
				obj.success(data);
			};
		};
	};

	if (window.$ === undefined) {
		console.log('window.$ is window.Zeal.');
		window.$ = Zeal;
	} else {
		window.Zeal = Zeal;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _ = {
		bubbleSort: bubbleSort,
		camelCase: camelCase,
		copy: copy,
		//each
		deepClone: deepClone,
		extend: extend,
		forEach: forEach
		//map
	};

	// Functions to process strings.
	/**
	 * Make a string camelcased.
	 * @param  {string} string
	 * @return {string}
	 */
	function camelCase(string) {
		string = string.replace(/(-[a-z]?)|(_[a-z]?)/ig, function (match) {
			return match.replace(/-|_/, '').toUpperCase();
		});
		return string;
	}

	/**
	 * Traverse an array or an array-like object.
	 * 
	 * @param  {array|object}   arr      [description]
	 * @param  {Function} callback [description]
	 */
	function forEach(src, callback) {
		if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) === 'object') {
			for (var i = 0; i < src.length; i++) {
				callback(src[i], i);
			}
		} else {
			throw new TypeError('src must be an object or an array.').stack;
		}
	}
	function bubbleSort(arr) {
		var i = 0;
		while (i < arr.length - 1) {
			for (var j = i + 1; j < arr.length - 1; j++) {
				if (arr[i] > arr[j]) {
					var x = arr[i];
					arr[i] = arr[j];
					arr[j] = x;
				};
			};
			i++;
		}
		return arr;
	}

	// Functions to process objects.
	/**
	 * Extend an object.
	 * 
	 * @param  {object} obj [description]
	 * @return {object}     [description]
	 */
	function extend(target, src, deep) {
		for (var key in src) {
			if (deep && src[key] === 'object') {
				target[key] = extend(target[key], src[key], true);
			} else {
				target[key] = src[key];
			};
		}
		return target;
	}
	function deepExtend(target, src) {
		return extend(target, src, true);
	}

	function copy(src, deep) {
		var __copy;
		if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) === "object") {
			if (src.length) {
				__copy = [];
			} else {
				__copy = {};
			};
			for (var key in src) {
				if (deep && _typeof(src[key]) === "object") {
					__copy[key] = copy(src[key], true);
				} else {
					__copy[key] = src[key];
				};
			};
			return __copy;
		} else {
			throw new TypeError('src must be an object.').stack;
		}
	};
	function shallowCopy(src) {
		return copy(src, false);
	}
	function deepClone(src) {
		return copy(src, true);
	}

	window._ = _;

	exports._ = _;

/***/ }
/******/ ]);
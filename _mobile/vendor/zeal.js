(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
	if ((typeof src === "undefined" ? "undefined" : _typeof(src)) === "object") {
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
function clone(target, src, deep) {
	return extend(target, src, deep);
}

exports.extend = extend;
exports.clone = clone;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.trim = exports.forEach = exports.clone = exports.extend = exports.camelCase = exports.bubbleSort = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extend = require('./extend.js');

// Functions to process strings.
function trim(str) {
	return str.replace(/(^\s+)|(\s+$)/g, '');
}
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

exports.bubbleSort = bubbleSort;
exports.camelCase = camelCase;
exports.extend = _extend.extend;
exports.clone = _extend.clone;
exports.forEach = forEach;
exports.trim
//map
 = trim;

},{"./extend.js":1}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _index2 = require('../_/index.js');

// Module: core
var arr = [];
var slice = arr.slice;

// This is a factory function to create a Zeal object.
// @param {string} selector
var Zeal = function Zeal(selector, context) {
	return new Zeal.prototype.init(selector, context);
};

Zeal.fn = Zeal.prototype = {
	length: 0,
	each: function each(callback) {
		_index2._.forEach(this, callback);
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
	_index2._.extend(this, src);
};

Zeal.extend({
	isArray: Array.isArray,
	copy: _index2._.copy,
	camelCase: _index2._.camelCase
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
				var fragment = document.createDocumentFragment();
				var container = document.createElement('div');
				container.innerHTML = obj;
				arr.slice.call(container.children).forEach(function (item) {
					fragment.appendChild(item);
				});
				elem.appendChild(fragment);
			} else {
				if (obj.length) {
					for (var i = 0; i < obj.length; i++) {
						elem.appendChild(obj[i]);
					}
				} else {
					elem.appendChild(obj);
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
				for (var i = 0; i < obj.length; i++) {
					fragment.appendChild(obj[i]);
				}
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
		} else if (this[0] === document) {
			// Chrome || Firefox
			return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
		} else if (this[0] === window) {
			return window.innerHeight;
		} else {
			return Number(Zeal.fn.css.call(this, 'height').replace(/px/, ''));
		}
	},
	scrollTop: function scrollTop() {
		// Chrome || Firefox
		var val = document.body.scrollTop || document.documentElement.scrollTop;
		return val;
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
	xhr.timeout = 5000;
	xhr.ontimeout = function () {
		console.log('timeout');
	};
	xhr.onerror = function (xhr, type) {
		console.log(xhr, type);
	};
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var data = xhr.responseText;
				obj.success(data);
			};
		};
	};
	xhr.open(obj.type, obj.url);
	xhr.send(obj.data || null);
};

if (window.$ === undefined) {
	window.$ = Zeal;
	console.warn('Zeal: window.$ is window.Zeal.');
} else {
	console.warn('Zeal: $ is already occupied.');
	window.Zeal = Zeal;
}

},{"../_/index.js":2}]},{},[3]);

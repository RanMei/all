var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isArray(a){
	return Array.isArray(a);
}

function isFunction(a){
	
}

export {
	isPlainObject,
	isArray
};
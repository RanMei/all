import {isPlainObject} from './util.js';

/**
 * Extend an object.
 * 
 * @param  {object} obj [description]
 * @return {object}     [description]
 */
function extend ( target,src,deep ){
	for( var key in src ){
		if( deep&& typeof src[key]==='object' ){
			target[key] = extend( target[key],src[key],true );
		}else{
			target[key] = src[key];
		};
	}
	return target;
}
function deepExtend( target,src ){
	return extend( target,src,true );
}

function copy ( src,deep ){
	var __copy;
	if( typeof src === "object" ){
		if( src.length ){
			__copy = [];
		}else{
			__copy = {};
		};
		for( var key in src ){
			if( deep && typeof src[key] === "object" ){
				__copy[key] = copy( src[key],true );
			}else{
				__copy[key] = src[key];
			};
		};
		return __copy;
	}else{
		throw new TypeError('src must be an object.').stack;
	}
};
function shallowCopy(src){
	return copy(src,false)
}
function deepClone(src){
	return copy(src,true)
}
function clone(target,src,deep){
	return extend(target,src,deep);
}

export {
	extend,
	clone
}
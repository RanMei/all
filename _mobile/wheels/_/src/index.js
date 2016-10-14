import {extend,clone} from './extend.js';

// Functions to process strings.
function trim( str ){
	return str.replace(/(^\s+)|(\s+$)/g,'');
}
/**
 * Make a string camelcased.
 * @param  {string} string
 * @return {string}
 */
function camelCase( string ){
	string = string.replace(/(-[a-z]?)|(_[a-z]?)/ig,function(match){
		return match.replace(/-|_/,'').toUpperCase();
	});			
	return string;
}

/**
 * Traverse an array or an array-like object.
 * 
 * @param  {array|object}   arr      [description]
 * @param  {Function} callback [description]
 */
function forEach( src,callback ){
	if( typeof src==='object' ){
		for( var i=0;i<src.length;i++ ){
			callback( src[i],i );
		}
	}else{
		throw new TypeError('src must be an object or an array.').stack;
	}
}
function bubbleSort(arr){
	var i = 0;
	while( i<arr.length-1 ){
		for( var j=i+1;j<arr.length-1;j++ ){
			if( arr[i]>arr[j] ){
				var x = arr[i];
				arr[i] = arr[j];
				arr[j] = x;
			};
		};
		i++;
	}
	return arr;
}



export {
	bubbleSort,
	
	trim,
	camelCase,

	extend,
	clone,

	forEach
	//map
};
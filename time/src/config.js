console.log(location)

var _DOMAIN;
if( /^http/.test(location.href) ){
	_DOMAIN = location.origin+'/time';
}else{
	_DOMAIN = 'file:///D:/git/all/time';
}

console.log(_DOMAIN)

const DIR = {
	img: _DOMAIN+'/../fytpy/images',
	//api: _DOMAIN+'/../api/time',
	api: 'http://localhost:80/api',
	index: _DOMAIN+'/index.html',
	cart: _DOMAIN+'/cart.html',
	item: _DOMAIN+'/item.html',
	search: _DOMAIN+'/search.html'
}


const IMG = '/fytpy/images/';
const ITEM = ''

export {DIR,IMG};
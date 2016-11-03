console.log(location)

var _DOMAIN;
if( /^http/.test(location.href) ){
	_DOMAIN = location.origin+'/time';
}else{
	_DOMAIN = 'file:///D:/git/all/time';
}

console.log(_DOMAIN)

const DIR = {
	root: _DOMAIN,
	img: _DOMAIN+'/../fytpy/images',
	//api: _DOMAIN+'/../api/time',
	api: 'http://localhost:80/api',

	admin: _DOMAIN+'/admin.html',

	index: _DOMAIN+'/index.html',
	cart: _DOMAIN+'/cart.html',
	item: _DOMAIN+'/item.html',
	search: _DOMAIN+'/search.html'
}

export {DIR};
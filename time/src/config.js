
var _root;
if( /^http/.test(location.href) ){
	_root = location.origin+'/time';
}else{
	_root = 'file:///D:/git/all/time';
}

const DIR = {
	root: _root,
	img: _root+'/../fytpy/images',
	//api: _root+'/../api/time',
	api: 'http://localhost:80/api',

	admin: _root+'/admin.html',

	index: _root+'/index.html',
	cart: _root+'/cart.html',
	item: _root+'/item.html',
	search: _root+'/search.html'
}

export {DIR};
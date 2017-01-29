
var _root;
if( /^http/.test(location.href) ){
	_root = location.origin+'/time';
}else{
	_root = 'file:///D:/git/all/time';
}

const DIR = {
	root: _root,
	img: _root+'/../img/time',
	//api: _root+'/../api/time',
	api: location.origin+'/api',

	admin: _root+'/admin.html',

	index: _root+'/index.html',
	cart: _root+'/cart.html',
	item: _root+'/item.html',
	search: _root+'/search.html'
}

export {DIR};
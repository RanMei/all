var _root;
if( /^http/.test(location.href) ){
	_root = location.origin+'/time';
}else{
	_root = 'file:///E:/git/all/time';
}

const DIR = {
	root: _root,
	img: _root+'/../img/time',
	//api: _root+'/../api/time',
	api: 'http://localhost:80/api',

	admin: _root+'/admin.html',

	index: _root+'/index.html',
	cart: _root+'/cart.html',
	item: _root+'/item.html',
	search: _root+'/search.html'
}

const state = {
	DIR: DIR
}

const mutations = {
}


export default {state,mutations};
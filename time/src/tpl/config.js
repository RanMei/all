const config = [{
	name: 'index'
},{
	name: 'signin'
},{
	name: 'cart'
},{
	name: 'item'
},{
	name: 'search'
},{
	name: 'test'
},{


	name: 'admin'
}];

config.forEach(a=>{
	if(process.env.NODE_ENV==='production'){
		a.env = 'production';
	}else{
		a.env = 'development';
	}
})

module.exports = config;
const fs = require('fs');

module.exports = function(app,db){
	app.get('/api',(req,res)=>{
		res.set({
			'Content-Type': 'application/json'
		})
		res.status(200).send({
			'items': '/api/items'
		})
	})
  require('./api.user.js')(app,db);
  require('./api.items.js')(app,db);
  require('./api.cart.js')(app,db,fs);
};
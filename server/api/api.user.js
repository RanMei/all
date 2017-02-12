module.exports = function(app,db){

	app.get('/api/user',(req,res)=>{
		console.log(req.session)
		if( req.session.user ){
			res.send(JSON.stringify( req.session.user ));
		}else{
			res.send(JSON.stringify({}));
		}
	})

	app.post('/api/login',(req,res)=>{
		var payload = req.body;
		var user = db.get('users').find({id:payload.name}).value();
		if( user&&payload.name===user.id&&payload.password===user.password ){
			req.session.user = {
				loggedIn: true,
				id: payload.name,
				name: payload.name
			};
			res.send(JSON.stringify({
				state: 'successful'
			}))
		}else{
			res.send(JSON.stringify({
				state: 'failed'
			}))
		}
	})

	app.get('/api/logout',(req,res)=>{
		req.session.destroy();

	})

	app.post('/api/checkMobile',function(req,res){
		var mobile = req.body.mobile;

		if( db.get('users').find({id:mobile}).value() ){
			res.send(JSON.stringify({
				state: true
			}))
		}else{
			res.send(JSON.stringify({
				state: false
			}))
		}
	})

	app.post('/api/signup',function(req,res){
		
		res.set({
			'Content-Type': 'application/json'
		})
		
	})

	// app.post('/api/signin',function(req,res){
	// 	// req.body = {};
	// 	var item = req.body;
	// 	if( db.get('items').find({id:item.id}).value() ){
	// 		db.get('items').find({id:item.id}).assign(item).value();
	// 	}else{
	// 		db.get('items').push(item).value();
	// 	}
	// 	res.send();
	// })

	// app.delete('/api/items',function(req,res){
	// 	// req.body = []
	// 	req.body.forEach(id=>{
	// 		db.get('items').remove({id:id}).value();	
	// 	})
		
	// 	res.send();
	// })

}
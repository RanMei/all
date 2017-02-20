module.exports = function(app,db){

	app.get('/api/user',(req,res)=>{
		// console.log(req.session)
		if( req.session.user ){
			res.send(JSON.stringify( req.session.user ));
		}else{
			res.send(JSON.stringify({}));
		}
	})

	app.post('/api/login',(req,res)=>{
		var payload = req.body;
		var pms = new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve( db.get('users').find({id:payload.name}).value() );
			},100)
		});
		pms.then((user)=>{
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
	})

	app.get('/api/logout',(req,res)=>{
		req.session.destroy();
		res.send(JSON.stringify({
			state: 'successful'
		}))
	})

	app.post('/api/checkMobile',function(req,res){
		var mobile = req.body.mobile;

		var pms = new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve( db.get('users').find({id:mobile}).value() );
			},100)
		});
		pms.then((mobileNumber)=>{
			if( mobileNumber ){
				res.send(JSON.stringify({
					state: true
				}))
			}else{
				res.send(JSON.stringify({
					state: false
				}))
			}
		})
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

}
module.exports = function(app,db){

	app.get('/api/items',function(req,res){
		//var items = fs.readFileSync( DIR.api+'items.json' ).toString();
		res.set({
			'Content-Type': 'application/json'
		})
		res.send( db.get('items').value() );
	})

	app.post('/api/items',function(req,res){
		// req.body = {};
		var item = req.body;
		if( db.get('items').find({id:item.id}).value() ){
			db.get('items').find({id:item.id}).assign(item).value();
		}else{
			db.get('items').push(item).value();
		}
		res.send();
	})

	app.delete('/api/items',function(req,res){
		// req.body = []
		req.body.forEach(id=>{
			db.get('items').remove({id:id}).value();	
		})
		
		res.send();
	})

}
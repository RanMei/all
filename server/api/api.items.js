module.exports = function(app,db){

	app.get('/api/items',function(req,res){
		var items = [];
		if( req.query.brand ){
			items = items.concat( db.get('items').find({brand:req.query.brand}).value() );
		}else{
			items = items.concat( db.get('items').value() );
		};
		res.set({
			'Content-Type': 'application/json'
		})
		res.status(200).send( items );
	})

	app.get('/api/items/:id',function(req,res){
		res.set({
			'Content-Type': 'application/json'
		})
		var item = db.get('items').find({id:req.params.id}).value();
		if( item===undefined ){
			res.status(404).send({
				error: 'Item not found.'
			})
		}else{
			res.status(200).send({
				item
			})
		}
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

	app.patch('/api/items',(req,res)=>{

	})

	app.delete('/api/items',function(req,res){
		req.body.forEach(id=>{
			db.get('items').remove({id:id}).value();	
		})
		
		res.status(204).send();
	})

}
module.exports = function(app,db){

	app.get('/api/item',function(req,res){
		var id = req.query.id;
		var item = '{}';
		item = db.get('items').find({id:id}).value();
		res.set({
			'Content-Type': 'application/json'
		})
		console.log('[GET] /api/item '+req.query.id);
		console.log(db.get('items').value())
		res.send( item );
	});

}
module.exports = function(app,db,fs){

	app.post('/getShoppingCart',function(req,res){
		var shoppingCart = JSON.parse( fs.readFileSync('./json/shopping_cart.json') );
		res.set({
			'Content-Type': 'application/json'
		})
		res.send( JSON.stringify(shoppingCart) );
	})

	app.post('/addToCart',function(req,res){
		console.log('shit')
		var itemID = req.body.itemID;
		var quantity = req.body.quantity;
		var items = {};
		var shoppingCart = JSON.parse( fs.readFileSync('./json/shopping_cart.json') );
		var items = JSON.parse( fs.readFileSync('./json/items-farm.json') );
		items.forEach(function(elem){
			if( elem.id===itemID ){
				item = elem;
			}
		});
		item.quantity = quantity;
		shoppingCart.push( item );
		fs.writeFile( './json/shopping_cart.json', JSON.stringify(shoppingCart) );
		res.set({
			'Content-Type': 'text/plain'
		})
		res.send( 'true' );
	})

}
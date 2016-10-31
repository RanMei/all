var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var low = require('lowdb');

const db = low('./api/main.db');

const DIR = {
	root: __dirname+'/../',
	api: __dirname+'/../api/time_json/'
}

const port = 80;
var app = express();

app.use( express.static(DIR.root) );
app.use( bodyParser.json() );
app.use( cookieParser() );
//app.use( '/api',express() )

app.get('/signup',function(req,res){
	res.send('hello')
})

app.post('/login',function(req,res){
	//console.log(req.body);
	res.set({
		'Content-Type': 'text/plain'
	})
	var users = JSON.parse(fs.readFileSync('./json/users.json'));
	var ok = false;
	users.forEach(function(elem){
		if( req.body.userID===elem.userID&&req.body.password===elem.password ){
			ok = true;
		}
	});
	if( ok ){
		res.send( 'true' );
	}else{
		res.send( 'false' );
	}
	
})

require('./items.js')(app,db);

app.get('/api/item',function(req,res){
	var id = req.query.id;
	var item = '{}';
	item = db.get('items').find({id:id}).value();
	res.set({
		'Content-Type': 'application/json'
	})
	res.send( item );
})

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

// app.post('/logout',function(req,res){
// 	res.clearCookie('userID',{path:'/'});
// 	res.send('');
// });

// app.post('/getUser',function(req,res){
// 	console.log(req.cookies);
// 	var userID = req.cookies.userID;
// 	var user = {
// 		uesrID: userID
// 	};

// 	var p1 = new Promise(function(resolve,reject){
// 		connection.query('SELECT * FROM shoppingCart where username = ?',[userID],function(err,rows,fiels){
// 			user.shoppingCart = rows;
// 			resolve();
// 		})
// 	});
// 	var p2 = new Promise(function(resolve,reject){
// 		connection.query('SELECT * FROM deliveryInformation where username = ?',[userID],function(err,rows,fiels){
// 			user.deliveryInformation = rows;
// 			resolve();
// 		})
// 	});
// 	Promise.all([p1,p2]).then(function(){
// 		res.send( JSON.stringify(user) );
// 	});
// })

// app.post('/getItem',function(req,res){
// 	console.log( req.body )
// 	var itemID = req.body.itemID;
// 	var data;
// 	// res.set({
// 	// 	'Content-Type': 'application/json'
// 	// })
// 	connection.query('SELECT * FROM items where itemID = ?',[itemID],function(e,rows){
// 		console.log(e,rows);
// 		data = JSON.stringify(rows[0]);
// 		console.log( data,typeof data );
// 		//res.type('application/json');
// 		res.send( data );
// 	});
// })

app.listen(port,function(){
	console.log( 'Server running at '+port+'.' );
});

// process.on('beforeExit',function(){
// 	console.log('exit current');
// })

var i = 0;
process.on('uncaughtException',function(e){
	// console.log(e);
	// i++;
	// app.listen(port+i,function(){
	// 	console.log( 'Server running at '+(port+i)+'.' );
	// });
	console.log(e)
	console.log('Server is already in running at '+port+'.')
	//process.kill(process.pid);
})
//process.exit();
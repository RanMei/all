var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

const port = 8080;
var app = express();

app.use( express.static(__dirname+'/../') );
app.use( bodyParser.json() );
app.use( cookieParser() );

app.post('/login',function(req,res){
	//console.log(req.body);
	res.set({
		'Content-Type': 'text/plain'
	})
	//var users = JSON.parse(fs.readFileSync('./json/users.json'));
	//console.log(users);
	if( req.body.userID==='15911111111'&&req.body.password==='111111' ){
		res.send( 'true' );
	}else{
		res.send( 'false' );
	}
	
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
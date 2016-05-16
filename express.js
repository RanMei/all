var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

const port = 3000;
var app = express();

app.use( express.static(__dirname) );
app.use( bodyParser.json() );
app.use( cookieParser() );

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '',
	database:'fytpy'
});
connection.connect();

app.post('/login',function(req,res){
	console.log(req.body);
	var userID = req.body.username;
	var password = req.body.password;
	var data;
	res.set({
		'Content-Type': 'text/plain'
	})
	connection.query('SELECT * FROM users where username = ? and password = ?',[userID,password],function(err,rows){
		if( rows.length>=1 ){
			res.set({
				'Set-Cookie': 'userID='+userID,
			})
			res.send("true");
			// app.use( session({
			// 	genid: function(req) {
			// 		return genuuid() // use UUIDs for session IDs 
			// 	},
			// 	secret: 'keyboard cat',
			// 	resave: false,
			// 	saveUninitialized: true,
			// 	cookie: { secure: true }
			// }) );
		}else{
			res.send("false");
		}
	})
})

app.post('/logout',function(req,res){
	res.clearCookie('userID',{path:'/'});
	res.send('');
});

app.post('/getUser',function(req,res){
	console.log(req.cookies);
	var userID = req.cookies.userID;
	var user = {
		uesrID: userID
	};

	var p1 = new Promise(function(resolve,reject){
		connection.query('SELECT * FROM shoppingCart where username = ?',[userID],function(err,rows,fiels){
			user.shoppingCart = rows;
			resolve();
		})
	});
	var p2 = new Promise(function(resolve,reject){
		connection.query('SELECT * FROM deliveryInformation where username = ?',[userID],function(err,rows,fiels){
			user.deliveryInformation = rows;
			resolve();
		})
	});
	Promise.all([p1,p2]).then(function(){
		res.send( JSON.stringify(user) );
	});
})

app.post('/getItem',function(req,res){
	console.log( req.body )
	var itemID = req.body.itemID;
	var data;
	// res.set({
	// 	'Content-Type': 'application/json'
	// })
	connection.query('SELECT * FROM items where itemID = ?',[itemID],function(e,rows){
		console.log(e,rows);
		data = JSON.stringify(rows[0]);
		console.log( data,typeof data );
		//res.type('application/json');
		res.send( data );
	});
})

app.listen(port,function(){
	console.log( 'Server running at '+port+'.' );
});

//console.log(connection);
//console.log( 'Database Connected' );

fs.exists('./expres.js',function(r){
	console.log(r);
});
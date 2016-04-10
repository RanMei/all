var fs = require('fs');
var express = require('express');
var mysql = require('mysql');

var app = express();

fs.exists('./expres.js',function(r){
	console.log(r);
});


app.use( express.static(__dirname+'/fytpy') );
console.log( 'Server running at 8888.' );
app.listen(8888);

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : ''
});

console.log( 'Database Connected' );
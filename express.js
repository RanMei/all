var fs = require('fs');
var express = require('express');
var mysql = require('mysql');

var app = express();

fs.exists('./expres.js',function(r){
	console.log(r);
});


app.use( express.static(__dirname) );
console.log( 'Server running at 80.' );
app.listen(80);

app.post(__dirname+'/react',function(req,res){
	res.send("fuck");
})

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : ''
});

console.log( 'Database Connected' );
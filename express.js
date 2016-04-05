var express = require('express');
var app = express();

app.use( express.static(__dirname+'/caredaily') );
console.log( 'Server running at 8888.' );
app.listen(8888);
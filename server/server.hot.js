'use strict';
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
const PORT = 80;

app.use( express.static(__dirname+'/../public/') );
app.use( bodyParser.json() );
app.use( cookieParser() );

//app.use(require('morgan')('short'));

var low = require('lowdb');
const db = low('./api/main.db');

require('./api/index.js')(app,db);

// ************************************
// This is the real meat of the example
// ************************************
(function() {

  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
  var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  // Add the client which connects to our middleware
  // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
  // useful if you run your app from another point like django
  for( let key in webpackConfig.entry ){
    webpackConfig.entry[key].push( hotMiddlewareScript );
  }

  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    //noInfo: true, 
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, 
    path: '/__webpack_hmr', 
    heartbeat: 10 * 1000
  }));
})();

// Do anything you like with the rest of your express application.

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
// app.get("/multientry", function(req, res) {
//   res.sendFile(__dirname + '/index-multientry.html');
// });

// if (require.main === module) {
//   var server = http.createServer(app);
//   server.listen(process.env.PORT || 80, function() {
//     console.log("Listening on %j", server.address());
//   });
// }

app.listen( PORT, () => {
  console.log(`[HMR]Server listening on http://localhost:${PORT}, Ctrl+C to stop`)
})
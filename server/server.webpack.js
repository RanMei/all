'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path')

var config = require("../hot/webpack.config.dev.js");

//config.entry.hmr.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
for(let key in config.entry){
	config.entry[key].unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
}

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: path.resolve( __dirname,'../public' ),
  //historyApiFallback: true,
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  //  progress: true,
  port: 8080,
  //stats: 'errors-only',
  stats: {
	  colors: true,
	  chunks: false
	}
});
server.listen(8080);
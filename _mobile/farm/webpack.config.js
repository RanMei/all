var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'index': ['./_mobile/farm/src/main.jsx']
	},
	output: {
		path: path.resolve( __dirname,'../../public/farm/dist/'),
		publicPath: './dist/',
		filename: 'bundle.js'
	},
	// debug: true,
	// devtool: 'source-map', 
	module: {
		loaders: [{
			test: /(\.jsx)|(\.js)$/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /\.vue$/,
			loader: 'vue'
		},{
			test: /\.less$/,
			loader: 'style!css!less!postcss'
		}]
	},
	postcss: function () {
		return [autoprefixer];
	},
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'NODE_ENV': JSON.stringify('production')
		// 	}
		// })
		// new webpack.optimize.UglifyJsPlugin({
  //           mangle: {
  //               except: []
  //           },
  //           compress: {
  //               warnings: false
  //           }
  //       })
	]
};
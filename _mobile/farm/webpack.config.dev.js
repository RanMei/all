var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var base = require('./webpack.config.base.js');

module.exports = Object.assign(base,{
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
	    new webpack.DefinePlugin({
	      __DEV: true
	    }),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	  ],
});
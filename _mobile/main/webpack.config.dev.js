const path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var base = require('./webpack.config.base.js');

module.exports = Object.assign(base,{
	module: {
		loaders: [{
			test: /(\.js)|(\.jsx)$/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			},
			exclude: /node_modules/
		},{
			test: /\.vue$/,
			loader: 'babel!vue'
		},{
			test: /\.less$/,
			loader: 'style!css!less!postcss'
		}]
	},
	vue: {
		loaders: {
			less: 'style!css!less!postcss'
		}
	},
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
    	new webpack.DefinePlugin({
    		'process.env': {
    			NODE_ENV: '"development"'
    		}
    	}),
    	new webpack.optimize.DedupePlugin(),
	  	new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
    ]
});
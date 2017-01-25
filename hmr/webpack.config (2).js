const path = require('path');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'hmr': ['./time/src/_hmr/index.js'],

		'index': ['./time/src/_index/index.js'],
		'signin': ['./time/src/_signin/index.js'],

		'item': ['./time/src/_item/item.js'],
		'cart': ['./time/src/_cart/cart.js'],
		'search': ['./time/src/_search/search.js'],
		'test': ['./time/src/_test/index.js'],
		'./_admin/admin': ['./time/src/_admin/index.js']
	},
	output: {
		path: path.resolve( __dirname, 'time/dist/' ),
		publicPath: '/time/dist/',
		filename: '[name].chunk.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /\.vue$/,
			loader: 'babel!vue'
		},{
			test: /\.less$/,
			//loader: 'style!css!less!postcss'
			loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
		}]
	},
	vue: {
		loaders: {
			less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
		}
	},
	postcss: function () {
        return [autoprefixer];
    },
    resolve: {
		alias: {vue: 'vue/dist/vue.js'}
	},
    plugins: [
    	new webpack.DefinePlugin({
		  "process.env": {
		    NODE_ENV: JSON.stringify("production")
		  }
		}),
    	// new webpack.optimize.CommonsChunkPlugin({
    	// 	name: 'common',
    	// 	minChunks: 2
    	// },['index','item','search','cart']),
    	new webpack.optimize.LimitChunkCountPlugin({
    		maxChunks: 10
    	}),
    	new webpack.optimize.DedupePlugin(),
    	//new webpack.optimize.UglifyJsPlugin(),
    	new webpack.optimize.CommonsChunkPlugin(
    		'common.chunk.js',
    		['index','item','search','cart']
    	),
    	new ExtractTextPlugin('[name].style.css',{
    		allChunks: true
    	}),
    	new webpack.HotModuleReplacementPlugin()
    ]
};

//console.log( process.env.NODE_ENV )
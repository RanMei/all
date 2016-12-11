var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': './_canvas/src/index.js',
	},
	output: {
		path: __dirname+'_canvas/dist/',
		publicPath: './dist/',
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
			loader: 'style!css!less!postcss'
			//loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
		}]
	},
	vue: {
		loaders: {
			//less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
		}
	},
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
    	// new webpack.optimize.CommonsChunkPlugin({
    	// 	name: 'common',
    	// 	minChunks: 2
    	// },['index','item','search','cart']),
    	new webpack.optimize.LimitChunkCountPlugin({
    		maxChunks: 10
    	}),
    	new webpack.optimize.DedupePlugin()
    	//new webpack.optimize.UglifyJsPlugin(),
    	// new webpack.optimize.CommonsChunkPlugin(
    	// 	'common.chunk.js',
    	// 	['index','item','search','cart']
    	// )
    	// new ExtractTextPlugin('style.css',{
    	// 	allChunks: true
    	// })
    ]
};
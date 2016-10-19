var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'presentation': './desktop/presentation/src/index.js'
	},
	output: {
		//path: './desktop/presentation/dist/',
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			query: {
				presets: [
					'es2015','react'
				]
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
	// vue: {
	// 	loaders: {
	// 		less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
	// 	}
	// },
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
    	//new ExtractTextPlugin('style.css')
    ]
};
const path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': ['./_mobile/main/src/index.js'],
		'front-end': ['./_mobile/main/src/_front-end/index.js']
	},
	output: {
		path: path.resolve( __dirname,'../../public/dist/' ),
		publicPath: '/dist/',
		filename: '[name].chunk.js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
};
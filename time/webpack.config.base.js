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
		path: path.resolve( __dirname, '../public/time/dist/' ),//'/public/time/dist/',//path.resolve( __dirname, 'time/dist/' ),
		publicPath: '/time/dist/',
		filename: '[name].chunk.js'
	},
    resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
};
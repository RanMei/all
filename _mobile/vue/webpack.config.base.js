var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': ['./_mobile/vue/src/index.js']
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.min.js'
		}
	}
};
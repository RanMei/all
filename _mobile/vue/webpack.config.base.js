var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': ['./_mobile/vue/src/index.js']
	},
  output: {
    path: path.resolve( __dirname,'../../public/vue/dist/'),
    publicPath: '/vue/dist/',
    filename: '[name].chunk.js'
  },
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.min.js'
		}
	},
  externals: {
    'vue': 'window.Vue',
    'vue-router': 'window.VueRouter'
  }
};
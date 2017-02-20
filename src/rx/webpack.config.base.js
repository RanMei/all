var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': ['./src/rx/src/main.js']
	},
  output: {
    path: path.resolve( __dirname,'../../public/rx/dist/'),
    publicPath: '/rx/dist/',
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
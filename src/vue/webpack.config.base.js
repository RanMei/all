var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': ['./src/vue/src/index.js']
	},
  output: {
    path: path.resolve( __dirname,'../../public/vue/dist/'),
    publicPath: '/vue/dist/',
    filename: '[name].chunk.js'
  },
	resolve: {
		alias: {
      'api': path.resolve( __dirname,'src/api/' ),
			'vue': 'vue/dist/vue.min.js'
		}
	},
  externals: {
    'vue': 'window.Vue',
    'vue-router': 'window.VueRouter'
  }
};
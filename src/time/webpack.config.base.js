const path = require('path');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    'index': ['./src/_index/index.js'],
    'signin': ['./src/_signin/index.js'],

    'item': ['./src/_item/item.js'],
    'cart': ['./src/_cart/cart.js'],
    'search': ['./src/_search/search.js'],
    'test': ['./src/_test/index.js'],
    './_admin/admin': ['./src/_admin/index.js']
  },
  output: {
    path: path.resolve( __dirname, '../public/time/dist/' ),
    publicPath: '/time/dist/',
    filename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      'store': path.resolve( __dirname,'src/store/' ),
      'api': path.resolve( __dirname,'src/api/' ),
      'vue': 'vue/dist/vue.min.js',
      'vue-router': 'vue-router/dist/vue-router.min.js',
      'vuex': 'vuex/dist/vuex.min.js'
    }
  },
  externals: {
    'vue': 'window.Vue',
    'vue-router': 'window.VueRouter',
    'vuex': 'window.Vuex'
  },
};
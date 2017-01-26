var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    // 'vue': [
    //   'vue', 'vuex'
    // ],
    'index': [
      './src/_index/index.js',
    ],
    'test': [
      './src/_test/app.js',
    ],
    'wolf': [
      './src/_wolf/_index/index.js'
    ]
  },
  output: {
    path: path.resolve( __dirname,'../public/hot/dist' ),
    publicPath: '/hot/dist',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
      'vuex': 'vuex/dist/vuex.min.js'
    }
  }
};

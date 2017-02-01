var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    // 'vue': ['vue', 'vuex'],
    'dist/index': ['./src/_index/index.js'],

    'hot/dist/hot': ['./src/_hot/index.js',],
    'hot/dist/test': ['./src/_test/app.js',],
    'hot/dist/front-end': ['./src/_front-end/index.js',],

    'h5/dist/wolf': ['./src/_wolf/_index/index.js'],
    'h5/dist/carnival': ['./src/_carnival/_index/index.js']
  },
  output: {
    path: path.resolve( __dirname,'../public/' ),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
      'vue-router': 'vue/dist/vue-router.js',
      'vuex': 'vuex/dist/vuex.min.js'
    }
  },
  externals: {
    'vue': 'window.Vue',
    'vuex': 'window.Vuex',
    'vue-router': 'window.VueRouter',
    'react': 'window.React',
    'react-dom': 'window.ReactDOM'
  }
};

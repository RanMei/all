var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var base = JSON.parse( JSON.stringify(require('./webpack.config.base')) );

module.exports = Object.assign(base,{
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react','es2015']
      }
    },{
      test: /\.vue$/,
      loader: 'babel!vue'
    },{
      test: /\.less$/,
      //loader: 'style!css!less!postcss'
      loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
    }]
  },
  vue: {
    loaders: {
      //loader: 'style!css!less!postcss'
      less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
    }
  },
  externals: {
    'vue': 'window.Vue',
    'vuex': 'window.Vuex',
    'vue-router': 'window.VueRouter'
  },
  postcss: function () {
        return [autoprefixer];
    },
  //devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('[name].style.css',{
      allChunks: true
    })
  ],
});

console.log(process.env.NODE_ENV)
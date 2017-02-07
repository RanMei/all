var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var base = require('./webpack.config.base.js');

for(let key in base.entry){
  base.entry[key].unshift('react-hot-loader/patch');
}

module.exports = Object.assign(base,{
  // debug: true,
  // devtool: 'source-map', 
  module: {
    rules: [{
      test: /(\.jsx)|(\.js)$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['es2015',{modules:false}],
          'react'
        ],
        plugins: [
          'react-hot-loader/babel'
        ]
      },
      exclude: /node_modules/,
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false,
        postcss: [
          autoprefixer
        ]
      }
    },{
      test: /\.less$/,
      use: ['style-loader','css-loader','postcss-loader','less-loader'],
    },{
      test: /\.scss$/,
      use: ['style-loader','css-loader','postcss-loader','sass-loader']
    }]
  },

  plugins: [
      new webpack.DefinePlugin({
        __DEV: true
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: function () {
            return [autoprefixer];
          }
        }
      }),
    ],
});
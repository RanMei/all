const path = require('path');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var base = JSON.parse( JSON.stringify(require('./webpack.config.base.js')) );

module.exports = Object.assign(base,{
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['react','es2015']
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
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer];
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
});
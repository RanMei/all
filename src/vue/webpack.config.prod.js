const path = require('path');

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var base = JSON.parse( JSON.stringify(require('./webpack.config.base.js')) );

module.exports = Object.assign(base,{
  output: {
    path: path.resolve( __dirname,'../../public/vue/dist/'),
    publicPath: './dist/',
    filename: '[name].chunk.js'
  },
	module: {
		rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react','es2015']
        }
      }]
    },{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader?presets[]=es2015',
            less: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              loader: [{
                loader: 'css-loader'
              },{
                loader: 'postcss-loader'
              },{
                loader: 'less-loader'
              }]
            })
          },
          preserveWhitespace: false,
          postcss: [
            autoprefixer
          ]
        }
      }
    },{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: [{
          loader: 'css-loader'
        },{
          loader: 'postcss-loader'
        },{
          loader: 'less-loader'
        }]
      })
    },{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: [{
          loader: 'css-loader'
        },{
          loader: 'postcss-loader'
        },{
          loader: 'sass-loader'
        }]
      })
    }]
	},
  plugins: [
  	new webpack.DefinePlugin({
  	  "process.env": {
  	    NODE_ENV: JSON.stringify("production")
  	  }
  	}),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer];
        }
      }
    }),
  	new webpack.optimize.LimitChunkCountPlugin({
  		maxChunks: 10
  	}),
  	// new webpack.optimize.DedupePlugin(),
  	// //new webpack.optimize.UglifyJsPlugin(),
  	// new webpack.optimize.CommonsChunkPlugin(
  	// 	'common.chunk.js',
  	// 	['index','item','search','cart']
  	// ),
  	new ExtractTextPlugin({
      filename: '[name].style.css',
  		allChunks: true
  	}),
  ]
});
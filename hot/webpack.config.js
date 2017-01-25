var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    'index': [
      // Add the client which connects to our middleware
      // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
      // useful if you run your app from another point like django
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      // And then the actual application
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve( __dirname,'dist' ),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['react','es2015']
      }
    },{
      test: /\.vue$/,
      loader: 'babel!vue'
    },{
      test: /\.less$/,
      loader: 'style!css!less!postcss'
      //loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
    }]
  },
  vue: {
    loaders: {
      loader: 'style!css!less!postcss'
      //less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
    }
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js'
    }
  },
  postcss: function () {
        return [autoprefixer];
    },
  //devtool: '#source-map',
  plugins: [
    new ExtractTextPlugin('[name].style.css',{
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};

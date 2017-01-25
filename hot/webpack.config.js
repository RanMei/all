var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

var base = JSON.parse( JSON.stringify(require('./webpack.config.base')) );

// Add the client which connects to our middleware
// You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
// useful if you run your app from another point like django
for( let key in base.entry ){
  base.entry[key].push( hotMiddlewareScript );
}

module.exports = Object.assign( base,{
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
});

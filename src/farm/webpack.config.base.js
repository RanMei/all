var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'index': [path.resolve( __dirname,'src/main.jsx' )]
  },
  output: {
    path: path.resolve( __dirname,'../../public/farm/dist/'),
    publicPath: '/farm/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'common': path.resolve( __dirname,'src/common/' ),
      'api': path.resolve( __dirname,'src/api/' ),
      'store': path.resolve( __dirname,'src/store/' ),
      'react': 'react/dist/react.min.js',
      'react-dom': 'react/dist/react-dom.min.js',
      'vuex': 'vuex/dist/vuex.min.js'
    }
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'vuex': 'window.Vuex'
  },
  // debug: true,
  // devtool: 'source-map',
};
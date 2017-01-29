const path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	module: {
		loaders: [{
			test: /(\.js)|(\.jsx)$/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			},
			exclude: /node_modules/
		},{
			test: /\.vue$/,
			loader: 'babel!vue'
		},{
			test: /\.less$/,
			loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
		}]
	},
	vue: {
		loaders: {
			// html: 'vue-html-loader',
			// js: 'babel',
			less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
		}
	},
	externals: {
		'vue': 'window.Vue',
		'vue-router': 'window.VueRouter',
		'vuex': 'window.Vuex'
	},
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
    	new webpack.DefinePlugin({
    		'process.env': {
    			NODE_ENV: '"production"'
    		}
    	}),
    	new webpack.optimize.DedupePlugin(),
    	new ExtractTextPlugin('[name].style.css',{
    		allChunks: true
    	})
    ]
};
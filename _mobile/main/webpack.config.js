const path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': ['./_mobile/main/src/index.js'],
		// 'blog': './_mobile/main/src/blog/blog.jsx',
		// 'post': './_mobile/main/src//blog/post.jsx',
		//'front_end': './_mobile/main/src_front_end/main.js'
	},
	output: {
		path: path.resolve( __dirname,'../../public/dist/' ),
		publicPath: '/dist/',
		filename: '[name].chunk.js'
	},
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
			//loader: 'style!css!less!postcss'
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
	resolve: {
		alias: {
			vue: 'vue/dist/vue.min.js'
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
    	// new webpack.optimize.CommonsChunkPlugin({
    	// 	name: 'common',
    	// 	minChunks: 2
    	// }),
    	// new webpack.optimize.LimitChunkCountPlugin({
    	// 	maxChunks: 10
    	// }),
    	new webpack.optimize.DedupePlugin(),
    	// new webpack.optimize.UglifyJsPlugin({
    	// 	compress: {
    	// 		warnings: false
    	// 	}
    	// }),
    	// new webpack.optimize.CommonsChunkPlugin('common.js',[
    	// 	'index',
    	// 	//'swiper',
    	// 	'svg-qq'
    	// ]),
    	//new webpack.HotModuleReplacementPlugin(),
    	new ExtractTextPlugin('[name].style.css',{
    		allChunks: true
    	})
    ]
};
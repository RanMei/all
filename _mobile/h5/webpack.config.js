var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'carnival/dist/': './_mobile/h5/carnival/src/index.js',
		'project/dist/': './_mobile/h5/project/src/index.js'
	},
	output: {
		//path: __dirname+'_mobile/vue/dist/',
		publicPath: './dist/',
		filename: '[name]bundle.js'
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
    	new webpack.optimize.LimitChunkCountPlugin({
    		maxChunks: 10
    	}),
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
    	new ExtractTextPlugin('[name]style.css',{
    		allChunks: true
    	})
    ]
};
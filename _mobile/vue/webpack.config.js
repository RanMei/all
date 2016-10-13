var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'index': './_mobile/vue/src/index.js'
		//'swiper': './_mobile/vue/src/swiper.main.js',
		//'svg-qq': './_mobile/vue/src/svg-qq.js'
	},
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel'
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
			//less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
		}
	},
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
    	// new webpack.optimize.CommonsChunkPlugin('common.js',[
    	// 	'index',
    	// 	//'swiper',
    	// 	'svg-qq'
    	// ]),
    	new ExtractTextPlugin('style.css')
    ]
};
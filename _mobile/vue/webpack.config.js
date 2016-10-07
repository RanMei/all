var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'preloader': './_mobile/vue/src/preloader.main.js',
		'swiper': './_mobile/vue/src/swiper.main.js',
		'presentation': './_mobile/vue/src/presentation.main.js'
	},
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		},{
			test: /\.less$/,
			//loader: 'style!css!less!postcss'
			loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader!postcss-loader')
		}]
	},
	vue: {
		loaders: {
			less: ExtractTextPlugin.extract('vue-style-loader','css-loader!less-loader!postcss-loader')
		}
	},
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
    	new webpack.optimize.CommonsChunkPlugin('common.js',[
    		'presentation',
    		'preloader',
    		'swiper'
    	]),
    	new ExtractTextPlugin('style.css')
    ]
};
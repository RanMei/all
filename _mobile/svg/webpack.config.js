var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'preloader': './_mobile/svg/src/preloader.js',
		'duck': './_mobile/svg/src/duck.js'
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
			loader: 'style!css!less!postcss'
		}]
	},
	postcss: function () {
        return [autoprefixer];
    },
    plugins: [
    	new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
};
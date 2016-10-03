var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'index': './_mobile/main/src/main.jsx',
		'front_end': './_mobile/main/src_front_end/main.js',
		'blog': './_mobile/main/src/blog.jsx'
	},
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			}
		},{
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
    	new webpack.optimize.CommonsChunkPlugin('common.js',['index','blog'])
    ]
};
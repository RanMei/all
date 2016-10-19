var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'index': './_mobile/main/src/main.jsx',
		// 'blog': './_mobile/main/src/blog/blog.jsx',
		// 'post': './_mobile/main/src//blog/post.jsx',
		'front_end': './_mobile/main/src_front_end/main.js'
	},
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /(\.js)|(\.jsx)$/,
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
    	//new webpack.optimize.CommonsChunkPlugin('common.js',['index','blog','post'])
    ]
};
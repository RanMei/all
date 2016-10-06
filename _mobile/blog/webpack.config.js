var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'blog': './_mobile/blog/src/blog.jsx',
		'post': './_mobile/blog/src/post.jsx'
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
    	new webpack.optimize.CommonsChunkPlugin('common.js',['blog','post'])
    ]
};
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'index': './_mobile/farm/src/main.jsx'
	},
	output: {
		filename: 'bundle.js'
	},
	// debug: true,
	// devtool: 'source-map', 
	module: {
		loaders: [{
			test: /(\.jsx)|(\.js)$/,
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
    }
};
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'index': './_mobile/h5/live/src/main.js'
	},
	output: {
		filename: 'bundle.js'
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
    }
};
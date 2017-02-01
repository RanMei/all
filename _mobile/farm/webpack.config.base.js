var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'index': ['./_mobile/farm/src/main.jsx']
	},
	output: {
		path: path.resolve( __dirname,'../../public/farm/dist/'),
		publicPath: './dist/',
		filename: 'bundle.js'
	},
	// debug: true,
	// devtool: 'source-map',
};
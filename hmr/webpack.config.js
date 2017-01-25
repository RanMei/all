"use strict";
const path = require('path');
const webpack = require("webpack");

module.exports = {
	//context: __dirname,
	entry: {
		index: [path.resolve( __dirname,'src/app.js' )]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
	]
}

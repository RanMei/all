module.exports = {
	entry: {
		main: './_mobile/main/src/main.jsx'
	},
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.jsx$/,
			loader: 'babel',
			query: {
				presets: ['react','es2015']
			}
		},
		{
			test: /\.less$/,
			loader: 'style!css!less'
		},
		]
	}
};
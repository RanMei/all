module.exports = {
    entry: {
        zeal: './_z/modules/zeal.es6',
        'z.angular': './_z/modules/z.angular.es6'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                loader: "babel",
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    }
};
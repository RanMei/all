module.exports = {
    entry: {
        zeal: './_mobile/src/zeal.js'
        //'z.angular': './_z/modules/z.angular.es6'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    }
};
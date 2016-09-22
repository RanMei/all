module.exports = {
    entry: {
        'index': './_mobile/h5/olympics/lib/main.js',
        'result': './_mobile/h5/olympics/lib/main_result.js',
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
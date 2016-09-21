module.exports = {
    entry: {
        './_mobile/h5/carnival/dist/': './_mobile/h5/carnival/lib/main.js',
    },
    output: {
        filename: '[name]bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: [/*'react',*/'es2015']
                }
            }
        ]
    }
};
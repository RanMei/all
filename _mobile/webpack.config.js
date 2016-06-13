module.exports = {
    entry: "./_mobile/src/index.js",
    output: {
        filename: "bundle.js"
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
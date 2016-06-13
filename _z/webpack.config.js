module.exports = {
    entry: "./_z/modules/zeal.es6",
    output: {
        filename: "zeal.js"
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
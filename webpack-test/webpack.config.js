module.exports = {
    entry: "./webpack-test/jsx/entry.jsx",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "babel",
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    }
};
module.exports = {
    entry: "./_mobile/h5/school/src/main.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    }
};
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./_mobile/h5/project/src/main.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.vue$/,
            loader: 'vue'
        },{
            test: /\.less$/,
            loader: 'style!css!less!postcss'
        }]
    },
    postcss: function () {
        return [autoprefixer];
    }
};
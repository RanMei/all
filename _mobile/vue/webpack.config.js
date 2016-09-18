module.exports = {
    entry: {
        index: './_mobile/vue/lib/main.js',
        swiper: './_mobile/vue/lib/main_swiper.js'
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
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    }
};
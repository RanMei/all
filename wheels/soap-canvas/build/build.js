const rollup = require('rollup');
const buble = require('rollup-plugin-buble');

rollup.rollup({
  entry: './src/Canvas.js',
  plugins: [
    buble()
  ],
})
.then(function (bundle) {
  bundle.write({
    format: 'umd',
    moduleName: 'Canvas',
    dest: './dist/soap-canvas.js',
    sourceMap: false
  });
});
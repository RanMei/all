import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/Canvas.js',
	format: 'cjs',
	plugins: [ babel({
    presets: ['es2015']
  }) ],
	dest: 'dist/soap-canvas.js'
};
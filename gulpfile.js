var fs = require('fs');

var gulp = require('gulp'); 
var nodemon = require('gulp-nodemon');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var webpack = require('webpack-stream');

var babel = require('gulp-babel');
var babelify = require('babelify');

var vueify = require('vueify');

var tsify = require('tsify');

// var concat = require("gulp-concat");
// var shell = require('gulp-shell');

gulp.task( 'start_server',function(){
	nodemon({
		script: './express/main.js',
		ext: 'js html',
		env: {
			'NODE_ENV': 'development'
		}
	});
});

var LESS = [
	{ name: 'less-mobile', src: './_mobile/less/*.less', dest: './_mobile/css' },
	{ name: 'less-mobile-svg', src: './_mobile/svg/less/*.less', dest: './_mobile/svg/css' },
	{ name: 'less-mobile-test', src: './_mobile/test/less/*.less', dest: './_mobile/test/css' },
	{ name: 'less-mobile-car', src: './_mobile/car/less/*.less', dest: './_mobile/car/css' },
	{ name: 'less-mobile-swiper', src: './_mobile/swiper/less/*.less', dest: './_mobile/swiper/css' },
	{ name: 'less-mobile-time', src: './_mobile/time/less/*.less', dest: './_mobile/time/css' },
	{ name: 'less-mobile-vue', src: './_mobile/vue/less/*.less', dest: './_mobile/vue/css' },
	{ name: 'less-cards', src: './_mobile/cards/less/*.less', dest: './_mobile/cards/css' },
	{ name: 'less-h5', src: './_mobile/h5/less/*.less', dest: './_mobile/h5/css' },
	{ name: 'less-farm', src: './_mobile/farm/less/*.less', dest: './_mobile/farm/css' },
	{ name: 'less-exam', src: './_mobile/exam/less/*.less', dest: './_mobile/exam/css' },
	{ name: 'less-svg', src: './_svg/less/*.less', dest: './_svg/css' },
	{ name: 'less-button', src: './_mobile/button/less/*.less', dest: './_mobile/button/css' },
	{ name: 'less-design-button', src: './design/button/less/*.less', dest: './design/button/css' },
	{ name: 'less-qm', src: './qm/less/*.less', dest: './qm/css' },
	{ name: 'less-wolf', src: './_wolf/less/*.less', dest: './_wolf/css' },
	{ name: 'less-fytpy', src: './fytpy/less/*.less', dest: './fytpy/css' },
	{ name: 'less-caredaily', src: './caredaily/less/*.less', dest: './caredaily/css' },
	{ name: 'less-angular', src: './angular/less/*.less', dest: './angular/public/css' },
	{ name: 'less-tpl', src: './$tpl/less/*.less', dest: './$tpl/css' }		
];
LESS.forEach(function(elem){
	gulp.task( elem.name,function(){
		gulp.src( elem.src )
			.pipe( less() )
			.pipe( autoprefixer() )
			.pipe( gulp.dest( elem.dest ) );
	});
})

var BROWSERIFY = [
	{ name: 'browserify-mobile-farm', main: './_mobile/farm/jsx/main.jsx', dest: './_mobile/farm', files: ['./_mobile/farm/jsx/*.jsx','./_mobile/farm/jsx/*/*.jsx'] },
	{ name: 'browserify-mobile-time', main: './_mobile/time/jsx/main.jsx', dest: './_mobile/time', files: './_mobile/time/jsx/*/*.jsx' },
	{ name: 'browserify-mobile-cards', main: './_mobile/cards/src/index.js', dest: './_mobile/cards', files: './_mobile/cards/src/*.js' },
	{ name: 'browserify-mobile-zeact', main: './_mobile/js/main.js', dest: './_mobile/zeact', files: './_mobile/zeact/src/*.js' },
	{ name: 'browserify-mobile-car', main: './_mobile/car/js/main.js', dest: './_mobile/car', files: './_mobile/car/js/*.js' }
];
BROWSERIFY.forEach(function(item){
	gulp.task( item.name,function(){
		return(
			browserify( item.main )
			.transform( 'babelify', {presets: ["es2015", "react"]} )
			.bundle()
			.pipe( source('bundle.js') )
			.pipe( gulp.dest(item.dest) )
		);
	});
})

gulp.task('vueify',function(){
	return(
		browserify('./_mobile/vue/src/main.js')
		.transform(vueify)
		.bundle()
		.pipe(fs.createWriteStream('./_mobile/vue/bundle.js'))
	)
})

const WEBPACK = [
	{ name: 'webpack-zeal', src: './_mobile/src/zeal.js', config: './_mobile/src/webpack.config.js', dest: './_mobile/js' }
];
WEBPACK.forEach(function(item){
	gulp.task( item.name,function(){
		return gulp.src( item.src )
			.pipe( webpack( require(item.config) ) )
			.pipe( gulp.dest(item.dest) );
	});
})

// shell
// gulp.task( 'restart_server',shell.task([
// 	'node express.js'
// ]));

// babel
gulp.task( 'babel_fytpy', function () {
	return gulp.src( "./fytpy/es6/*.es6")
		// './fytpy/.babelrc' will be used.
		.pipe( babel() )
		.pipe( gulp.dest("./fytpy/js") );
});

// browserify
gulp.task( 'browserify_Z', function(){
	return(
		browserify( './js/Z/zangular.js' )
		.transform( babelify )
		.bundle(  )
		.pipe( source('z.js') )
		.pipe( gulp.dest('./js') )
	);
});
gulp.task( 'browserify_ts',function(){
	return(
		browserify( './ts/ts/test.ts' )
		.plugin( 'tsify' )
		.bundle()
		.pipe( source('bundle.js') )
		.pipe( gulp.dest('./ts/js') )
	);
});
gulp.task( 'browserify_react',function(){
	return(
		browserify( './fytpy/react/jsx/main.jsx' )
		// './.babelrc' will be used.
		.transform( babelify )
		.bundle()
		.pipe( source('bundle.js') )
		.pipe( gulp.dest('./fytpy/react') )
	);
});
gulp.task( 'browserify_fytpy',function(){
	return(
		browserify( './fytpy/es6/main_index.js' )
		.transform( babelify )
		.bundle()
		.pipe( source('bundle.js') )
		.pipe( gulp.dest('./fytpy') )
	);
});

// concat
gulp.task( "concat_angular",function(){
	gulp.src([
			'./angular/public/js/controllers/*.js',
			'./angular/public/js/directives/*.js',
		])
		.pipe( concat("bundle.js") )
		.pipe( gulp.dest("./angular/public/js/") );
});

// less

gulp.task('watch',function(){

	LESS.forEach(function(elem){
		gulp.watch( elem.src,[elem.name] );
	});

	WEBPACK.forEach(function(elem){
		gulp.watch( elem.src,[elem.name] );
	});

	BROWSERIFY.forEach(function(elem){
		gulp.watch( elem.files,[elem.name] );
	});

	gulp.watch( './_mobile/vue/src/*.js',['vueify'] );

	// angular	
	gulp.watch( './angular/public/js/*/*.js',['concat_angular'] );

	// z
	// gulp.watch( './js/Z/*.js',['browserify_Z'] );

	// fytpy
	gulp.watch( './fytpy/es6/*.es6',['babel_fytpy'] );

	// react
	gulp.watch( ['./fytpy/react/jsx/*.jsx','./fytpy/react/jsx/*/*.jsx'],['browserify_react'] );

	// ts
	gulp.watch( './ts/ts/*.ts',['browserify_ts'] );
})

gulp.task('express',['watch','start_server'],function(){

});

gulp.task( 'default',['watch'],function(){
	
	//gulp.run( ['restart_server'] );
	//gulp.watch( './express.js',['restart_server']);

});

/*
var react = require('gulp-react');
var tsc = require('gulp-tsc');
var jshint = require('gulp-jshint');

gulp.task( "react",function(){
	return gulp.src("./react/js/components/*.jsx")
		.pipe(react())
		.pipe(gulp.dest("./react/js/components/"));
});
gulp.task( 'tsc_fytpy',function(){
	gulp.src( './fytpy/ts/*.ts' )
		.pipe( tsc({
			module: "CommonJS",
			sourceMap: true
		}) )
		.pipe( gulp.dest('./fytpy/amd/') );
});
gulp.task( 'tsc',function(){
	gulp.src( './ts/ts/*.ts' )
		.pipe( tsc({
			module: "CommonJS",
			sourceMap: true
		}) )
		.pipe( gulp.dest('./ts/js/') );
});
gulp.task( 'tsxc',function(){
	gulp.src( './react/js/components/*.tsx' )
		.pipe( tsc({
			module: 'amd',
			additionalTscParameters: ['--jsx', 'react']
		}) )
		.pipe( gulp.dest('./react/js/components') );
});

gulp.task('jshint', function() {
	gulp.src( './js/*.js' )
		.pipe( jshint() )
		.pipe( jshint.reporter('default') );
});

*/

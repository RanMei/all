var gulp = require('gulp'); 
var nodemon = require('gulp-nodemon');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var webpack = require('webpack-stream');

var babel = require('gulp-babel');
var babelify = require('babelify');

var tsify = require('tsify');

// var concat = require("gulp-concat");
// var shell = require('gulp-shell');

gulp.task( 'start_server',function(){
	nodemon({
		script: './express/express.js',
		ext: 'js html',
		env: {
			'NODE_ENV': 'development'
		}
	});
});

var LESS = [
	{ name: 'less_mobile', src: './_mobile/less/*.less', dest: './_mobile/css' },
	{ name: 'less-cards', src: './_mobile/cards/less/*.less', dest: './_mobile/cards/css' },
	{ name: 'less-h5', src: './_mobile/h5/less/*.less', dest: './_mobile/h5/css' },
	{ name: 'less-farm', src: './_mobile/farm/less/*.less', dest: './_mobile/farm/css' },
	{ name: 'less-exam', src: './_mobile/exam/less/*.less', dest: './_mobile/exam/css' },
	{ name: 'less-svg', src: './_svg/less/*.less', dest: './_svg/css' },
	{ name: 'less-button', src: './_mobile/button/less/*.less', dest: './_mobile/button/css' },
	{ name: 'less-design-button', src: './design/button/less/*.less', dest: './design/button/css' }	
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
	{ name: 'browserify-farm', src: './_mobile/farm/jsx/main.jsx', dest: './_mobile/farm' },
	{ name: 'browserify-cards', src: './_mobile/cards/src/index.js', dest: './_mobile/cards' }
];
BROWSERIFY.forEach(function(item){
	gulp.task( item.name,function(){
		return(
			browserify( item.src )
			.transform( 'babelify', {presets: ["es2015", "react"]} )
			.bundle()
			.pipe( source('bundle.js') )
			.pipe( gulp.dest(item.dest) )
		);
	});
})

gulp.task( 'webpack_mobile',function(){
	return gulp.src('./_mobile/src/index.js')
	    .pipe( webpack( require('./_mobile/webpack.config.js') ) )
    	.pipe( gulp.dest('./_mobile/') );
});
gulp.task('webpack-zeal',function(){
	return gulp.src('./_mobile/src/zeal.es6')
		.pipe( webpack( require('./_mobile/src/webpack.config.js') ) )
		.pipe( gulp.dest('./_mobile/js') );
});



// webpack-test
gulp.task('webpack-test',function(){
	return gulp.src('./webpack-test/jsx/entry.jsx')
	    .pipe( webpack( require('./webpack-test/webpack.config.js') ) )
    	.pipe( gulp.dest('./webpack-test/') );
});


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
gulp.task( 'less_qm',function(){
	gulp.src( './qm/less/*.less' )
		.pipe( less() )
		.pipe( gulp.dest("./qm/css") );
});
gulp.task( 'less_$tpl',function(){
	gulp.src( './$tpl/less/*.less' )
		.pipe( less() )
		.pipe( gulp.dest("./$tpl/css") );
});
gulp.task( "less",function(){
	gulp.src( "./angular/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./angular/public/css") );
	
	gulp.src(    "./caredaily/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest(    "./caredaily/css") );
});
gulp.task( 'less_wolf',function(){
	gulp.src( "./_wolf/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./_wolf/css") );
});
gulp.task( 'less_fytpy',function(){
	gulp.src( './fytpy/less/*.less')
		.pipe( less() )
		.pipe( gulp.dest('./fytpy/css') );
});
gulp.task( 'less_$mobile',function(){
	gulp.src( './$mobile/less/*.less')
		.pipe( less() )
		.pipe( gulp.dest('./$mobile/css') );
});
gulp.task( 'less_react',function(){
	gulp.src( './react/less/*.less')
		.pipe( less() )
		.pipe( gulp.dest('./react/css') );
});

gulp.task('watch',function(){

	LESS.forEach(function(elem){
		gulp.watch( elem.src,[elem.name] );
	});

	// _mobile
	//gulp.watch( './_mobile/src/*.js',['webpack_mobile'] );
	gulp.watch( './_mobile/src/*.es6',['webpack-zeal'] );
	gulp.watch( ['./_mobile/farm/jsx/*.jsx','./_mobile/farm/jsx/*/*.jsx'],['browserify-farm'] );
	gulp.watch( './_mobile/cards/src/*.js',['browserify-cards'] );

	// angular	
	gulp.watch( './angular/public/js/*/*.js',['concat_angular'] );

	// less-tasks	
	gulp.watch( './angular/less/*.less',['less'] );
	gulp.watch( './_wolf/less/*.less',['less_wolf'] );
	gulp.watch( './caredaily/less/*.less',['less'] );
	gulp.watch( './$mobile/less/*.less',['less_$mobile'] );
	gulp.watch( './$tpl/less/*.less',['less_$tpl'] );

	// z
	// gulp.watch( './js/Z/*.js',['browserify_Z'] );

	// qm
	gulp.watch( './qm/less/*.less',['less_qm'] );
	// fytpy
	gulp.watch( './fytpy/less/*.less',['less_fytpy'] );
	gulp.watch( './fytpy/es6/*.es6',['babel_fytpy'] );

	// react
	gulp.watch( './react/less/*.less',['less_react'] );
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

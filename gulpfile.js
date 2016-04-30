var gulp = require('gulp'); 
var less = require('gulp-less');
var concat = require("gulp-concat");

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var babel = require('gulp-babel');
var babelify = require('babelify');

var tsify = require('tsify');

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
		browserify( './react/jsx/main.jsx' )
		// './.babelrc' will be used.
		.transform( babelify )
		.bundle()
		.pipe( source('bundle.js') )
		.pipe( gulp.dest('./react') )
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
gulp.task( 'less_#wolf',function(){
	gulp.src( "./#wolf/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./#wolf/css") );
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


gulp.task( "default", function(){
	
	// angular	
	gulp.watch( './angular/public/js/*/*.js',['concat_angular'] );

	// less-tasks	
	gulp.watch( './angular/less/*.less',['less'] );
	gulp.watch( './#wolf/less/*.less',['less_#wolf'] );
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
	gulp.watch( './react/jsx/*.jsx',['browserify_react'] );

	// ts
	gulp.watch( './ts/ts/*.ts',['browserify_ts'] );
	
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

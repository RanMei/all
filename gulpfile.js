var gulp = require('gulp'); 
var less = require('gulp-less');
var react = require('gulp-react');
var concat = require("gulp-concat");
var tsc = require('gulp-tsc');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babel = require('babelify');

//var jshint = require('gulp-jshint');
/*
gulp.task('jshint', function() {
	gulp.src( './js/*.js' )
		.pipe( jshint() )
		.pipe( jshint.reporter('default') );
});
*/
gulp.task('browserify_tsc',function(){
	return(
		browserify('./ts/ts/test.ts')
		.transform( tsc )
		.bundle()
		.pipe( source('bundle.js') )
		.pipe( gulp.dest('./ts/js') )
	);
});
gulp.task('browserify_react',function(){
	return(
		browserify('./react/es6/main.es6')
		.transform( babel )
		.bundle()
		.pipe( source('bundle.js') )
		.pipe( gulp.dest('./react') )
	);
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
gulp.task( "concat",function(){
	gulp.src( "./angular/public/js/controllers/*.js" )
		.pipe( concat("controllers.js") )
		.pipe( gulp.dest("./angular/public/js/") );
});


gulp.task(    "less",function(){
	gulp.src( "./angular/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./angular/public/css") );
	gulp.src( "./#wolf/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./#wolf/css") );
	gulp.src(    "./caredaily/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest(    "./caredaily/css") );
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
gulp.task( "react",function(){
	return gulp.src("./react/js/components/*.jsx")
		.pipe(react())
		.pipe(gulp.dest("./react/js/components/"));
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
gulp.task( "default", function(){
	
	gulp.watch( "./angular/public/js/controllers/*.js",['concat'] );
	
	gulp.watch( './angular/less/*.less',['less'] );
	gulp.watch( './#wolf/less/*.less',['less'] );
	gulp.watch( './caredaily/less/*.less',['less'] );

	gulp.watch( "./react/jsx/*.js",['reactify'] );

	gulp.watch( './ts/ts/*.ts',['tsc'] )

	gulp.watch('./react/es6/*.es6',['browserify_react']);

	
});

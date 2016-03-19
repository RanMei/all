var gulp = require('gulp'); 
var less = require('gulp-less');
var reactify = require('gulp-reactify');
//var jshint = require('gulp-jshint');
/*
gulp.task('jshint', function() {
	gulp.src( './js/*.js' )
		.pipe( jshint() )
		.pipe( jshint.reporter('default') );
});
*/
gulp.task('browserify',function(){
	return(
		browserify("src/main.js")
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('public/js'))
	)

});

gulp.task( "less",function(){
	gulp.src( "./angular/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./angular/public/css") );
});

gulp.task( "reactify",function(){
	gulp.src( "./react/jsx/*.js" )
		.pipe( reactify() )
		.pipe( gulp.dest("./react/js/components") );
});

gulp.task( "default", function(){
	
	gulp.watch( './angular/less/*.less',['less'] );
	gulp.watch( "./react/jsx/*.js",['reactify'] );
	
});

var gulp = require('gulp'); 
var less = require('gulp-less'); 
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
	gulp.src( "./less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./public/css") );
});

gulp.task( "default", function(){
	
	gulp.watch( "./less/*.less", function(){
		gulp.run( "less" );
	});
	
});

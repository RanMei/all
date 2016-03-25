var gulp = require('gulp'); 
var less = require('gulp-less');
var reactify = require('gulp-reactify');
var concat = require("gulp-concat");
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

gulp.task( "concat",function(){
	gulp.src( "./angular/public/js/controllers/*.js" )
		.pipe( concat("controllers.js") )
		.pipe( gulp.dest("./angular/public/js/") );
});


gulp.task( "less",function(){
	gulp.src( "./angular/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./angular/public/css") );
	gulp.src( "./caredaily/less/*.less" )
		.pipe( less() )
		.pipe( gulp.dest("./caredaily/css") );

});

gulp.task( "reactify",function(){
	gulp.src( "./react/jsx/*.js" )
		.pipe( reactify() )
		.pipe( gulp.dest("./react/js/components") );
});

gulp.task( "default", function(){
	
	gulp.watch( "./angular/public/js/controllers/*.js",['concat'] );
	
	gulp.watch( './angular/less/*.less',['less'] );
	gulp.watch( './caredaily/less/*.less',['less'] );

	gulp.watch( "./react/jsx/*.js",['reactify'] );

	
});

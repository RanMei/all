var gulp = require('gulp'); 
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require('webpack-stream');

// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');

// less
gulp.task( 'less',function(){
	gulp.src( './less/*.less' )
		.pipe( less() )
		.pipe( autoprefixer() )
		.pipe( gulp.dest("./css") );
});

// webpack
gulp.task('webpack',function(){
	return gulp.src('./src/index.js')
	    .pipe( webpack( require('./webpack.config.js') ) )
    	.pipe( gulp.dest('./') );
});

gulp.task( 'imagemin',function(){
	gulp.src('./src_img/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant({quality: '65-80'})]
		}))
		.pipe(gulp.dest('./image'))
})


gulp.task( "default", function(){
	//gulp.watch( './src_img/*',['imagemin']);
	gulp.watch( './src/*.js',['webpack'] );
	gulp.watch( './less/*.less',['less'] );
	
});
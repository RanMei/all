var fs = require('fs');

var gulp = require('gulp'); 
var nodemon = require('gulp-nodemon');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var webpack = require('webpack-stream');

var babel = require('gulp-babel');
var babelify = require('babelify');

var vueify = require('vueify');

var tsify = require('tsify');
var uglify = require('gulp-uglify');


var production = true;

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
	{ name: 'less-mobile-svg-parallax', src: './_mobile/svg/parallax/*.less', dest: './_mobile/svg/parallax' },
	{ name: 'less-mobile-svg-arsenal', src: './_mobile/svg/stroke-arsenal/*.less', dest: './_mobile/svg/stroke-arsenal' },
	{ name: 'less-mobile-test', src: './_mobile/test/less/*.less', dest: './_mobile/test/css' },
	{ name: 'less-mobile-car', src: './_mobile/car/less/*.less', dest: './_mobile/car/css' },
	{ name: 'less-mobile-carnival', src: './_mobile/carnival/less/*.less', dest: './_mobile/carnival/css' },
	{ name: 'less-mobile-h5-olympics', src: './_mobile/h5/olympics/less/*.less', dest: './_mobile/h5/olympics/css' },
	{ name: 'less-mobile-h5-school', src: './_mobile/h5/school/less/*.less', dest: './_mobile/h5/school/css' },
	{ name: 'less-mobile-project', src: './_mobile/project/less/*.less', dest: './_mobile/project/css' },
	{ name: 'less-mobile-feast', src: './_mobile/feast/less/*.less', dest: './_mobile/feast/css' },
	{ name: 'less-mobile-swiper', src: './_mobile/swiper/less/*.less', dest: './_mobile/swiper/css' },
	{ name: 'less-mobile-time', src: './_mobile/time/less/*.less', dest: './_mobile/time/css' },
	{ name: 'less-mobile-vue', src: './_mobile/vue/less/*.less', dest: './_mobile/vue/css' },
	{ name: 'less-cards', src: './_mobile/cards/less/*.less', dest: './_mobile/cards/css' },
	{ name: 'less-h5', src: './_mobile/h5/less/*.less', dest: './_mobile/h5/css' },
	// {
	// 	name: 'less-farm', 
	// 	src: ['./_mobile/farm/src/*.less','./_mobile/farm/src/components/*.less'], 
	// 	dest: './_mobile/farm/dist'
	// },
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
	// { name: 'browserify-mobile-farm', main: './_mobile/farm/src/main.jsx', dest: './_mobile/farm/dist', files: ['./_mobile/farm/src/*.jsx','./_mobile/farm/src/*/*.jsx'] },
	{ name: 'browserify-mobile-time', main: './_mobile/time/jsx/main.jsx', dest: './_mobile/time', files: './_mobile/time/jsx/*/*.jsx' },
	{ name: 'browserify-mobile-cards', main: './_mobile/cards/src/index.js', dest: './_mobile/cards', files: './_mobile/cards/src/*.js' },
	{ 	name: 'browserify-mobile-zeal', 
		main: './_mobile/src/zeal/zeal.main.js', 
		dest: './_mobile/vendor/', 
		files: './_mobile/src/zeal/*.js',
		output: 'zeal.js' },
	// { name: 'browserify-mobile-vue-swiper', main: './_mobile/vue/lib/main_swiper.js', dest: './_mobile/vue/dist/', files: './_mobile/vue/lib/*.js' },
	{ name: 'browserify-mobile-zeact', main: './_mobile/js/main.js', dest: './_mobile/zeact', files: './_mobile/zeact/src/*.js' },
	{ name: 'browserify-mobile-car', main: './_mobile/car/js/main.js', dest: './_mobile/car', files: './_mobile/car/js/*.js' },
	{ name: 'browserify-mobile-h5-carnival', main: './_mobile/h5/carnival/lib/main.js', dest: './_mobile/h5/carnival/dist/', files: './_mobile/h5/carnival/lib/*.js' }
/*	{ name: 'browserify-mobile-project', main: './_mobile/project/lib/main.js', dest: './_mobile/project/dist/', files: './_mobile/project/lib/*.js' }*/
];
BROWSERIFY.forEach(function(item){
	if( production===false ){
		gulp.task( item.name,function(){
			return(
				browserify( item.main )
				.transform( 'babelify', {presets: ["es2015", "react"]} )
				.bundle()
				.pipe( source(item.output||'bundle.js') )
				.pipe( gulp.dest(item.dest) )
			);
		});
	}else{
		gulp.task( item.name,function(){
			return(
				browserify( item.main )
				.transform( 'babelify', {presets: ["es2015", "react"]} )
				.bundle()
				.pipe( source(item.output||'bundle.js') )
				.pipe( buffer() )
				.pipe( uglify({
				}) )
				.pipe( gulp.dest(item.dest) )
			);
		});
	}
})

gulp.task('vueify',function(){
	return(
		browserify('./_mobile/vue/lib/main.js')
		.transform( [vueify,babelify] )
		.bundle()
		.pipe( source('bundle_.js') )
		.pipe( gulp.dest('./_mobile/vue/dist/') )
		// .pipe(fs.createWriteStream('./_mobile/vue/bundle_swiper.js'))
		// .pipe( uglify )
	)
})

const WEBPACK = [{
	name: 'webpack-mobile-farm', 
	src: './_mobile/farm/src/main.jsx', 
	dest: './_mobile/farm/dist/', 
	config: './_mobile/farm/webpack.config.js', 
	watched: ['./_mobile/farm/src/*.*','./_mobile/farm/src/*/*.*']
},{
	name: 'webpack-mobile-main', 
	src: './_mobile/main/src/main.jsx', 
	dest: './_mobile/main/dist/', 
	config: './_mobile/main/webpack.config.js', 
	watched: ['./_mobile/main/src/*.*','./_mobile/main/src/*/*.*','./_mobile/main/src_front_end/*.*']
},{
	name: 'webpack-mobile-blog', 
	src: './_mobile/blog/src/blog.jsx', 
	dest: './_mobile/blog/dist/', 
	config: './_mobile/blog/webpack.config.js', 
	watched: ['./_mobile/blog/src/*.*','./_mobile/blog/src/*/*.*']
},{
	name: 'webpack-mobile-svg', 
	src: './_mobile/svg/src/preloader.js', 
	dest: './_mobile/svg/dist/', 
	config: './_mobile/svg/webpack.config.js', 
	watched: ['./_mobile/svg/src/*.*','./_mobile/svg/src/*/*.*']
},{
	name: 'webpack-mobile-vue', 
	watched: ['./_mobile/vue/src/*.*','./_mobile/vue/src/*/*.*'], 
	src: './_mobile/vue/src/presentation.main.js', 
	config: './_mobile/vue/webpack.config.js', 
	dest: './_mobile/vue/dist/'
},{
	name: 'webpack-mobile-project', 
	watched: ['./_mobile/h5/project/src/*.*','./_mobile/h5/project/src/*/*.*'], 
	src: './_mobile/h5/project/src/main.js', 
	config: './_mobile/h5/project/webpack.config.js', 
	dest: './_mobile/h5/project/dist/'
},{
	name: 'webpack-mobile-h5-olympics', 
	watched: ['./_mobile/h5/olympics/lib/*.*'], 
	src: './_mobile/h5/olympics/lib/main.js', 
	config: './_mobile/h5/olympics/webpack.config.js', 
	dest: './_mobile/h5/olympics/dist/'
},{
	name: 'webpack-mobile-h5-school', 
	watched: ['./_mobile/h5/school/src/*.*','./_mobile/h5/school/src/*/*.*'], 
	src: './_mobile/h5/school/src/main.js', 
	config: './_mobile/h5/school/webpack.config.js', 
	dest: './_mobile/h5/school/dist/',
},{
	name: 'webpack-mobile-h5-live', 
	watched: ['./_mobile/h5/live/src/*.*'], 
	src: './_mobile/h5/liv/src/main.js', 
	config: './_mobile/h5/live/webpack.config.js', 
	dest: './_mobile/h5/live/dist/'
}];
WEBPACK.forEach(function(item){
	gulp.task( item.name,function(){
		return gulp.src( item.src )
			.pipe( webpack( require(item.config) ) )
			//.pipe( uglify() )
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
		gulp.watch( elem.watched,[elem.name] );
	});

	BROWSERIFY.forEach(function(elem){
		gulp.watch( elem.files,[elem.name] );
	});

	// gulp.watch( './_mobile/vue/lib/*.*',['vueify'] );

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

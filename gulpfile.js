var fs = require('fs');
var path = require('path');

var gulp = require('gulp'); 
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var ejs = require('gulp-ejs');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var webpack = require('webpack-stream');

var babel = require('gulp-babel');

var browserify = require('browserify');
var babelify = require('babelify');
var vueify = require('vueify');
var tsify = require('tsify');

var rollup = require('rollup-stream');
var gulp_rollup = require('gulp-rollup');

var uglify = require('gulp-uglify');

//console.log(process.env)
var PRODUCTION = false;

// var concat = require("gulp-concat");
var shell = require('gulp-shell');

var LESS = require('./gulp/LESS.js');
LESS.forEach(function(a){
  gulp.task( a.name,function(){
    gulp.src( a.src )
      .pipe( less() )
      .pipe( autoprefixer() )
      .pipe( gulp.dest( a.dest ) );
  });
})

var BROWSERIFY = [
  // { name: 'browserify-mobile-farm', main: './_mobile/farm/src/main.jsx', dest: './_mobile/farm/dist', files: ['./_mobile/farm/src/*.jsx','./_mobile/farm/src/*/*.jsx'] },
{
  name: 'browserify-mobile-time', 
  main: './_mobile/time/jsx/main.jsx', 
  dest: './_mobile/time', 
  files: './_mobile/time/jsx/*/*.jsx' 
},{
  name: 'browserify-canvas',
  main: './_mobile/vue/src/canvas/Canvas.js',
  output: 'canvas.js',
  dest: './vendor',
  files: './_mobile/vue/src/canvas/Canvas.js'
},{ 
  name: 'browserify-mobile-cards', 
  main: './_mobile/cards/src/index.js', 
  dest: './_mobile/cards', 
  files: './_mobile/cards/src/*.js' 
},
  // {  name: 'browserify-mobile-zeal', 
  //  main: './_mobile/wheels/zeal/src/zeal.main.js', 
  //  dest: './_mobile/wheels/zeal/dist/', 
  //  files: './_mobile/wheels/zeal/src/*.js',
  //  output: 'zeal.js' },
  // { name: 'browserify-mobile-vue-swiper', main: './_mobile/vue/lib/main_swiper.js', dest: './_mobile/vue/dist/', files: './_mobile/vue/lib/*.js' },
  { name: 'browserify-mobile-zeact', main: './_mobile/js/main.js', dest: './_mobile/zeact', files: './_mobile/zeact/src/*.js' },
  { name: 'browserify-mobile-car', main: './_mobile/car/js/main.js', dest: './_mobile/car', files: './_mobile/car/js/*.js' },
  { name: 'browserify-mobile-h5-carnival', main: './_mobile/h5/carnival/lib/main.js', dest: './_mobile/h5/carnival/dist/', files: './_mobile/h5/carnival/lib/*.js' }
/*  { name: 'browserify-mobile-project', main: './_mobile/project/lib/main.js', dest: './_mobile/project/dist/', files: './_mobile/project/lib/*.js' }*/
];
BROWSERIFY.forEach(function(item){

  gulp.task( item.name,function(){
    if( PRODUCTION ){
      return(
        browserify( item.main )
        .transform( 'babelify', {presets: ["es2015", "react"]} )
        .bundle()
        .pipe( source(item.output||'bundle.js') )
        .pipe( buffer() )
        .pipe( uglify({}) )
        .pipe( gulp.dest(item.dest) )
      );
    }else{
      return(
        browserify( item.main )
        .transform( 'babelify', {presets: ["es2015", "react"]} )
        .bundle()
        .pipe( source(item.output||'bundle.js') )
        .pipe( gulp.dest(item.dest) )
      );
    }
  });

})

var ROLLUP = [{
  name: 'rollup-zeal',
  watch: ['./_mobile/wheels/zeal/src/*.js'],
  entry: './_mobile/wheels/zeal/src/zeal.main.js',
  output: 'zeal.js',
  dest: './_mobile/wheels/zeal/dist/'
},{
  name: 'rollup-vue',
  watch: ['./_mobile/wheels/vue/src/*.js'],
  entry: './_mobile/wheels/vue/src/index.js',
  output: 'vue.js',
  dest: './_mobile/wheels/vue/dist/'
// },{
//  name: 'rollup-canvas',
//  watch: ['./_mobile/vue/src/canvas/Canvas.js'],
//  entry: './_mobile/vue/src/canvas/Canvas.js',
//  output: 'canvas.js',
//  dest: './vendor/'
}]
ROLLUP.forEach((a)=>{
  gulp.task(a.name,function(){
    if(!PRODUCTION){
      return (
        rollup({
          entry: a.entry,
          format: 'umd',// 'cjs', 'umd'
          plugins: [require('rollup-plugin-babel')({})]
        })
        .pipe( source(a.output) )
        .pipe( gulp.dest(a.dest) )
      )
    }else{
      return (
        rollup({
          entry: a.entry,
          format: 'umd'// 'cjs', 'umd'
        })
        .pipe( source(a.output) )
        .pipe( buffer() )
        .pipe( uglify({}) )
        .pipe( gulp.dest(a.dest) )
      )
    }
  });
});
// gulp.src(['./_mobile/wheels/zeal/src/zeal.main.js','./_mobile/wheels/_/src/*.*'])
//  .pipe( rollup({
//    entry: './_mobile/wheels/zeal/src/zeal.main.js',
//    format: 'umd',
//    //plugins: [require('rollup-plugin-babel')()],
//    dest: 'bundle.js'
//  }))
//  .pipe( gulp.dest('./_mobile/wheels/zeal/dist/') )

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
//  name: 'webpack-mobile-farm', 
//  src: './_mobile/farm/src/main.jsx', 
//  dest: './_mobile/farm/dist/', 
//  config: './_mobile/farm/webpack.config.js', 
//  watched: ['./_mobile/farm/src/*.*','./_mobile/farm/src/*/*.*']
// },{
// name: 'webpack-mobile-main', 
// src: './_mobile/main/src/main.jsx', 
// dest: './_mobile/main/dist/', 
// config: './_mobile/main/webpack.config.js', 
// watched: ['./_mobile/main/src/*.*','./_mobile/main/src/*/*.*','./_mobile/main/src_front_end/*.*']
// },{
//  name: 'webpack-mobile-vue', 
//  watched: ['./_mobile/vue/src/*.*','./_mobile/vue/src/*/*.*','./_mobile/vue/src/*/*/*.*'], 
//  src: './_mobile/vue/src/presentation.main.js', 
//  config: './_mobile/vue/webpack.config.js', 
//  dest: './_mobile/vue/dist/'
// },{
//  name: 'webpack-time', 
//  dest: './time/dist/', 
//  config: './time/webpack.config.js', 
//  watched: ['./time/src/*.*','./time/src/**/*.*']
// },{  
//  name: 'webpack-time-server', 
//  dest: './time/server/', 
//  config: './time/webpack.server.js', 
//  watched: ['./time/src/*.*','./time/src/**/*.*']
// },{
  name: 'webpack-desktop-presentation', 
  dest: './desktop/presentation/dist/', 
  config: './desktop/presentation/webpack.config.js', 
  watched: ['./desktop/presentation/src/*.*','./desktop/presentation/src/*/*.*']
},{
//  name: 'webpack-canvas', 
//  src: './_canvas/src/index.js', 
//  dest: './_canvas/dist/', 
//  config: './_canvas/webpack.config.js', 
//  watched: ['./_canvas/src/*.*','./_canvas/src/**/*.*']
// },{
  name: 'webpack-mobile-svg', 
  src: './_mobile/svg/src/preloader.js', 
  dest: './_mobile/svg/dist/', 
  config: './_mobile/svg/webpack.config.js', 
  watched: ['./_mobile/svg/src/*.*','./_mobile/svg/src/*/*.*']
},{
  name: 'webpack-mobile-h5', 
  watched: ['./_mobile/h5/*/src/*.*','./_mobile/h5/*/src/*/*.*'], 
  config: './_mobile/h5/webpack.config.js', 
  dest: './_mobile/h5/'
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
  watched: ['./_mobile/h5/live/src/*.*','./_mobile/h5/live/src/*/*.*'], 
  src: './_mobile/h5/liv/src/main.js', 
  config: './_mobile/h5/live/webpack.config.js', 
  dest: './_mobile/h5/live/dist/'
},{
  name: 'webpack-mobile-_vue', 
  watched: ['./_mobile/_vue/src/*.*','./_mobile/_vue/src/*/*.*'], 
  src: './_mobile/_vue/src/_farm/index.js', 
  config: './_mobile/_vue/webpack.config.js', 
  dest: './_mobile/_vue/dist/'
}];
WEBPACK.forEach(function(item){
  gulp.task( item.name,function(){
    if( PRODUCTION ){
      return gulp.src( item.src||'' )
        .pipe( webpack( require(item.config) ) )
        .pipe( uglify() )
        .pipe( gulp.dest(item.dest) );
    }else{
      return gulp.src( item.src||'' )
        .pipe( webpack( require(item.config) ) )
        .pipe( gulp.dest(item.dest) );
    }
  });
})

// shell
// gulp.task( 'restart_server',shell.task([
//  'node express.js'
// ]));

// babel
gulp.task( 'babel_fytpy', function () {
  return gulp.src( "./fytpy/src/*.*")
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

var WEBPACK2 = [{
  name: 'webpack-mobile-main',  
  config: './_mobile/main/webpack.config.prod.js', 
  watched: ['./_mobile/main/src/*.*','./_mobile/main/src/**/*.*','./_mobile/main/src_front_end/*.*'],
  tpl: 'node ./_mobile/main/src/tpl/tpl.js'
},{
  name: 'webpack-mobile-farm',
  config: './_mobile/farm/webpack.config.js', 
  watched: ['./_mobile/farm/src/*.*','./_mobile/farm/src/**/*.*'],
  tpl: 'node _mobile/farm/src/tpl/tpl.js'
},{
  name: 'webpack-time',
  config: './time/webpack.config.prod.js',
  watched: ['./time/src/*.*','./time/src/**/*.*'],
  tpl: 'node time/src/tpl/tpl.js'
// },{
//  name: 'webpack2-time-ssr',
//  config: './time/webpack.server.js',
//  watched: ['./time/src/*.*','./time/src/**/*.*']
},{
  name: 'webpack-mobile-vue', 
  watched: ['./_mobile/vue/src/*.*','./_mobile/vue/src/**/*.*'],  
  config: './_mobile/vue/webpack.config.prod.js',
  tpl: 'node _mobile/vue/src/tpl/tpl.js'
},{
  name: 'webpack-ssr', 
  watched: ['./ssr/src/*.*','./ssr/src/**/*.*'],  
  config: './ssr/webpack.config.js'
},{
  name: 'webpack-ssr-ssr', 
  watched: ['./ssr/src/*.*','./ssr/src/**/*.*'],  
  config: './ssr/webpack.server.js'
},{
  name: 'webpack-hot', 
  watched: ['./hot/src/*.*','./hot/src/**/*.*'],  
  config: './hot/webpack.config.prod.js',
  tpl: 'node hot/src/tpl/tpl.js'
}]
var gulputil = require('gulp-util')
var webpack2 = require('webpack');

WEBPACK2.forEach(a=>{
  gulp.task( a.name,function(){
    console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV==='production'){
      webpack2( require(a.config),function(e,s){
        if(e){
          throw new gulputil.PluginError('webpack',e)
        };
        gulputil.log('[webpack]',s.toString({  }));
      });
    };
    if( a.tpl ){
      gulp.src('').pipe( shell(a.tpl));
      console.log(`[${a.name}] ${process.env.NODE_ENV} html generated.`);
    };
  })
})

var GENERATE = [{
  name: 'shell-ssr',
  watched: ['./ssr/server_bundles/*.*'],
  sh: 'node ssr/src/render.js'
},{
  name: 'node-vue-list',
  watched: ['./_mobile/vue/src/api/items.js','./_mobile/vue/generate-list.js'],
  sh: 'node ./_mobile/vue/generate-list.js'
}]

GENERATE.forEach(a=>{
  gulp.task( a.name,function(){
    return gulp.src('')
      .pipe( shell(a.sh) );
  } )
})

var EJS = [{
  name: 'ejs-vue',
  src: './_mobile/vue/tpl/item.ejs',
  watched: ['./_mobile/vue/tpl/item.ejs'],
  data: function(){
    return require('./_mobile/vue/src/api/items.js');
  },
  rename: '[name].html',
  dest: './_mobile/vue/item/'
},{
  name: 'ejs-_vue',
  src: './_mobile/_vue/src/tpl/page.ejs',
  watched: ['./_mobile/_vue/src/tpl/page.ejs','./_mobile/_vue/src/tpl/items.js'],
  data: function(){
    return require('./_mobile/_vue/src/tpl/items.js');
  },
  rename: '[name].html',
  dest: './_mobile/_vue/'
},{
  name: 'ejs-_canvas',
  src: './_canvas/src/tpl/page.ejs',
  watched: ['./_canvas/src/tpl/page.ejs','./_canvas/src/tpl/items.js'],
  data: function(){
    return require('./_canvas/src/tpl/items.js')
  },
  rename: '[name].html',
  dest: './_canvas/'
// },{
//  name: 'ejs-time',
//  src: './time/src/tpl/tpl.ejs',
//  watched: ['./time/src/tpl/*.*'],
//  data: function(){
//    return require('./time/src/tpl/config.js')
//  },
//  rename: '[name].html',
//  dest: './public/time/'
},{
  name: 'ejs-wolf',
  src: './desktop/_wolf/src/index.ejs',
  watched: ['./desktop/_wolf/src/index.ejs'],
  data: {img: '../../img/wolf'},
  rename: 'index.html',
  dest: './desktop/_wolf/'
}]

EJS.forEach(a=>{
  gulp.task(a.name,()=>{
    if(a.name!=='ejs-wolf'){
      a.data().forEach(b=>{
        gulp.src( a.src )
          .pipe( ejs(b) )
          .pipe( rename(b.name+'.html') )
          .pipe( gulp.dest(a.dest) )
      })
    }else{
      gulp.src( a.src )
        .pipe( ejs() )
        .pipe( rename(a.rename) )
        .pipe( gulp.dest(a.dest) )
    }
  })
});

const TPL = require('./gulp/TPL.js');
TPL.forEach(a=>{
  gulp.task(a.name,()=>{
    gulp.src('')
      .pipe( shell('node '+a.tpl) );
  })
})

gulp.task('watch',function(){
  [EJS, TPL, GENERATE, WEBPACK2].forEach(A=>{
    A.forEach(a=>{
      gulp.watch( a.watched,[a.name] );
    })
  })

  LESS.forEach(a=>{
    gulp.watch( a.src,[a.name] );
  });

  WEBPACK.forEach(function(elem){
    gulp.watch( elem.watched,[elem.name] );
  });

  BROWSERIFY.forEach(function(elem){
    gulp.watch( elem.files,[elem.name] );
  });

  ROLLUP.forEach(a=>{
    gulp.watch( a.watch,[a.name] );
  })

  // gulp.watch( './_mobile/vue/lib/*.*',['vueify'] );

  // angular  
  gulp.watch( './angular/public/js/*/*.js',['concat_angular'] );

  // z
  // gulp.watch( './js/Z/*.js',['browserify_Z'] );

  // fytpy
  gulp.watch( './fytpy/src/*.*',['babel_fytpy'] );

  // react
  gulp.watch( ['./fytpy/react/jsx/*.jsx','./fytpy/react/jsx/*/*.jsx'],['browserify_react'] );

  // ts
  gulp.watch( './ts/ts/*.ts',['browserify_ts'] );
})

gulp.task( 'start_server',function(){
  nodemon({
    script: './server/server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});
gulp.task('server',['watch','start_server'],function(){

});

gulp.task( 'default',['watch'],()=>{
  process.env.NODE_ENV = 'production';
  //gulp.src('').pipe( shell('node hot/server.js') )
  //gulp.run( ['restart_server'] );
  //gulp.watch( './express.js',['restart_server']);

});
const DEV = [{
  name: 'dev-main',
  WEBPACK_CONFIG: path.resolve(__dirname,'_mobile/main/webpack.config.dev.js'),
  tasks: ['webpack-main','watch']
},{
  name: 'dev-hot',
  WEBPACK_CONFIG: path.resolve(__dirname,'hot/webpack.config.dev.js'),
  tasks: ['webpack-hot','watch']
},{
  name: 'dev-time',
  WEBPACK_CONFIG: path.resolve(__dirname,'time/webpack.config.js'),
  tasks: ['webpack-time','watch'] 
},{
  name: 'dev-vue',
  WEBPACK_CONFIG: path.resolve(__dirname,'_mobile/vue/webpack.config.dev.js'),
  tasks: []
}]
DEV.forEach(a=>{
  gulp.task( a.name,['watch'],()=>{
    process.env.NODE_ENV = 'development';
    process.env.WEBPACK_CONFIG = a.WEBPACK_CONFIG;
    gulp.src('')
      //.pipe( shell(a.tpl) )
      .pipe( shell('node server/server.hot.js') );
  } )
})

gulp.task( '__build',()=>{
  process.env.NODE_ENV = 'production';
})
gulp.task( 'build',[
  '__build',
  'webpack-mobile-main',
  'webpack-mobile-vue',
  'webpack-time',
  'webpack-hot'],
  function(){
});

/*
concat
gulp.task( "concat_angular",function(){
  gulp.src([
      './angular/public/js/controllers/*.js',
      './angular/public/js/directives/*.js',
    ])
    .pipe( concat("bundle.js") )
    .pipe( gulp.dest("./angular/public/js/") );
});
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


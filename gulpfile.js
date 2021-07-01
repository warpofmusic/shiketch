
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
var  extender  =  require('gulp-html-extend');
const browserSync = require('browser-sync').create();
var del = require('del');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const paths = {
	root: './',
	styles: {
		src: './src/scss/*.scss',
		dest: './dist/css/',
		map: './dist/css',
	},
	html: {
		src: ['./src/*.html'],
		dest: './dist/',
		watch: ['./src/*.html','./src/html/**/*.html'],
	},
	image:{
		src: './src/image/**',
		dest: './dist/image/',
	},
	js:{
		src: './src/js/**',
		dest: './dist/js',
	},
};



function styles(){
	return gulp
	.src(paths.styles.src, { sourcemaps: true })
	// .src(paths.styles.src, { sourcemaps: false })
	.pipe(
		plumber({
			errorHandler: notify.onError('<%= error.message %>'),
		}),
	)
	.pipe(
		sass({
			//https://utano.jp/entry/2018/02/hello-sass-output-style/
			// outputStyle: 'nested',
			outputStyle: 'expanded',
			// outputStyle: 'compact',
			// outputStyle: 'compressed',
		}),
	)
	.pipe(gulp.dest(paths.styles.dest, { sourcemaps: './' }));
}

function imageDel(){
	return del(paths.image.dest);
}
function imageCopy(){
	return gulp
	.src(paths.image.src)
	.pipe(gulp.dest(paths.image.dest));
}

function jsDel(){
	return del(paths.js.dest);
}
function jsCopy(){
	return gulp
	.src(paths.js.src)
	.pipe(gulp.dest(paths.js.dest));
}
function jsWebpack(){
	return webpackStream(webpackConfig, webpack)
	  .pipe(gulp.dest('./')); 
}


function htmlDel(){
	return del(paths.html.dest+'/*.html');
}
function htmlextend(){
		return gulp
		.src(paths.html.src)
		.pipe(extender({annotations:true,verbose:false})) // default options
		.pipe(gulp.dest(paths.html.dest));
}





// ブラウザ更新&ウォッチタスク
const browserSyncOption = {
	// htmlファイルだけだなら、proxyを使わなくて良いから、このように書いた方が早い
	server: {
		baseDir: "./dist/", // Change this to your web root dir
		index: 'index.html',
	}
};
function browsersync(done) {
	browserSync.init(browserSyncOption);
	done();
}

//ファイル監視
function watchFiles(done) {
	const browserReload = () => {
		browserSync.reload();
		done();
	};
	gulp.watch(paths.styles.src).on('all', gulp.series(styles, browserReload));
	// gulp.watch(paths.image.src).on(['all'], gulp.series(imageDel,imageCopy,browserReload));
	// gulp.watch(paths.js.src).on('all', gulp.series(jsDel,jsCopy,browserReload));
	gulp.watch(paths.js.src).on('all', gulp.series(jsDel,jsWebpack,browserReload));
	gulp.watch(paths.html.watch).on('all', gulp.series(htmlextend,browserReload));
}

//defaultタスクは、タスク名を指定しなかったときに実行されるタスクです。
gulp.task('default', gulp.series(
	gulp.parallel(
		htmlextend,
		styles,
		// gulp.series(imageDel,imageCopy),
		gulp.series(jsDel,jsWebpack)
	),
	gulp.series(browsersync, watchFiles))
);

gulp.task('js',
		gulp.series(jsDel,jsWebpack)
);

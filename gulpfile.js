var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream')
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	reactify = require('reactify'),
	del = require('del');

gulp.task('styles', function(){
	return gulp.src('src/*.scss')
			.pipe(sass())
			.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
			.pipe(gulp.dest('build'))
			.pipe(notify({message: 'Styles compilation complete!'}));
});

gulp.task('browserify', function(){
	return browserify('./src/main.js')
			.transform(reactify)
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('build/'))
			.pipe(notify({message: 'JS compilation complete!'}));;
});

gulp.task('clean', function(cb){
	del(['build/'],cb);
});

gulp.task('watch', function(){
	gulp.watch('src/*.scss', ['styles']);
})

gulp.task('default', ['clean'], function(){
	gulp.start('styles', 'browserify');
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var watch = require('gulp-watch'),
 less = require('gulp-less'),
 livereload = require('gulp-livereload');


//Starts server at localhost:2000
 gulp.task('connect', function(){
    connect.server({
        port: 2000
    });
 });

gulp.task('lessConvert', function(){
    return gulp.src('assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(livereload());
});

gulp.task('watch', function(){
    gulp.start('connect');
    gulp.watch('*.html', ['html']);
    gulp.watch(['assets/less/*.less', 'assets/css/*.css'], [ 'lessConvert' ] );
});
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject');

var options = {
  "productionMode": false
}

gulp.task('js', function () {
  return gulp.src('./source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'));
});

gulp.task('css', function () {
  return gulp.src('./source/sass/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dest/css'));
});

gulp.task('index', function () {

  var target = gulp.src('./source/html/index.php');
  var sources = gulp.src([
    './dest/css/*.css', 
    './dest/js/jquery.js', 
    './dest/js/bootstrap.js',
    './dest/js/app.js']);

  return target
    .pipe(inject(sources, { addRootSlash: false }))
    .pipe(debug())
    .pipe(gulp.dest('./'));

});

gulp.task('watch', function () {
  gulp.watch('./source/sass/scss/*.scss', ['css']);
  gulp.watch('./source/js/*.js', ['js']);
  gulp.watch('./source/html/*.php', ['index']);
});

gulp.task('default',['css', 'js', 'index', 'watch']);
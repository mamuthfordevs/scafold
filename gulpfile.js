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
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
  return gulp.src('./source/sass/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
  gulp.watch('./source/sass/scss/*.scss', ['css']);
  gulp.watch('./source/js/*.js', ['js']);
  gulp.watch('./source/html/*.php', ['index']);
});

gulp.task('index', function () {

  var target = gulp.src('./source/html/index.php');
  var injectDev = gulp.src(['./tmp/css/*.css', './tmp/js/*.js']);
  var injectProduction = gulp.src(['./dist/css/*.css', './dist/js/*.js']);

  if (options.productionMode) {
    return target
    .pipe(inject(injectDev, { addRootSlash: false }))
    .pipe(debug())
    .pipe(gulp.dest('./')); 
  } else {
    return target
    .pipe(inject(injectProduction, { addRootSlash: false }))
    .pipe(debug())
    .pipe(gulp.dest('./'));
  }

});
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('client/dashboard/dashboard.scss')
    .pipe(sass())
    .pipe(gulp.dest('client/dashboard'));
});

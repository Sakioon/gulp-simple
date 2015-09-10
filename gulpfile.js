var gulp = require('gulp');
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('bs', function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("./*.html", ['bs']);
    gulp.watch("./css/*.css", ['bs']);
});

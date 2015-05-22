var gulp = require('./gulp')([
    'jscs'
]);

gulp.task('build', ['jscs']);
gulp.task('default', ['build']);
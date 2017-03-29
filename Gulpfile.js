//Run 'gulp' on the command line to start the server.
var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server();
});
 
gulp.task('default', ['connect']);
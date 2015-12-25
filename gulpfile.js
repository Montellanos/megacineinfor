var gulp = require('gulp'),
    php = require('gulp-connect-php'),
    livereload = require('gulp-livereload');


gulp.task('server', function() {
    php.server({
        base: './public/',
        livereload : true,
        port : 8000
    });
});

gulp.task('default', ['server', 'reload']);


gulp.task('reload', function(){
	livereload.listen();
    gulp.watch(['./resources/views/*.php'], function(file){
    	livereload.changed(file.path);
    });
});
    

var gulp = require('gulp'),  
    minifycss = require('gulp-minify-css'),  
    concat = require('gulp-concat'),  
    uglify = require('gulp-uglify'),  
    rename = require('gulp-rename'),  
    del = require('del'); 
    connect = require("gulp-connect"); //热部署（即时刷新）
//压缩JS  
gulp.task('minify', function() {  
    gulp.src('js/*.js')  
//      .pipe(concat('main.js'))         //合并所有js到main.js  
        .pipe(uglify())                  //执行压缩  
        .pipe(rename({suffix: '.min'}))  //rename压缩后的文件名 让main.js变成main.min.js  
        .pipe(gulp.dest('minified/js'))  
});  
//压缩CSS  
gulp.task('minifycss', function() {  
    return gulp.src('css/*.css')  //压缩的文件  
        .pipe(gulp.dest('minified/css')) //输出文件夹  
        
        .pipe(minifycss());  
});  
//执行压缩前，先删除文件夹里的内容  
//执行删除的时候不要把目录定在build的子目录中，windows删除目录的同时会报错  
gulp.task('clean', function(cb) {  
    del(['minified/css', 'minified/js'], cb)  
});  
//在任务数组中放上面要执行的任务  
gulp.task('default', ['clean', 'minify', 'minifycss']);  




//定义一个任务，处理html
gulp.task("refreshHTML",function(){
     //src用来读取，pipe用来输送
     gulp.src("./*.html").pipe(connect.reload());
});
//监听任务
gulp.task("watch",function (){
     //让connect启动一个服务器，这样它才能即时刷新浏览器
     connect.server({
          livereload:true
     });
     //检测文件的变化，执行相应的任务
     gulp.watch("./*.html", ["refreshHTML"]);
});


//给gulp定义一个任务，编译scss文件
gulp.task("compileSass", function () { 
         sass("scss/*.scss",{
               style: "expanded"
         }).pipe(gulp.dest("css"))
});

//一个监听sass的任务
gulp.task('watchingSass',function (){
    gulp.watch('scss/*.scss',['compileSass'])
});

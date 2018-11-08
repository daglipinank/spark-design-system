const gulp = require('gulp');
const exec = require('child_process').exec;
const clean = require('gulp-clean');

gulp.task('build-angular-dev-app', (cb) => {
  exec('cd src/angular && ng build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('clean-angular-dev-app', () => gulp.src(['src/angular/node_modules'], { read: false })
  .pipe(clean()));

gulp.task('install-angular-dev-app', (cb) => {
  exec('cd src/angular && npm install', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark-to-angular-dir', (cb) => {
  exec(
    `cd src/angular &&
     npm unlink @sparkdesignsystem &&
     npm link @sparkdesignsystem/spark-core &&
     npm link @sparkdesignsystem/spark-extras-card && 
     npm link @sparkdesignsystem/spark-extras-dictionary && 
     npm link @sparkdesignsystem/spark-extras-highlight-board`, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('link-spark-core-angular-to-angular-dir', (cb) => {
  gulp.src(['./src/angular/node_modules/@sparkdesignsystem/spark-core-angular'], { read: false })
    .pipe(clean());
  exec(`cd src/angular && npm link @sparkdesignsystem/spark-core-angular`, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var request = require('request');
var moment = require('moment');
moment().format();

gulp.task('refresh', function() {

  // Finnish Flag days data
  // Data can be re-downloaded from here:
  // According to the terms the URL shouldn't be referenced directly, thus it's downloaded from there and served from here
  fs.stat('data/Liputuspäivät.json', function(error, stats) {
    // If our file is older than from this month, re-download it
    if (moment().isAfter(stats.mtime, 'month'))
    {
      console.log('Downloading Finnish Flag days data...');
      request('http://www.webcal.fi/cal.php?id=2&format=json&start_year=current_year&end_year=current_year&tz=Europe%2FHelsinki')
        .pipe(fs.createWriteStream('data/Liputuspäivät.json'));
    }
  });

  console.log('Data has been refreshed – server is good to go!');
});

gulp.task('default', ['refresh']);

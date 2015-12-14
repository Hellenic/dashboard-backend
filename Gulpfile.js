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
    if (typeof(stats) === "undefined" || moment().isAfter(stats.mtime, 'month'))
    {
      console.log('Downloading Finnish Flag days data...');
      request('http://www.webcal.fi/cal.php?id=2&format=json&start_year=current_year&end_year=current_year&tz=Europe%2FHelsinki')
        .pipe(fs.createWriteStream('data/Liputuspäivät.json'));
    }
  });

  // Raflaamo restaurants for lunches
  fs.stat('data/Raflaamo-restaurants.json', function(error, stats) {
    // If our file is older than from today, re-download it
    if (typeof(stats) === "undefined" || moment().isAfter(stats.mtime, 'day'))
    {
      console.log('Downloading Raflaamo restaurant data...');
      request('http://www.raflaamo.fi/raflaamo-data/restaurants/lunch?lat=60.205555&lon=24.655556&locale=fi_FI&date=2015-12-15&city=Espoo')
        .pipe(fs.createWriteStream('data/Raflaamo-restaurants.json'));
    }
  });
  // Eat.fi restaurants for lunches
  fs.stat('data/Eat-restaurants.json', function(error, stats) {
    // If our file is older than from today, re-download it
    if (typeof(stats) === "undefined" || moment().isAfter(stats.mtime, 'day'))
    {
      console.log('Downloading Eat.fi restaurant data...');
      request('http://eat.fi/eat/area/json?nelat=60.234149525258466&swlat=60.218081158116355&nelng=24.814503707122867&swlng=24.78021434707648')
        .pipe(fs.createWriteStream('data/Eat-restaurants.json'));
    }
  });

  console.log('Data has been refreshed – server is good to go!');
});

gulp.task('default', ['refresh']);

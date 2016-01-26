// Poor-man's initial data
module.exports = function(app) {
    console.log('Importing sample data...\n');

    // Hard-coded data for Places. Should be moved to dashboard-scraper
    var Place = app.models.Place;
    Place.create({
      "name": "Leppävaaran uimahalli",
      "openingTimes": [
        {
          "weekday": "Monday",
          "from": "7:00",
          "to": "20:00"
        },
        {
          "weekday": "Tuesday",
          "from": "6:00",
          "to": "20:00"
        },
        {
          "weekday": "Wednesday",
          "from": "10:00",
          "to": "20:00"
        },
        {
          "weekday": "Thursday",
          "from": "6:00",
          "to": "20:00"
        },
        {
          "weekday": "Friday",
          "from": "7:00",
          "to": "20:00"
        },
        {
          "weekday": "Saturday",
          "from": "9:00",
          "to": "19:00"
        },
        {
          "weekday": "Sunday",
          "from": "9:00",
          "to": "19:00"
        }
      ]
    });

    Place.create({
      "name": "Cafe Zoceria",
      "openingTimes": [
        {
          "weekday": "Monday",
          "from": "8:00",
          "to": "19:00"
        },
        {
          "weekday": "Tuesday",
          "from": "8:00",
          "to": "19:00"
        },
        {
          "weekday": "Wednesday",
          "from": "8:00",
          "to": "19:00"
        },
        {
          "weekday": "Thursday",
          "from": "8:00",
          "to": "19:00"
        },
        {
          "weekday": "Friday",
          "from": "8:00",
          "to": "19:00"
        },
        {
          "weekday": "Saturday",
          "from": "10:00",
          "to": "18:00"
        },
        {
          "weekday": "Sunday",
          "from": "11:00",
          "to": "16:00"
        }
      ]
    });

    Place.create({
      "name": "Alepa - Kilo",
      "openingTimes": [
        {
          "weekday": "Monday",
          "from": "7:00",
          "to": "23:00"
        },
        {
          "weekday": "Tuesday",
          "from": "7:00",
          "to": "23:00"
        },
        {
          "weekday": "Wednesday",
          "from": "7:00",
          "to": "23:00"
        },
        {
          "weekday": "Thursday",
          "from": "7:00",
          "to": "23:00"
        },
        {
          "weekday": "Friday",
          "from": "7:00",
          "to": "23:00"
        },
        {
          "weekday": "Saturday",
          "from": "7:00",
          "to": "23:00"
        },
        {
          "weekday": "Sunday",
          "from": "9:00",
          "to": "23:00"
        }
      ]
    });

    Place.create({
      "name": "K-Market - Kilo",
      "openingTimes": [
        {
          "weekday": "Monday",
          "from": "7:00",
          "to": "21:00"
        },
        {
          "weekday": "Tuesday",
          "from": "7:00",
          "to": "21:00"
        },
        {
          "weekday": "Wednesday",
          "from": "7.00",
          "to": "21:00"
        },
        {
          "weekday": "Thursday",
          "from": "7:00",
          "to": "21:00"
        },
        {
          "weekday": "Friday",
          "from": "7:00",
          "to": "21:00"
        },
        {
          "weekday": "Saturday",
          "from": "8:00",
          "to": "20:00"
        },
        {
          "weekday": "Sunday",
          "from": "12:00",
          "to": "18:00"
        }
      ]
    });
};

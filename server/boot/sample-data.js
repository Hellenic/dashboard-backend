// Poor-man's initial data
module.exports = function(app) {
    console.log('Importing sample data...\n');

    // Example data for Game
    var Game = app.models.Game;
    Game.create({"title":"Thief","developer":"Square Enix","platform":"Xbox 360"});
    Game.create({"title":"Tekken 6","developer":"Capcom","platform":"Xbox 360"});
    Game.create({"title":"Final Fantasy XI","developer":"Square Enix","platform":"PC"});

    // Initial data for Finnish flag days
    var finnishFlagDaysData = require('../../data/Liputuspäivät.json');
    var FlagDay = app.models.FlagDay;
    for (var i=0; i<finnishFlagDaysData.length; i++)
    {
      var flagDay = finnishFlagDaysData[i];
      flagDay.locale = "FI";
      flagDay.country = "Finland";
      FlagDay.create(flagDay);
    }

    // Initial data for restaurants
    var Restaurant = app.models.Restaurant;
    var raflaamoData = require('../../data/Raflaamo-restaurants.json');
    // Parse Raflaamo data
    for (var i=0; i<raflaamoData.lunchcards.length; i++)
    {
      var r = raflaamoData.lunchcards[i];
      Restaurant.create({
        name: r.restaurant,
        phone: r.phone,
        street: r.streetAddress,
        city: r.city,
        openingTimes: r.opening_times_weeks.openingTimesColumns,
        menu: r.menu,
        url: r.siteUrl
      });
    }

    // Parse Eat.fi data
    var eatData = require('../../data/Eat-restaurants.json');
    for (var i=0; i<eatData.show.length; i++)
    {
      var r = eatData.show[i];
      Restaurant.create({
        name: r[4],
        coordinates: {x: r[1], y: r[2]}
      });
    }
};

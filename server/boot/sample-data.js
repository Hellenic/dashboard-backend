// Poor-man's initial data
module.exports = function(app) {
    console.log('Importing sample data...');

    // Example data for Game
    var Game = app.models.Game;
    Game.create({"title":"Thief","developer":"Square Enix","platform":"Xbox 360"});
    Game.create({"title":"Tekken 6","developer":"Capcom","platform":"Xbox 360"});
    Game.create({"title":"Final Fantasy XI","developer":"Square Enix","platform":"PC"});

    // Initial data for Finnish flag days.
    // Data can be re-downloaded from here: http://www.webcal.fi/cal.php?id=2&format=json&start_year=current_year&end_year=current_year&tz=Europe%2FHelsinki
    // According to the terms the URL shouldn't be referenced directly, thus it's downloaded from there and served from here
    var finnishFlagDaysData = require('../../data/Liputuspäivät.json');
    var FlagDay = app.models.FlagDay;
    for (var i=0; i<finnishFlagDaysData.length; i++)
    {
      var flagDay = finnishFlagDaysData[i];
      flagDay.locale = "FI";
      flagDay.country = "Finland";
      FlagDay.create(flagDay);
    }
};

// Poor-man's initial data
module.exports = function(app) {
    console.log('Importing sample data...\n');

    // Example data for Game
    var Game = app.models.Game;
    Game.create({"title":"Thief","developer":"Square Enix","platform":"Xbox 360"});
    Game.create({"title":"Tekken 6","developer":"Capcom","platform":"Xbox 360"});
    Game.create({"title":"Final Fantasy XI","developer":"Square Enix","platform":"PC"});
};

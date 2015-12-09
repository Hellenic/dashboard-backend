module.exports = function(app) {
    console.log('Importing sample data...');

    // Poor-man's initial data
    var Game = app.models.Game;
    Game.create({"title":"Thief","developer":"Square Enix","platform":"Xbox 360"});
    Game.create({"title":"Tekken 6","developer":"Capcom","platform":"Xbox 360"});
};

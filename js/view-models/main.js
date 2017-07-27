(function() {

    var app = Sammy.apps.body;

    app.get('#/', function(context) {
        console.log("You're in the Main route");
    });

})();
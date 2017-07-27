(function() {

    var app = Sammy.apps.body;

    app.get('#/stories', function(context) {
        console.log("You're in the stories route");
    });

})();
(function() {
    var ViewModel = function() {

    };

    var viewModelInstance = new ViewModel();

    var app = Sammy.apps.body;

    app.get('#/', function(context) {
        $(document).ready(function() {
            ko.applyBindings(viewModelInstance);
        });
    });

})();
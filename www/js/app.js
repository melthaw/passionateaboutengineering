$(document).ready(function() {
    var CONTAINER_ID = '#view-container',
        ROUTES_MAPPING = [
        {
            view: 'home', url: '#/home', onLoad: function() {
                $('#go-to-stories').on('click', function() {
                    location.hash = '#/stories';
                });
            }
        },
        {
            view: 'stories', url: '#/stories', onLoad: function() { }
        },
        {
            view: 'about', url: '#/about', onLoad: function() { }
        }
    ];

    loadView(getRouteFromHash(location.hash));

    $( window ).on('hashchange', function() {
        var route = getRouteFromHash(location.hash);

        if(!route) {
            console.warn('No view: ' + hash);
            return;
        }
        loadView(route);
    });

    function getRouteFromHash(hash) {
        var route = ROUTES_MAPPING.filter(function(mapping) {
            return mapping.url == hash;
        })[0];
        if(!route)
            route = ROUTES_MAPPING[0];
        return route;
    }

    function loadView(route) {
        var viewName = 'templates/' + route.view + '.html';
        $(CONTAINER_ID).load(viewName, route.onLoad);
    }

    $('.topnav .rel').on('click', function() {
        $('#myTopnav').prop('class', 'topnav');
    });

});


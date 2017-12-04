$(document).ready(function() {
    $('.collapsible *').hide();
    $('.collapsible').css('cursor', 'pointer');

    var expandedElements = [];

    $('.collapsible').on('click', function() {
        var $el = $(this);
        if(expandedElements.indexOf(this) >= 0) {
            expandedElements.splice(expandedElements.indexOf(this), 1);
            $(this).find('*').hide();
        } else {
            expandedElements.push(this);
            $(this).find('*').show();
        }
    });
});
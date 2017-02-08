"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var Mustache = require("mustache");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {
    	// Initialize the activity.
        activity.setup();
        $('.reload-button').on('click', function() {
            location.reload();
        });

        $()
    });
    

    $('.menu-button').on('click', function() {
    	selectMenu($(this).attr('value'));
    });
});
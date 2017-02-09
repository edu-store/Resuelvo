"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var Mustache = require("mustache");
    var templates = require("../js/templates.js");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

    	var uri = 1;
    	var output = '';
    	var id = 0;
    	var temas = {
	    	'btn_nn' : 0,
	    	'btn_nd' : 1,
	    	'btn_nf' : 2,
	    	'btn_ml' : 3,
	    	'btn_mp' : 4,
	    	'btn_mc' : 5
	    };
	    var ejercicio = 1;

    	// Initialize the activity.
        activity.setup();
        $('.reload-button').on('click', function() {
            location.reload();
        });

	    $(document).ready(function(){
	    	console.log(uri);
	        output = Mustache.render(templates[uri].template, templates[0].content);
	        $("#canvas").html(output);
	    });

	    $('.pantalla_1').on('click', function(){
        	uri = $(this).attr('data');
        	id = $(this).attr('id');
        	console.log(uri);
	    	output = Mustache.render(templates[uri].template, templates[0].content.concepts[temas[id]]);
	        $("#canvas").html(output);
	    });

	    $('#canvas').on('click', 'button.pantalla_2', function(){
		    uri = $(this).attr('data');
        	id = $(this).attr('id');
        	ejercicio = Math.floor((Math.random() * 1) + 1);
        	console.log(templates[0].content.problems[temas[id]][ejercicio]);
	    	output = Mustache.render(templates[uri].template, templates[0].content.problems[temas[id]][ejercicio]);
	        $("#canvas").html(output);
		});

    });
    
    $('.menu-button').on('click', function() {
    	selectMenu($(this).attr('value'));
    });
});
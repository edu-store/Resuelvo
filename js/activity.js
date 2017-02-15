"user strict";

define(function (require) {
    var activity        = require("sugar-web/activity/activity");
    var datastore       = require("sugar-web/datastore");
    var jquery          = require("jquery");
    var interact        = require("interact");
    var Mustache        = require("mustache");
    var templates       = require("../js/templates.js");
    var naturales       = require("../js/naturales.js");
    var decimales       = require("../js/decimales.js");
    var fraccionarios   = require("../js/fraccionarios.js");
    var longitud        = require("../js/longitud.js");
    var peso            = require("../js/peso.js");
    var capacidad       = require("../js/capacidad.js");

    var mi_imagen = new Image();
    var imagen = '../Resuelvo/img/activity-stop.png';

    function load_image() {
        mi_imagen.src = imagen;
        return 'Tamaño de imagen: ' + mi_imagen.height+'x'+mi_imagen.width;
    }

    function random(array) {
        return Math.floor(Math.random() * array.length);
    }

    function select_matrix(tema) {
        switch (tema) {
            case 0:
                return naturales[random(naturales)];
                break;
            case 1:
                return decimales[random(decimales)];
                break;
            case 2:
                return fraccionarios[random(fraccionarios)];
                break;
            case 3:
                return longitud[random(longitud)];
                break;
            case 4:
                return peso[random(peso)];
                break;
            case 5:
                return capacidad[random(capacidad)];
        }
    }

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

    	var uri    = 1;
    	var output = '';
    	var id     = 0;
    	var temas  = {
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
	        output = Mustache.render(templates[uri].template, templates[0].content);
            var nada = load_image();
            output = output + '<p style="position:absolute; top: 200px;">' + nada + '</p>';
	        $('#canvas').html(output);
	    });

	    $('#canvas').on('click', 'button.pantalla_1', function(){
        	uri = $(this).attr('data');
        	id = $(this).attr('id');
	    	output = Mustache.render(templates[uri].template, templates[0].content.concepts[temas[id]]);
	        $('#canvas').html(output);
	    });

	    $('#canvas').on('click', 'button.pantalla_2', function(){
		    uri = $(this).attr('data');
        	id = $(this).attr('id');
	    	output = Mustache.render(templates[uri].template, select_matrix(temas[id]));
	        $('#canvas').html(output);
		});

        $('#canvas').on('click', 'button#btn_nv', function(){
            output = Mustache.render(templates[uri].template, select_matrix(temas[id]));
            $('#canvas').html(output);
        });

        $('#canvas').on('click', 'button#btn_ini', function(){
            location.reload();
        });

    });
    
    $('.menu-button').on('click', function() {
    	selectMenu($(this).attr('value'));
    });
});
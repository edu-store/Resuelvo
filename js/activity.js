"user strict";

define(function (require) {
    var activity        = require("sugar-web/activity/activity");
    var datastore       = require("sugar-web/datastore");
    var jquery          = require("jquery");
    var interact        = require("interact");
    var Mustache        = require("mustache");
    // Matriz de pantillas de MustacheJS
    var templates       = require("../js/templates.js");
    // Matrices de ejerccios
    var naturales       = require("../js/naturales.js");
    var decimales       = require("../js/decimales.js");
    var fraccionarios   = require("../js/fraccionarios.js");
    var longitud        = require("../js/longitud.js");
    var peso            = require("../js/peso.js");
    var capacidad       = require("../js/capacidad.js");

    var signos_objs     = {
        'suma' : '<img id="suma" class="movimiento object nuevo" data="+" src="img/suma.png">',
        'resta': '<img id="resta" class="movimiento object nuevo" data="-" src="img/resta.png">',
        'multi': '<img id="multi" class="movimiento object nuevo" data="*" src="img/multiplicacion.png">',
        'divi' : '<img id="divi" class="movimiento object nuevo" data="/" src="img/division.png">', 
        'igual': '<img id="igual" class="movimiento object nuevo" data="=" src="img/igual.png">'
    };

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

    // funcion de movimiento para objetos html
    var moveItem = function(event) {
        // Current element
        var target = event.target;
        // Get axis values + movement change
        if (!target.hasAttribute('data-x')) {
            x0 = $(target).position().top;
            y0 = $(target).position().left;
        }
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        // Transform element
        target.style.top  = x0 + 'px';
        target.style.left = y0 + 'px';
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        // Update element attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    };

    function addSigno(id) {
        $('#signos').append(signos_objs[id]);
    }

    function outSigno(id) {
        $('#signos').children('#' + id + '.nuevo').remove();
    }

    var modItem = function(event) {
        event.relatedTarget.classList.remove('nuevo');
    };

    var leaveItem = function(event) {
        var draggableElement = event.relatedTarget, dropzoneElement = event.target;

        dropzoneElement.setAttribute('value', ' ');
        dropzoneElement.removeAttribute('disabled');

        var ident = draggableElement.getAttribute('id');
        outSigno(ident);
    };

    var stopItem = function(event) {
        var draggableElement = event.relatedTarget, dropzoneElement = event.target;

        var opr = draggableElement.getAttribute('data');
        dropzoneElement.setAttribute('value', opr);
        dropzoneElement.setAttribute('disabled', 'true');

        var ident = draggableElement.getAttribute('id');
        addSigno(ident);
    };

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

    	var uri      = 1;
    	var output   = '';
    	var id       = 0;
    	var temas    = {
	    	'btn_nn' : 0,
	    	'btn_nd' : 1,
	    	'btn_nf' : 2,
	    	'btn_ml' : 3,
	    	'btn_mp' : 4,
	    	'btn_mc' : 5
	    };
        var matriz   = new Object();

    	// Initialize the activity.
        activity.setup();
        $('.reload-button').on('click', function() {
            location.reload();
        });

	    $(document).ready(function(){
	        output = Mustache.render(templates[uri].template, templates[0].content);
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
            matriz = select_matrix(temas[id]);
	    	output = Mustache.render(templates[uri].template, matriz);
	        $('#canvas').html(output);
            var espacio = 30;
            $('#datos').children().each(function() {
                $(this).css('top', espacio + 'px');
                espacio+=40;
            });
            espacio = 15;
            $('#operacion').children().each(function() {
                $(this).css('left', espacio + 'px');
                espacio+=70;
            });
		});

        $('#canvas').on('click', 'button#btn_nv', function(){
            matriz = select_matrix(temas[id]);
            output = Mustache.render(templates[uri].template, matriz);
            $('#canvas').html(output);
            var espacio = 30;
            $('#datos').children().each(function() {
                $(this).css('top', espacio + 'px');
                espacio+=40;
            });
            espacio = 15;
            $('#operacion').children().each(function() {
                $(this).css('left', espacio + 'px');
                espacio+=70;
            });
        });

        var items = interact('.movimiento');
        items.draggable({
            initial:true,
            onmove:moveItem
        });

        var objects = interact('.operacion');
        objects.dropzone({
            accept:'.movimiento',
            overlap: 0.75,
            ondropactivate:modItem,
            ondrop:stopItem,
            ondragleave:leaveItem
        });

        $('#canvas').on('click', 'button#btn_rv', function(){
            console.log(matriz.operacion);
            var aprovar = matriz.datos.length + matriz.operacion.length + 1;
            console.log(aprovar);
            var aciertos = [-1];
            var contador = 0;

            var datos = [];
            var operacion = [];
            var respuesta = '';

            $('#datos').children('input').each(function(index) {
                var indice = $.inArray($(this).val(), matriz.datos);
                var existe = 0;
                if ( indice != -1 ) {
                    $.each(aciertos, function(i, v){
                        if(indice !=  aciertos[i]){
                            existe = 1;
                        } 
                    });
                    if (existe == 1) {
                        $(this).css('border', '2px solid red');
                        aciertos[contador] = indice;
                        contador++;
                    } else {
                        aciertos[contador] = '';
                    }
                }
            });

            $('#operacion').children('input').each(function(index) {
                var indice = $.inArray($(this).val(), matriz.operacion);
                var existe = 0;
                if ( indice != -1 ) {
                    $.each(aciertos, function(i, v){
                        if(indice !=  aciertos[i]){
                            existe = 1;
                        } 
                    });
                    if (existe == 1) {
                        $(this).css('border', '2px solid red');
                        aciertos[contador] = indice;
                        contador++;
                    } else {
                        aciertos[contador] = '';
                    }
                }
            });

            $('#respuesta-panel').children('input').each(function() {
                console.log(matriz.respuesta);
                if ( $(this).val() == matriz.respuesta ) {
                        $(this).css('border', '2px solid red');
                        aciertos[contador] = $(this).val();
                        contador++;
                } else {
                    aciertos[contador] = '';
                }
            });

            /*$.each(datos, function(index, value){
                var indice = $.inArray(value, matriz.datos);
                var existe = 0;
                if ( indice != -1 ) {
                    $.each(aciertos, function(i, v){
                        if(indice !=  aciertos[i]){
                            existe = 1;
                        } 
                    });
                    if (existe == 1) {
                        aciertos[index] = indice;
                        contador++;
                    }
                }
            });*/
            console.log(aciertos);


            if (aprovar == aciertos.length) {
                $('input').each(function() {
                    $(this).css('border', '2px solid green');
                });
                matriz = select_matrix(temas[id]);
                output = Mustache.render(templates[uri].template, matriz);
                $('#canvas').html(output);
                var espacio = 30;
                $('#datos').children().each(function() {
                    $(this).css('top', espacio + 'px');
                    espacio+=40;
                });
                espacio = 15;
                $('#operacion').children().each(function() {
                    $(this).css('left', espacio + 'px');
                    espacio+=70;
                });
            }
        });

        $('#canvas').on('click', 'button#btn_ini', function(){
            location.reload();
        });

    });
    
    $('.menu-button').on('click', function() {
    	selectMenu($(this).attr('value'));
    });
});
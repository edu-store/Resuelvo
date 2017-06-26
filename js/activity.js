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

    var alto            = 945;
    var ancho           = 1200;

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

    function addSigno(draggableElement, dropzoneElement) {
        var arrastrable     = $(draggableElement);
        var zona_arrastre   = $(dropzoneElement);
        var opr = arrastrable.attr('data');
        zona_arrastre.val(opr);
        zona_arrastre.prop('disabled', true);

        var ident = arrastrable.attr('id');
        $('#signos').append(signos_objs[ident]);
    }

    function outSigno(draggableElement, dropzoneElement) {
        var arrastrable     = $(draggableElement);
        var zona_arrastre   = $(dropzoneElement);
        zona_arrastre.val(' ');
        zona_arrastre.prop('disabled', false);
        zona_arrastre.removeClass('on-op');

        var ident = arrastrable.attr('id');
        $('#signos').children('#' + ident + '.nuevo').remove();
    }

    var modItem = function(event) {
        event.relatedTarget.classList.remove('nuevo');
    };

    var enterItem =  function (event) {
        var dropzoneElement = event.target;
        dropzoneElement.classList.add('on-op');
    };

    var leaveItem = function(event) {
        var draggableElement = event.relatedTarget, dropzoneElement = event.target;
        outSigno(draggableElement, dropzoneElement);
    };

    var stopItem = function(event) {
        var draggableElement = event.relatedTarget, dropzoneElement = event.target;
        addSigno(draggableElement, dropzoneElement);
    };

    function nexec(matriz) {
        var espacio = 15;
        var fr = 0;
        var ancho = 135;
        $('#operacion').children().each(function() {
            if(fr == 1) ancho = 95;
            else ancho = 135;
            $(this).css({'left':espacio + 'px', 'width':ancho + 'px'});
            if(fr == 1){ espacio += 100; fr = 0; }
            else{ espacio += 140; fr = 1; }
        });
        var cadena_respuesta = matriz.respuesta;
        cadena_respuesta = cadena_respuesta.split(/\d/);
        $('#respuesta').prev('p').text(cadena_respuesta[0]);
        $('#respuesta').prev('p').css({'color':'white', 'font-size':'20px', 'top':'20px', 'left':'15px'});
        $('#respuesta').next('p').text(cadena_respuesta[(cadena_respuesta.length - 1)]);
        $('#respuesta').next('p').css({'color':'white', 'font-size':'20px', 'top':'20px', 'left':'320px'});
    }

    function nf_nexec(matriz) {
        var espacio = 25;
        var alto = 50;
        var fr = 0;
        var ancho = 135;
        $('#operacion').children().each(function(index) {
            if(fr == 2) ancho = 95;
            else ancho = 135;
            $(this).css({'left' : espacio + 'px', 'top' : alto + 'px', 'width':ancho + 'px'});
            switch(fr) {
                case 0:
                    alto += 43;
                    $(this).after('<hr class="object" style="top:'+alto+'px; left:'+espacio+'px; width:'+ancho+'px;"/>');
                    fr = 1;
                    alto += 19;
                    break;
                case 1:
                    espacio += 140;
                    alto = 80;
                    fr = 2;
                    break;
                case 2:
                    espacio += 100;
                    alto = 50;
                    fr = 0;
                    break;
                }
        });
        var cadena_respuesta = matriz.respuesta;
        cadena_respuesta = cadena_respuesta.split(/\d/);
        $('#respuesta').prev('p').text(cadena_respuesta[0]);
        $('#respuesta').prev('p').css({'color':'white', 'font-size':'20px', 'top':'20px', 'left':'15px'});
        alto = 45;
        $('#respuesta').children('input').each(function(){
            $(this).css('top', alto + 'px');
            alto+=35;
        });
        $('#respuesta').next('p').text(cadena_respuesta[(cadena_respuesta.length - 1)]);
        $('#respuesta').next('p').css({'color':'white', 'font-size':'20px', 'top':'20px', 'left':'320px'});
    }

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

        $('#canvas').on('click', 'button#pantalla_0', function(){
            location.reload();
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
            if(temas[id] == 2) nf_nexec(matriz);
            else nexec(matriz);
		});

        $('#canvas').on('click', 'button#btn_nv', function(){
            matriz = select_matrix(temas[id]);
            output = Mustache.render(templates[uri].template, matriz);
            $('#canvas').html(output);
            if(temas[id] == 2) nf_nexec(matriz);
            else nexec(matriz);
        });

        var items = interact('.movimiento');
        items.draggable({
            initial:true,
            restrict: {
                restriction: document.getElementById('canvas'),
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            onmove:moveItem
        });

        var objects = interact('.operacion');
        objects.dropzone({
            accept:'.movimiento',
            overlap: 0.75,
            ondropactivate:modItem,
            ondragenter:enterItem,
            ondrop:stopItem,
            ondragleave:leaveItem
        });

        $('#canvas').on('click', 'button#btn_rv', function(){
            var resp_cont = (Array.isArray(matriz.resp_num))?matriz.resp_num.length:1;
            var aprovar = matriz.datos.length + matriz.operacion.length + resp_cont;
            console.log(matriz.resp_num + '-' + resp_cont);
            var aciertos = [-1];
            var contador = 0;

            var datos = [];
            var operacion = [];
            var respuesta = '';

            $('#datos').children('input').each(function() {
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
                    }
                }
            });

            $('#operacion').children('input').each(function() {
                var input = ($(this).val() == '')?'1':$(this).val();
                console.log(input);
                var indice = $.inArray(input, matriz.operacion);
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
                    }
                }
            });

            $('#respuesta').children('input').each(function() {
                var input = ($(this).val() == '')?'1':$(this).val();
                console.log(input);
                if(temas[id] == 2) {
                    console.log('fraccionarios');
                    if(matriz.resp_num[1][1]){
                        console.log('1+');
                        var resrev = 0;
                        console.log(resrev);
                        $.each(matriz.resp_num, function(index, value){
                            console.log(value);
                            var indice = $.inArray(input, value);
                            var existe = 0;
                            if (indice != -1) {
                                $.each(aciertos, function(i, v){
                                    if(indice !=  aciertos[i]){
                                        existe = 1;
                                    } 
                                });
                                if (existe == 1 && resrev <= 2) {
                                    console.log('cal');
                                    $(this).css('border', '2px solid red');
                                    aciertos[contador] = indice;
                                    contador++;
                                    resrev++;
                                    console.log(resrev);
                                }
                            }
                        });
                    }
                    else {
                        console.log('-1');
                        console.log(matriz.resp_num);
                        var indice = $.inArray(input, matriz.resp_num);
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
                            }
                        }
                    }
                } 
                else {
                    console.log('no fraccionarios');
                    if (input == matriz.resp_num) {
                        $(this).css('border', '2px solid red');
                        aciertos[contador] = $(this).val();
                        contador++;
                    }
                }
            });

            if (aprovar == aciertos.length) {
                $('#canvas div#myModal').css('display', 'block');
            }
        });

        $('#canvas').on('click', 'button#btn_ini', function(){
            location.reload();
        });

        $('#canvas').on('click', 'button.close', function() {
            $('input').each(function() {
                $(this).css('border', '2px solid green');
            });
            matriz = select_matrix(temas[id]);
            output = Mustache.render(templates[uri].template, matriz);
            $('#canvas').html(output);
            if(temas[id] == 2) nf_nexec(matriz);
            else nexec(matriz);
        });

        /*$('#canvas').on('click', 'button#myBtn', function() {
            $('#myModal').css('display', 'block');
        });*/

    });
    
    $('.menu-button').on('click', function() {
    	selectMenu($(this).attr('value'));
    });
});
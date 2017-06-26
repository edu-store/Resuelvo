define(function (require) {
    return [
        {
            'ejercicio' : 'Una cartera puede llevar sin romperse 12 kilos. Si ya hemos puesto 7 kilos, ¿cuántos kilos más podemos poner sin que se rompa?',
            'datos'     : [ '12 kilos', '7 kilos' ],
            'operacion' : [ '12', '-', '7', '=', '5' ],
            'respuesta' : 'Podemos poner 5 kilos.',
            'resp_num'  : '5',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Si 4 naranjas del mismo tamaño pesan 1 kilo. ¿Cuánto pesarán 44 naranjas del mismo tamaño?',
            'datos'     : [ '44 naranjas', '4 naranjas' ],
            'operacion' : [ '44', '/', '4', '=', '11' ],
            'respuesta' : 'Pesaran 11 kilos.',
            'resp_num'  : '11',
            'signo'     : '/'
        },
        {
            'ejercicio' : 'Juan va a comprar con su padre. Lleva en una mano una bolsa con 5 kilos y en la otra mano, una bolsa con 4 kilos. Su padre lleva otras dos bolsas con 8 kilos y 9 kilos. ¿Cuántos kilos llevan entre los dos?',
            'datos'     : [ '5 kilos', '4 kilos', '8 kilos', '9 kilos' ],
            'operacion' : [ '5', '+', '4', '+', '8', '+', '9', '=', '26' ],
            'respuesta' : 'Llevan 26 kilos.',
            'resp_num'  : '26',
            'signo'     : '+'
        },
        {
            'ejercicio' : 'Una furgoneta lleva 5 cajas de manzanas con 20 kilos cada una. ¿Cuántos kilos de manzanas lleva?',
            'datos'     : [ '5 cajas', '20 kilos' ],
            'operacion' : [ '5', '*', '20', '=', '100' ],
            'respuesta' : 'Lleva 100 kilos.',
            'resp_num'  : '100',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Antonio pesa 45 kilos Su padre pesa el doble. ¿Cuánto pesa el padre de Antonio?',
            'datos'     : [ '45 kilos', '2' ],
            'operacion' : [ '45', '*', '2', '=', '90' ],
            'respuesta' : 'Pesa 90 kilos.',
            'resp_num'  : '90',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Con un saco de 30 kilos, ¿cuántas bolsas de medio kilo podemos llenar?',
            'datos'     : [ '30 kilos', '0.5 kilos' ],
            'operacion' : [ '30', '/', '0.5', '=', '60' ],
            'respuesta' : '60 bolsas.',
            'resp_num'  : '60',
            'signo'     : '/'
        },
        {
            'ejercicio' : 'Don Marcelino lleva en su camión 7 vacas. Cada vaca pesa 675 kilos. ¿Qué peso soporta el camión?',
            'datos'     : [ '7 vacas', '675 kilos' ],
            'operacion' : [ '7', '*', '675', '=', '4,725' ],
            'respuesta' : 'Soporta 4,725 kilos.',
            'resp_num'  : '4,725',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Marta ha hecho una tortilla de patatas con: 5 patatas de 200 g, 4 huevos de 65 g, 3 g de sal, 87 g de aceite. ¿Cuántos gramos pesa la tortilla?',
            'datos'     : [ '200 gramos', '65 gramas','3 gramos','87 gramos' ],
            'operacion' : [ '200', '+', '65', '+', '87', '=', '355' ],
            'respuesta' : 'Pesa 355 gramos.',
            'resp_num'  : '355',
            'signo'     : '+'
        },
        {
            'ejercicio' : 'Un litro de aceite pesa 975 gramos. ¿Cuántos gramos pesan cuatro litros?',
            'datos'     : [ '975 gramos', '4 litros' ],
            'operacion' : [ '975', '*', '4', '=', '3,900'],
            'respuesta' : 'Pesan 3,900 gramos.',
            'resp_num'  : '3,900',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Un comerciante compró 800 kilos de trigo y luego vendió 380 kilos. ¿Cuántos kilos le quedaron?',
            'datos'     : [ '800 kilos', '380 kilos' ],
            'operacion' : [ '800', '-', '380', '=', '420'],
            'respuesta' : 'Quedaron 420 kilos.',
            'resp_num'  : '420',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Un camión puede llevar sin romperse 450 kilos. Si ya hemos puesto 167 kilos, ¿cuántos kilos más podemos poner sin que se rompa?',
            'datos'     : [ '450 kilos', '167 kilos' ],
            'operacion' : [ '450', '-', '167', '=', '283'],
            'respuesta' : 'Puede llevar 283 kilos',
            'resp_num'  : '283',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Entre 2 carros de feria pesan 275 kilos. El más grande pesa 155 kilos ¿Cuánto pesa el más pequeño?',
            'datos'     : [ '275 kilos', '155 kilos' ],
            'operacion' : [ '275', '-', '155', '=', '120'],
            'respuesta' : 'Pesa 120 kilos',
            'resp_num'  : '120',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Un huevo de gallina pesa 65 gramos. ¿Cuánto pesa media docena de huevos?',
            'datos'     : [ '65 gramos', '6 huevos' ],
            'operacion' : [ '65', '*', '16', '=', '390'],
            'respuesta' : 'Pesan 390 gramos',
            'resp_num'  : '390',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Un balde de tomates en el mercado mayoreo pesa 20 libras, que empacaré en bolsas de 2 libras. ¿Cuántas bolsas necesito?',
            'datos'     : [ '20 libras', '2 libras' ],
            'operacion' : [ '20', '/', '2', '=', '10'],
            'respuesta' : 'Se necesitan 10 bolsas',
            'resp_num'  : '10',
            'signo'     : '/'
        },
        {
            'ejercicio' : 'Un quintal de maíz tiene 100 libras, que empacaré en bolsas de 5 libras. ¿Cuántas bolsas necesito?',
            'datos'     : [ '100 libras', '5 libras' ],
            'operacion' : [ '100', '/', '5', '=', '20'],
            'respuesta' : 'Necesito 20 bolsas',
            'resp_num'  : '20',
            'signo'     : '/'
        }
    ];
});

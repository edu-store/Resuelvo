define(function (require) {
    return [
        {
            'ejercicio' : 'Una cartera puede llevar sin romperse 12 kilos. Si ya hemos puesto 7 kilos, ¿cuántos kilos más podemos poner sin que se rompa?',
            'datos'     : [ '12 kilos', '7 kilos' ],
            'operacion' : [ '12', '-', '7', '=', '5' ],
            'respuesta' : 'Podemos poner 5 kilos',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Si 4 naranjas del mismo tamaño pesan 1 kg. ¿Cuánto pesarán 44 naranjas del mismo tamaño?',
            'datos'     : [ '44', '4' ],
            'operacion' : [ '44', '/', '4', '=', '11' ],
            'respuesta' : 'Pesaran 11 kg.',
            'signo'     : '/'
        },
        {
            'ejercicio' : 'Juan va a comprar con su padre. Lleva en una mano una bolsa con 5 kg y en la otra mano, una bolsa con 4 kg. Su padre lleva otras dos bolsas con 8 kg y 9 kg. ¿Cuántos kilos llevan entre los dos?',
            'datos'     : [ '5', '4', '8', '9' ],
            'operacion' : [ '5', '+', '4', '+', '8', '+', '9', '=', '26' ],
            'respuesta' : 'Llevan 26 kg.',
            'signo'     : '+'
        },
        {
            'ejercicio' : 'Una furgoneta lleva 5 cajas de manzanas con 20 kg cada una. ¿Cuántos kilos de manzanas lleva?',
            'datos'     : [ '5', '20' ],
            'operacion' : [ '5', '*', '20', '=', '100' ],
            'respuesta' : 'Lleva 100 kg.',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Antonio pesa 45 kg. Su padre pesa el doble. ¿Cuánto pesa el padre de Antonio?',
            'datos'     : [ '45', '2' ],
            'operacion' : [ '45', '*', '2', '=', '90' ],
            'respuesta' : 'Pesa 90 kg.',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Con un saco de 30 kilos, ¿cuántas bolsas de medio kilo podemos llenar?',
            'datos'     : [ '30', '0.5' ],
            'operacion' : [ '30', '/', '0.5', '=', '60' ],
            'respuesta' : '60 Bolsas',
            'signo'     : '/'
        },
        {
            'ejercicio' : 'Don Marcelino lleva en su camión 7 vacas. Cada vaca pesa 675 kilos. ¿Qué peso soporta el camión?',
            'datos'     : [ '7', '0675' ],
            'operacion' : [ '7', '*', '675', '=', '4725' ],
            'respuesta' : 'Soporta 4725 kilos',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Marta ha hecho una tortilla de patatas con: 5 patatas de 200 g, 4 huevos de 65 g, 3 g de sal, 87 g de aceite. ¿Cuántos gramos pesa la tortilla?',
            'datos'     : [ '200', '65','3','87' ],
            'operacion' : [ '200', '+', '65', '+', '87', '=', '355' ],
            'respuesta' : 'Pesa 355 gramos',
            'signo'     : '+'
        },
        {
            'ejercicio' : 'Un litro de aceite pesa 975 gramos. ¿Cuántos gramos pesan cuatro litros?',
            'datos'     : [ '975', '4' ],
            'operacion' : [ '975', '*', '4', '=', '3900'],
            'respuesta' : 'Pesan 3900 gramos',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Un comerciante compró 800 kilos de trigo y luego vendió 380 kilos. ¿Cuántos kilos le quedaron?',
            'datos'     : [ '800', '380' ],
            'operacion' : [ '800', '-', '380', '=', '420'],
            'respuesta' : 'Quedaron 420 kilos',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Un camión puede llevar sin romperse 450 kilos. Si ya hemos puesto 167 kilos, ¿cuántos kilos más podemos poner sin que se rompa?',
            'datos'     : [ '450', '167' ],
            'operacion' : [ '450', '-', '167', '=', '283'],
            'respuesta' : 'Puede llevar 283 kilos',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Entre 2 carros de feria pesan 275 kilos. El más grande pesa 155 kilos ¿Cuánto pesa el más pequeño?',
            'datos'     : [ '275', '155' ],
            'operacion' : [ '275', '-', '155', '=', '120'],
            'respuesta' : 'Pesa 120 kilos',
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Un huevo de gallina pesa 65 g. ¿Cuánto pesa media docena de huevos?',
            'datos'     : [ '65', '6' ],
            'operacion' : [ '65', '*', '16', '=', '390'],
            'respuesta' : 'Pesan 390 gramos',
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Un balde de tomates en el mercado mayoreo pesa 20 libras, que empacaré en bolsas de 2 libras. ¿Cuántas bolsas necesito?',
            'datos'     : [ '20', '2' ],
            'operacion' : [ '20', '/', '2', '=', '10'],
            'respuesta' : '10',
            'signo'     : '/'
        },
        {
            'ejercicio' : 'Un balde de tomates en el mercado mayoreo pesa 20 libras, que empacaré en bolsas de 2 libras. ¿Cuántas bolsas necesito?',
            'datos'     : [ '100', '5' ],
            'operacion' : [ '100', '/', '5', '=', '20'],
            'respuesta' : '20',
            'signo'     : '/'
        }
    ];
});

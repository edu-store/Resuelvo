define(function (require) {
    return [
        {
            'ejercicio' : 'Una cartera puede llevar sin romperse 12 kilos. Si ya hemos puesto 7 kilos, ¿cuántos kilos más podemos poner sin que se rompa?',
            'datos' : [ '12', '7' ],
            'operacion' : [ '12', '-', '7', '=', '5' ],
            'repuesta' : '5',
            'signo' : '-'
        },
        {
            'ejercicio' : 'Si 4 naranjas del mismo tamaño pesan 1 kg. ¿Cuánto pesarán 44 naranjas del mismo tamaño?',
            'datos' : [ '44', '4' ],
            'operacion' : [ '44', '&divide;', '4', '=', '11' ],
            'repuesta' : '11',
            'signo' : '&divide;'
        },
        {
            'ejercicio' : 'Juan va a comprar con su padre. Lleva en una mano una bolsa con 5 kg y en la otra mano, una bolsa con 4 kg. Su padre lleva otras dos bolsas con 8 kg y 9 kg. ¿Cuántos kilos llevan entre los dos?',
            'datos' : [ '5', '4', '8', '9' ],
            'operacion' : [ '5', '+', '4', '+', '8', '+', '9', '=', '26' ],
            'repuesta' : '26',
            'signo' : '+'
        },
        {
            'ejercicio' : 'Una furgoneta lleva 5 cajas de manzanas con 20 kg cada una. ¿Cuántos kilos de manzanas lleva?',
            'datos' : [ '5', '20' ],
            'operacion' : [ '5', '*', '20', '=', '100' ],
            'repuesta' : '100',
            'signo' : '*'
        },
        {
            'ejercicio' : 'Antonio pesa 45 kg. Su padre pesa el doble. ¿Cuánto pesa el padre de Antonio?',
            'datos' : [ '45', '2' ],
            'operacion' : [ '45', '*', '2', '=', '90' ],
            'repuesta' : '90',
            'signo' : '*'
        }
    ];
});

define(function (require) {
    return [
        {
            'ejercicio' : 'El día lunes Enrique estudió 1/4 de hora, el martes 3/4 de hora y el miércoles 2/4 horas. ¿Cuántas horas ha estudiado Enrique?',
            'datos'     : ['1/4 hora', '3/4 hora', '2/4 hora'],
            'operacion' : ['1', '4', '+', '3', '4', '+', '2', '4', '=', '6', '4'],
            'respuesta' : 'Ha estudiado 6/4 de hora.',
            'resp_num'  : [
                ['6', '4'],
                ['1.5', '1']
            ],
            'signo'     : '+'
        },
        {
            'ejercicio' : 'En una pintura 3/10 de las figuras son reses y 1/10 de las figuras son peces, ¿Qué parte de la pintura muestra a ambos?',
            'datos'     : ['3/10 reses', '1/10 peces'],
            'operacion' : ['3', '10', '+', '1', '10', '=', '4', '10'],
            'respuesta' : 'Se muestra a ambos en 4/10.',
            'resp_num'  : [
                ['4', '10'],
                ['0.4', '1']
            ],
            'signo'     : '+'
        },
        {
            'ejercicio' : 'Una caja tiene 60 bombones. Eva comió 1/3 y Ana 2/3 ¿Cuánto se comieron entre las dos?',
            'datos'     : ['1/3 bombones', '2/3 bombones'],
            'operacion' : ['1', '3', '+', '2', '3', '=', '3', '3'],
            'respuesta' : 'Comieron 3/3 de bombones.',
            'resp_num'  : [
                ['3', '3'],
                ['1', '1']
            ],
            'signo'     : '+'
        },
        {
            'ejercicio' : 'Don Juan sembró un huerto, en el terreno sembró 1/4 de sandía y 1/4 de melón ¿Cúanto le quedó sin sembrar?',
            'datos'     : ['1/4 sandia', '1/4 melón'],
            'operacion' : ['1', '4', '+', '1', '4', '=', '2', '4'],
            'respuesta' : 'Le quedo 2/4 por sembrar.',
            'resp_num'  : [
                ['2', '4'],
                ['1', '2']
            ],
            'signo'     : '+'
        },
        {
            'ejercicio' : 'Doña María tiene 5/9 de una caja de chocolates y le da a su hija Elizabeth 2/9. ¿Cuánto le queda?',
            'datos'     : ['5/9 caja', '2/9 caja' ],
            'operacion' : ['5', '9', '-', '2', '9', '=', '3', '9'],
            'respuesta' : 'Le queda 3/9 de la caja.',
            'resp_num'  : [
                ['3', '9'],
                ['1', '3']
            ],
            'signo'     : '-'
        },
         {
            'ejercicio' : 'El cabello de Rosa medía 2/3 de un metro, en el salón de belleza le cortaron 1/3 de metro. ¿Qué tan largo es el cabello de Rosa ahora?',
            'datos'     : ['2/3 metro', '1/3 metro'],
            'operacion' : ['2', '3', '-', '1', '3', '=', '1', '3'],
            'respuesta' : 'El cabello de Rosa mide 1/3.',
            'resp_num'  : ['1', '3'],
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Mario posee 6/8 de manzana de tierra, sembró 3/8 de tomates. ¿Cuánto sembró de la manzana?',
            'datos'     : ['6/8 manzana', '3/8 manzana'],
            'operacion' : ['6', '8', '-', '3', '8', '=', '3', '8'],
            'respuesta' : 'Sembró 3/8 de manzana.',
            'resp_num'  : ['3', '8'],
            'signo'     : '-'
        },
        {
            'ejercicio' : 'Andrea es guía turística. Dirige excursiones a las isletas de Granada. Su grupo tiene 12 personas y 2/3 son de Guatemala. ¿Cuántas personas son de Guatemala?',
            'datos'     : ['12 personas', '2/3 personas'],
            'operacion' : ['12', '1', '*', '2', '3', '=', '8', '1', '24'],
            'respuesta' : 'Son 8 guatemaltecos.',
            'resp_num'  : [
                ['8', '1'],
                ['24', '3']
            ],
            'signo'     : '*'
        },
        {
            'ejercicio' : 'Un campesino aró 3/4 de un campo, luego sembró maíz en 1/2 de la parte arada. ¿Qué parte del campo sembró?',
            'datos'     : [ '3/4 campo', '1/2 campo'],
            'operacion' : [ '3', '4', '*', '1', '2', '=', '3', '8'],
            'respuesta' : 'Sembró 3/8 de campo.',
            'resp_num'  : ['3', '8'],
            'signo'     : '*'
        }
    ];
});

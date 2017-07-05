define(function (require) {
    return [
        {//01
            'ejercicio' : 'El día lunes Enrique estudió 1/4 de hora, el martes 3/4 de hora y el miércoles 2/4 horas. ¿Cuántas horas ha estudiado Enrique?',
            'datos'     : [ { 'dato' : 'Lunes 1/4 de hora.' }, { 'dato' : 'Martes 3/4 de hora.' }, { 'dato' : 'Miércoles 2/4 de hora.'} ],
            'operacion' : ['1', '4', '+', '3', '4', '+', '2', '4', '=', '6', '4'],
            'respuesta' : 'Ha estudiado 1.5 horas.',
            'resp_num'  : [ ['6', '4'], ['1.5', '1'] ],
            'signo'     : '+'
        },
        {//02
            'ejercicio' : 'En una pintura 3/10 de las figuras son reses y 1/10 de las figuras son peces, ¿Qué parte de la pintura muestra a ambos?',
            'datos'     : [ { 'dato' : '3/10 son reces.' }, { 'dato' : '1/10 son peces.' } ],
            'operacion' : ['3', '10', '+', '1', '10', '=', '4', '10'],
            'respuesta' : 'Muestra 4/10 de la pintura.',
            'resp_num'  : [ ['4', '10'], ['0.4', '1'] ],
            'signo'     : '+'
        },
        {//03
            'ejercicio' : 'Una caja tiene 60 bombones. Eva comió 1/3 y Ana 1/3 ¿Cuánto se comieron entre las dos?',
            'datos'     : [ { 'dato' : '60 bombones.' }, { 'dato' : 'Eva 1/3 y Ana 1/3.'} ],
            'operacion' : ['1', '3', '+', '1', '3', '=', '2', '3'],
            'respuesta' : 'Se comieron 2/3 entre las dos.',
            'resp_num'  : ['2', '3'],
            'signo'     : '+'
        },
        {//04
            'ejercicio' : 'Don Juan sembró un huerto, en el terreno sembró 1/4 de sandía y 1/4 de melón ¿Cúanto le quedó sin sembrar?',
            'datos'     : [ { 'dato' : '1/4 de sandía.' }, { 'dato' : '1/4 de melón.'} ],
            'operacion' : ['1', '4', '+', '1', '4', '=', '2', '4'],
            'respuesta' : 'Quedó sin sembrar 2/4 del terreno.',
            'resp_num'  : ['2', '4'],
            'signo'     : '+'
        },
        {//05
            'ejercicio' : 'Doña María tiene 5/9 de una caja de chocolates y le da a su hija Elizabeth 2/9. ¿Cuánto le queda?',
            'datos'     : [ { 'dato' : '5/9 de una caja.' }, { 'dato' : '2/9 le da a Elizabeth.'} ],
            'operacion' : ['5', '9', '-', '2', '9', '=', '3', '9'],
            'respuesta' : 'Le queda 3/9 de la caja.',
            'resp_num'  : ['3', '9'],
            'signo'     : '-'
        },
        {//06
            'ejercicio' : 'El cabello de Rosa medía 2/3 de un metro, en el salón de belleza le cortaron 1/3 de metro. ¿Qué tan largo es el cabello de Rosa ahora?',
            'datos'     : [ { 'dato' : '2/3 de un metro.' }, { 'dato' : 'Le cortaron 1/3.' } ],
            'operacion' : ['2', '3', '-', '1', '3', '=', '1', '3'],
            'respuesta' : 'Mide 1/3 de metro de largo.',
            'resp_num'  : ['1', '3'],
            'signo'     : '-'
        },
        {//07
            'ejercicio' : 'Mario posee 6/8 de manzana de tierra, sembró 3/8 de tomates. ¿Cuánto sembró de la manzana?',
            'datos'     : [ { 'dato' : '6/8 de manzana.' }, { 'dato' : 'sembró 3/8.' } ],
            'operacion' : ['6', '8', '-', '3', '8', '=', '3', '8'],
            'respuesta' : 'Sembró 3/8 de la manzana.',
            'resp_num'  : ['3', '8'],
            'signo'     : '-'
        },
        {//08
            'ejercicio' : 'Andrea es guía turística. Dirige excursiones a las isletas de Granada. Su grupo tiene 12 personas y 2/3 son de Guatemala. ¿Cuántas personas son de Guatemala?',
            'datos'     : [ { 'dato' : '12 persomas.' }, { 'dato' : '2/3 son de Guatemala.'} ],
            'operacion' : ['12', '1', '*', '2', '3', '=', '24', '3'],
            'respuesta' : 'Son 8 personas de Guatemala.',
            'resp_num'  : [ ['8', '1'], ['24', '3'] ],
            'signo'     : '*'
        },
        {//09
            'ejercicio' : 'Un campesino aró 3/4 de un campo, luego sembró maíz en 1/2 de la parte arada. ¿Qué parte del campo sembró?',
            'datos'     : [ { 'dato' : 'Aró 3/4 de un campo.' }, { 'dato' : 'Sembró en 1/2 de la parte arada.'} ],
            'operacion' : [ '3', '4', '*', '1', '2', '=', '3', '8'],
            'respuesta' : 'Sembró 3/8 del campo.',
            'resp_num'  : ['3', '8'],
            'signo'     : '*'
        }
    ];
});

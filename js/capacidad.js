define(function (require) {
    return [
        {//01
            'ejercicio' : 'En un recipiente caben 10 litros de agua. ¿Cuántos litros caben en 5 recipientes del mismo tamaño?',
            'datos'     : [ { 'dato' : '10 litros.' }, { 'dato' : '5 recipientes.' } ],
            'operacion' : [ '10', '*', '5', '=', '50' ],
            'respuesta' : 'Caben 50 litros.',
            'resp_num'  : '50',
            'signo'     : '*'
        },
        {//02   
            'ejercicio' : 'Un recipiente tiene una capacidad de 50 litros. Sacamos del recipiente 10 botellas de litro. ¿Cuánto queda en el recipiente?',
            'datos'     : [ { 'dato' : '50 litros.' }, { 'dato' : '10 botellas de litro.' } ],
            'operacion' : [ '50', '-', '10', '=', '40' ],
            'respuesta' : 'Queda 40 litros en el recipiente.',
            'resp_num'  : '40',
            'signo'     : '-'
        },
        {//03
            'ejercicio' : 'Una familia está compuesta por 5 personas. Cada una de ellas bebe un litro de leche diario. ¿Cuántos litros de leche necesitan a la semana?',
            'datos'     : [ { 'dato' : '5 personas.' }, { 'dato' : '7 litros por persona.' } ],
            'operacion' : [ '5', '*', '7', '=', '35' ],
            'respuesta' : 'Necesitan 35 litros de leche.',
            'resp_num'  : '35',
            'signo'     : '*'
        },
        {//04
            'ejercicio' : 'En mi casa hay 4 bidones de aceite. Cada bidón tiene 5 litros. ¿Cuántos litros de aceite hay en total?',
            'datos'     : [ { 'dato' : '4 bidones.' }, { 'dato' : '5 litros por bidón.'} ],
            'operacion' : [ '4', '*', '5', '=', '20' ],
            'respuesta' : 'Hay en total 20 litros de aceite.',
            'resp_num'  : '20',
            'signo'     : '*'
        },
        {//05
            'ejercicio' : 'Una bañera tiene una capacidad de 248 litros. Quieres llenarla con un cubo de 8 litros. ¿Cuántos cubos necesitarás?',
            'datos'     : [ { 'dato' : 'bañera de 248 litros.' }, { 'dato' : 'cubo de 8 litros.'} ],
            'operacion' : [ '248', '/', '8', '=', '31' ],
            'respuesta' : 'Necesitaré 31 cubos.',
            'resp_num'  : '31',
            'signo'     : '/'
        },
        {//06
            'ejercicio' : 'Un tanque tiene una capacidad de 50 litros. ¿Cuántas botellas de 2 litros puedes llenar con lo que cabe en el tanque?',
            'datos'     : [ { 'dato' : 'Tanque de 50 litros.' }, { 'dato' : 'Botellas de 2 litros.' } ],
            'operacion' : [ '50', '/', '2', '=', '25' ],
            'respuesta' : 'Puedo llenar 25 botellas.',
            'resp_num'  : '25',
            'signo'     : '/'
        },
        {//07
            'ejercicio' : 'El depósito de gasolina de un carro tiene una capacidad de 45 litros. Si tiene en este momento 12 litros, ¿cuántos litros necesitamos para llenarlo?',
            'datos'     : [ { 'dato' : '45 litros.' }, { 'dato' : '12 litros.' } ],
            'operacion' : [ '45', '-', '12', '=', '33' ],
            'respuesta' : 'Necesitamos 33 litros.',
            'resp_num'  : '33',
            'signo'     : '-'
        },
        {//08
            'ejercicio' : 'En un almacén hay 25 barriles de vino. Si en cada barril caben 8 litros, ¿cuántos litros de vino hay en el almacén?',
            'datos'     : [ { 'dato' : '25 barriles de vino.' }, { 'dato' : '8 litros.' } ],
            'operacion' : [ '25', '*', '8', '=', '200' ],
            'respuesta' : 'Hay 200 litros de vino.',
            'resp_num'  : '200',
            'signo'     : '*'
        },
        {//09
            'ejercicio' : 'La familia de Jaime está formada por 4 personas. Cada una gasta diariamente 8 litros de agua en su aseo personal. ¿Cuántos litros de agua gasta la familia en un mes de 30 días?',
            'datos'     : [ { 'dato' : '4 personas.' }, { 'dato' : '8 litros de agua.' }, { 'dato' : '30 días.' } ],
            'operacion' : [ '30', '*', '4', '*','8','=', '960' ],
            'respuesta' : 'Gasta 960 litros de agua.',
            'resp_num'  : '960',
            'signo'     : '*'
        },
        {//10
            'ejercicio' : '¿Cuántos cuartos de litro necesitamos para llenar un depósito de 6 litros?',
            'datos'     : [ { 'dato' : '6 litros.' }, { 'dato' : '0.25 litros.' } ],
            'operacion' : [ '6', '/', '0.25','=', '24' ],
            'respuesta' : 'Necesitamos 24 cuartos de litro.',
            'resp_num'  : '24',
            'signo'     : '/'
        },
        {//11
            'ejercicio' : 'Si en un balde caben 12 litros de leche ¿Cuántos baldes necesito para almacenar 144 litros?',
            'datos'     : [ { 'dato' : '144 litros.' }, { 'dato' : '12 litros de leche.'} ],
            'operacion' : [ '144', '/', '12','=', '12' ],
            'respuesta' : 'Necesito 12 baldes.',
            'resp_num'  : '12',
            'signo'     : '/'
        },
        {//12
            'ejercicio' : 'En un barril caben 200 litros de agua ¿Cuántos barriles se necesitan para almacenar 1,600 litros?',
            'datos'     : [ { 'dato' : '1,600 litros.' }, { 'dato' : '200 litros.' } ],
            'operacion' : [ '1600', '/', '200','=', '8' ],
            'respuesta' : 'Se necesitan 8 barriles.',
            'resp_num'  : '8',
            'signo'     : '/'
        },
        {//13
            'ejercicio' : 'Un pueblo tiene instalado un depósito de 5,000 galones para almacenar agua en época de sequía, si se consumen 100 galones por día ¿En cuántos días se consume todo el depósito?',
            'datos'     : [ { 'dato' : '5,000 galones.' }, { 'dato' : '100 galones por día.'} ],
            'operacion' : [ '5,000', '/', '100','=', '50' ],
            'respuesta' : 'Se consume en 50 días.',
            'resp_num'  : '50',
            'signo'     : '/'
        },
        {//14
            'ejercicio' : 'Juan tiene 12 vasos de refresco de medio litro cada uno ¿Cuántos litros tiene en total?',
            'datos'     : [ { 'dato' : '12 vasos.' }, { 'dato' : '0.5 litro.'} ],
            'operacion' : [ '0.5', '*', '12','=', '6' ],
            'respuesta' : 'Tiene 6 litros en total.',
            'resp_num'  : '6',
            'signo'     : '*'
        },
        {//15
            'ejercicio' : 'Don Ramón requiere darle agua a sus 14 vacas, cada vaca consume 5 galones de agua ¿Cuántos galones necesita?',
            'datos'     : [ { 'dato' : '14 vacas.'}, { 'dato' : '5 galones.'} ],
            'operacion' : [ '14', '*', '5','=', '70' ],
            'respuesta' : 'Necesita 70 galones.',
            'resp_num'  : '70',
            'signo'     : '*'
        }
    ];
});

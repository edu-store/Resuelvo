define(function (require) {
    return [
        {
            'content'  : {
                'topics' : [
                    { 'nombre' : 'Numeros Naturales', 'id' : 'btn_nn', 'img' : 'img/btn.png' },
                    { 'nombre' : 'Numeros Decimales', 'id' : 'btn_nd', 'img' : 'img/btn.png' },
                    { 'nombre' : 'Numeros Fraccionarios', 'id' : 'btn_nf', 'img' : 'img/btn.png' },
                    { 'nombre' : 'Medidas de Logitud', 'id' : 'btn_ml', 'img' : 'img/btn.png' },
                    { 'nombre' : 'Medidas de Peso', 'id' : 'btn_mp', 'img' : 'img/btn.png' },
                    { 'nombre' : 'Medidas de Capacidad', 'id' : 'btn_mc', 'img' : 'img/btn.png' }
                ],
                'concepts' : [
                    { 'tema' : 'Numeros Naturales', 'concepto' : 'Son aquellos símbolos que nos permiten representar la cantidad de elementos que tiene un conjunto.', 'ejemplo' : '1, 2, 3, ..., 9', 'id' : 'btn_nn' },
                    { 'tema' : 'Numeros Decimales', 'concepto' : 'Un número decimal es aquel que se puede expresar mediante una fracción decimal. Consta de dos partes: entera y decimal.', 'ejemplo' : '1.1, 2.5, 4.8, ..., 9.9', 'id' : 'btn_nd' },
                    { 'tema' : 'Numeros Fraccionarios', 'concepto' : 'En un número fraccionario o fracción, el denominador indica las partes en que se divide la unidad y el numerador indica las partes que se toman.', 'ejemplo' : '1/10, 1/2, 2/1, ..., 9/90', 'id' : 'btn_nf' },
                    { 'tema' : 'Medidas de Logitud', 'concepto' : 'La longitud determina la distancia que hay entre dos puntos, o dicho de otra manera, longitud es la cantidad de espacio que hay entre dos puntos.', 'ejemplo' : '1m, 1cm, 1km, ..., 1M', 'id' : 'btn_ml' },
                    { 'tema' : 'Medidas de Peso', 'concepto' : 'El peso equivale a la fuerza que ejerce un cuerpo sobre un punto de apoyo, originada por la acción del campo gravitatorio local sobre la masa del cuerpo.', 'ejemplo' : '1lb, 1gr, 1kgr, ..., 1T', 'id' : 'btn_mp' },
                    { 'tema' : 'Medidas de Capacidad', 'concepto' : 'Para medir el volumen de un objeto se utilizan las medidas de capacidad. La medida más utilizada es el litro.', 'ejemplo' : '1lt, 1oz, 1c, ..., 1cc', 'id' : 'btn_mc' }
                ]
            }
        },
        {'template' : '<div id="page1"> {{#topics}}<button type="button" id="{{id}}" class="pantalla_1" data="2">{{nombre}}</button> <br/> {{/topics}} </div>'},
        {'template' : '<div id="page2"> <h1>{{tema}}</h1> <p>{{concepto}}</p> <p>{{ejemplo}}</p> <button type="button" id="{{id}}" class="pantalla_2" data="3">SIGUIENTE</button> </div>'},
        {'template' : '<div id="page3"> <p>{{ejercicio}}</p> <label>Datos</label> {{#datos}}<input/>{{/datos}} <label>Operación</label> {{#operacion}}<input/>{{/operacion}} <label>Respuesta</label> <input/> <button type="button" id="btn_ini" data="1">INICIO</button> <button type="button" data="content" id="btn_nv">NUEVO</button> </div>'}
    ];
});

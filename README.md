# Resuelvo

### Una actividad en SugarWeb desde cero.

## Crear una plantilla para la actividad

Copia o clona el repositorio de [Sugarizer](https://github.com/llaske/Sugarizer), 

```bashscript
$ git clone https://github.com/llaske/Sugarizer
```

y copia el contenido de la carpeta `activities/ActivityTemplate` a la carpeta de tu proyecto.

## Personalizar

Elija un nombre para su actividad. Escríbalo en el apartado `name` en el archivo del identificacion de lotes en `activity/activity.info` del directorio del proyecto.

```json
[Activity]
name = _My Activity_
activity_version = 1
bundle_id = org.sugarlabs._MyActivity_
exec = sugar-activity-web
icon = activity-icon
```

Y también en la etiqueta de `<title>` del archivo `index.html` en la carpeta raiz del proyecto.

```html
<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8" />
        <title>_My Activity_</title>
```

Ahora usted debe tener una actividad básica en funcionamiento!

## Estructura de archivos

En su nueva actividad, encontrará la siguiente estructura de archivos:

	my-activity/
	|-- activity/
	|   |-- activity.info
	|   `-- activity-icon.svg
	|-- index.html
	|-- css/
	|   `-- activity.css
	|-- js/
	|   |-- activity.js
	|   `-- loader.js
	|-- lib/
	|-- package.json
	`-- setup.py

## [MustacheJS](https://mustache.github.io/), manejador de plantillas

La mayor parte de trabajo se realiza pasando datos desde javascript a html, llegado a este punto en la mayoria de los casos se requerira usar un sistema de plantillas aligerar la carga.

Lo primero es descargar [mustache.js](https://raw.githubusercontent.com/janl/mustache.js/master/mustache.min.js) y colocarlo en la carpeta `lib` de nuestro proyecto.

Luego solo hace falta incluirlo en las definiciones del nuestro archivo `js/activity.js` y empezar a usarlo.

```jaascript
var Mustache = require("mustache");
```

## Listo para liberar

Antes de su primer lanzamiento, usted debe:

	* Haga que su actividad sea única en la interfaz Sugar cambiando el icono de `actividad activity/activity-icon.svg`. O si no tiene habilidades gráficas, puede preguntar en la comunidad si alguien puede hacerlo.

Puede publicar directamente el paquete `XO`. Por lo tanto, sólo comprima en formato `zip` el contenido de su directorio de proyecto y cambie el nombre de la extencion de `.zip` a `.xo`.
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

Y también en la etiqueta de `title` del archivo `index.html` en la carpeta raiz del proyecto.

```html
<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8" />
        <title>_My Activity_</title>
```


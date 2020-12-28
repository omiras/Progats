# Los gatitos ingresados

Progats ha actualizado sus servicios, y ahora tiene información en tiempo real de los gatos ingresados en la clinica. Dichos datos son generados cada cierto tiempo y guardados en un fichero en **datos-ingresos/gatos.json**

Queremos mostrar la lista de gastos ingresados en la tabla al final de la página.

## Objetivos a conseguir

1. Inicia el **live server**. Comprueba que sabes a qué rutas debes acceder, usando la barra del navegador, para recuperar los datos del fichero
2. Crea una llamada XMLHTTPRequest que recupere los datos del fichero y simplemente los muestre por consola. ¡Fíjate que es un fichero en formato JSON!
3. Ahora, tienes que recorrer los datos "perseados" y crear tantas filas de la tabla como gatos ingresados has recuperado. Fíjate que [debes crear](https://www.w3schools.com/jsref/met_document_createelement.asp#:~:text=The%20createElement()%20method%20creates,insert%20it%20to%20the%20document.) elementos **tr**; uno para cada gato ingresado. Y también debes crear elementos **td**; uno para cada información del gato que debas mostrar. De nomento, muestra la fecha de ingreso tal cual.
4. Busca una manera de transformar las fechas de ingreso del formato __"2020-12-19T22:18:26.625Z"__ a algo más entendible por nosotros
5. Fíjate que algunos gatos tienen fecha de alta. Estos gatos, no deberían ser cargados en la tabla!

## BONUS

1. Cambia algun dato del fichero JSON, como el nombre de un gato, y haz que siga funcionando tu programa. Es decir, al hacer clic en el botón, debe eliminarse por completo la tabla, y volver a generarla con los datos actualizados
2. Elimina el botón de actualizar lista de gatos, y haz que la lista de gatos se actualice cada **10 segundos**
3. Crea un [slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp) encima o debajo de la tabla, de manera que pueda el usuario modificar los segundos cada cuanto se tiene que actualizar la lista de gatos (cámbia los datos para ver si funciona!). Mínimo: 10 segundos, máximo 60 segundos.
4. Crea un checkbox, que ponga el texto "Mostrar historial completo de gatos ingresados". Si el usuario chequea dicho checkbox, siempre se mostrarán todos los gatos del fichero **gatos.json**; independientemente de si tienen fecha de alta o no.
5. El equipo de base de datos la ha liado y algunos gatos tienen la fecha de alta es anterior a la fecha de ingreso. ¡Eso esta mal! Si detectas un caso así, haz un __console.log__ para informar de ello y poderlo verificar más tarde.
6. Haz que la petición al fichero **gatos.json**, por ejemplo, cambiando el nombre del fichero. Modifica tú código para que la aplicación contemple el caso que al hacer el GET no encuentre el recurso y muestre algun tipo de información en el navegador y por consola.

## SOLUCIONES

[Solución Oscar](https://github.com/omiras/Progats/blob/master/solucion-oscar.zip)
[Solución Didac con Bonus](https://github.com/didac3141592/ajax-basic-exercises/tree/master/updating-table-data)
[Solución Alba contactenando texto HTML para crear los elementos](https://github.com/aguzsol/Progats)

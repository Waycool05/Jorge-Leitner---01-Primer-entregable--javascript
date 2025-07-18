
Gracias por visitar mi proyecto.
primero que nada quiero ser agradecido, las clases son muy buenas y me siento muy a gusto.

paso a explicar el código que hice, me costó bastante, sobre todo por los errores de typeo, y variables que coloqué fuera de su lugar y algun que otro ;

primero que nada cree el objeto 'palabras' que fue como mi base de datos para elegir la categoria y dificultad', utilicé 20 de cada categoría. la dificultad se la dí según mi parecer
animales es mas facil que frutas y países es mas dificil que frutas.

luego hice la función menuDificultad: este lo hice repasando como usar el while (bandera) Switch - case. - también agregue "(elegircategoria===null)", 
para el boton cancelar del "prompt". alert('Juego cancelado por el usuario.')

también definí nivel y intentos fuera del while, en mis primeras pruebas lo habia hecho dentro y nada prueba y error.

cuando termina el while, invierto bandera para que me devuelva los valores de nivel y intentos.

la función palabraAleatoria() no es de mi invención, estuve buscando información de como realizar una elección random de una lista. y buen aprendí 2 cosas:
Math.floor() redondea hacia abajo el entero más cercano y Math.random() genera un número decimal que puede ser 0 pero nunca 1, osea si da 0.233 lo multiplico por 20 y da 4.66
y Math.floor()lo redondea a 4, así puedo recorrer de 0 a 19 el array. (porque lo multiplico x lista.length) variable antes definida por palabra[nivel], y me devuele la palabra aleatoria.

la función jugarAhorcado(), dentro de todo es la más elaborada, pero creo que también la que mejor pude entender:

trae los elementos palabra a adivinar, intentos y nivel,
creo un array para guardar las letras adivinadas y comparar y también mostrar si ya se eligió,
creo una variable representando la palabra pero reemplazandola por "_"
creo un while que dependa de la cantidad de intentos y mientras la palabra oculta tenga "_" letras sin adivinar,

en el bucle muestro la categoria, la palabra oculta con unos espacios, el array de letras adivinadas, los intentos, y pide la letra finalmente,
uso toLowerCase, tanto en palabra, como en letra así puedo tener una comparación legítima,
creo la variable con abecedario, condiciono que la longitud de la letra sea 1 o esté fuera de la variable abecedario como inválida, 
condiciono si la letra concuerda con con la del array ya fue ingresada,
agrego la letra al array de adivinadas,
creo un bucle que recorre la palabra y si la encuentra muestra la reemplaza la letra x "_".
si no la encuentra intentos se reduce.
por último si la palabra oculta no tiene más "_", mensaje de palabra adivinada,
cuando el bucle se queda sin intentos, mensaje de perdiste, y muestra que palabra era.

y en el main, 

bueno un bucle que ejecuta, primero trae los valores del menu dificultad y luego define la palabra aleatoria para que finalmente la funcion jugar tenga los imputs,

y bueno eso es todo. Gracias





function menuDificultad() {
    let bandera=true;
    
    let nivel;
    let intentos;

    while (bandera) {
        let elegircategoria=prompt(
            'Por favor Elige tu dificultad: \n'+
            '1 - Facil (7 intentos)\n' +
            '2 - Medio (6 Intentos)\n' +
            '3 - Difícil (5 Intentos)'
        ); 
        if (elegircategoria===null) {
            alert('Juego cancelado por el usuario.');
            return;
        } 
        elegircategoria=Number(elegircategoria);
        
        
        
            
        switch(elegircategoria) {
            case 1: 
                nivel = 'animales';
                intentos = 7;
                alert('Elegiste Facil (7 intentos)');
                bandera = false;
                break;
            case 2:
                nivel = 'frutas';
                intentos = 6;
                alert('Elegiste Medio (6 Intentos)');
                bandera = false;
                break;
            case 3: 
                nivel = 'paises';
                intentos = 5;
                alert('Elegiste Difícil (5 Intentos)');
                bandera=false;
                break;
            default: 
                alert('Opción Inválida, Elige 1, 2 o 3.')
                break;
            }
    } 
    if (!bandera) {
        return {nivel, intentos};
    }
}
function palabraAleatoria(nivel) {
    const lista = palabras[nivel];
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}


function jugarAhorcado(palabra, intentos,nivel) {
    palabra=palabra.toLowerCase();
    
    let letrasAdivinadas = [];
    let palabraOculta = "_".repeat(palabra.length).split("");

    while (intentos > 0 && palabraOculta.includes("_")) {
        let letra = prompt(
            `Categoría Elegida: ${nivel}\n` +
            `Palabra: ${palabraOculta.join(" ")}\n` +
            `Letras adivinadas: ${letrasAdivinadas.join(", ")}\n` +
            `Te quedan ${intentos} intentos.\n` +
            `Ingresa una letra:`
        );

        if (letra === null) {
            alert("Juego cancelado por el usuario.");
            return;
        }

        letra = letra.toLowerCase();
        const letraValida = 'abcdefghijklmnopqrstuvwxyz'; 
        if (letra.length !== 1 || !letraValida.includes(letra)) {
            alert("Ingresa solo una letra válida.");
            continue;
        }

        if (letrasAdivinadas.includes(letra)) {
            alert("Ya has ingresado esa letra, intenta con otra.");
            continue;
        }

        letrasAdivinadas.push(letra);

        if (palabra.includes(letra)) {
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] === letra) {
                    palabraOculta[i] = letra;
                }
            }
            alert(`¡Correcto! La letra "${letra}" está en la palabra.`);
        } else {
            intentos--;
            alert(`Incorrecto. La letra "${letra}" no está en la palabra.`);
        }
    }

    if (!palabraOculta.includes("_")) {
        alert(`¡Felicidades! Adivinaste la palabra: ${palabra}`);
    } else {
        alert(`Perdiste. La palabra era: ${palabra}`);
    }
}




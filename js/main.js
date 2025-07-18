
// menuDificultad()

if (confirm("¿Quieres jugar al Ahorcado?")) {
    const seleccion = menuDificultad();
    if (seleccion) {
        const { nivel, intentos } = seleccion;
        const palabra = palabraAleatoria(seleccion.nivel);
        jugarAhorcado(palabra, seleccion.intentos, seleccion.nivel);
    }
} else {
    alert("¡Hasta la próxima!");
}
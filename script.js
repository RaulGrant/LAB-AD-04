/**
 * Tarea 2: Imprime un mensaje secreto en la consola.
 * Esta función se llama al hacer clic en "BURGER TOWN!".
 */
function logSecretMessage() {
    console.log("¡Alguien ha hecho clic en BURGER TOWN!");
}

/**
 * Tarea 4: Cambia el color del titular de la imagen a rojo.
 * Esta función se llama al hacer clic en "¡¡¡ARROZ!!!".
 */
function changeColor() {
    // Obtenemos el elemento del titular por su ID
    const headline = document.getElementById('image-headline');
    
    // Cambiamos su color a rojo
    headline.style.color = '#d9534f'; // Usamos el mismo rojo del botón
}
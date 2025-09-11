/*
Archivo: script.js
Este archivo contiene la lógica para cambiar el color de fondo
cuando el usuario hace clic en el botón.
*/

// Esperamos a que la página cargue antes de ejecutar JS
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleccionamos el botón y el texto donde mostraremos el color actual
    const boton = document.getElementById("btnColor");
    const textoColor = document.getElementById("colorActual");

    // Función que genera un color aleatorio en formato hexadecimal (#RRGGBB)
    function generarColorAleatorio() {
        // Math.random() genera un número aleatorio entre 0 y 1
        // Lo multiplicamos por 16777215 (que es el número máximo en hex para colores)
        let numeroAleatorio = Math.floor(Math.random() * 16777215);
        // Lo convertimos a string hexadecimal y le añadimos el prefijo #
        let colorHex = "#" + numeroAleatorio.toString(16).padStart(6, "0");
        return colorHex;
    }

    // Agregamos el evento al botón
    boton.addEventListener("click", function () {
        // Generamos un color nuevo
        let nuevoColor = generarColorAleatorio();

        // Cambiamos el color de fondo de la página
        document.body.style.backgroundColor = nuevoColor;

        // Actualizamos el texto con el color actual
        textoColor.textContent = "Color actual: " + nuevoColor;
    });

});

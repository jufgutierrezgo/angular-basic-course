/*
Archivo: script.js
Este archivo añade interactividad a la página web.
JavaScript permite que el contenido reaccione a eventos como clics, teclas presionadas, o datos recibidos de un servidor.
*/

/*
document.addEventListener("DOMContentLoaded", ...)
-------------------------------------------------
Este comando espera a que todo el documento HTML se haya cargado por completo.
Así evitamos errores cuando intentamos acceder a elementos que todavía no existen.
*/
document.addEventListener("DOMContentLoaded", function () {
    
    /*
    Seleccionamos el botón por su "id".
    - getElementById("btnSaludo") busca en el HTML el elemento con id="btnSaludo".
    - Lo guardamos en una constante llamada "boton" para poder manipularlo después.
    */
    const boton = document.getElementById("btnSaludo");

    /*
    Ahora agregamos un "escuchador de eventos" (event listener).
    - addEventListener("click", ...) significa: "cuando el usuario haga clic en este botón, ejecuta la función".
    */
    boton.addEventListener("click", function () {
        /*
        Dentro de esta función definimos lo que ocurrirá cuando se haga clic.
        En este caso, mostramos un mensaje emergente en pantalla usando alert().
        */
        alert("¡Hola! Has hecho clic en el botón 🚀");
    });

});

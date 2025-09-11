# Fundamentos de HTML, CSS y JavaScript

Este documento presenta los conceptos básicos de **HTML**, **CSS** y **JavaScript**.  
Está pensado como material introductorio para el curso *Angular Basic Course*.  

---

## HTML (HyperText Markup Language)

HTML es el lenguaje que define la **estructura** de una página web.  
Se compone de **etiquetas** que indican cómo organizar y mostrar el contenido.

### Etiquetas básicas de HTML y su significado

- `<html>` → Indica el inicio de un documento HTML.  
- `<head>` → Contiene información del documento (metadatos, enlaces a CSS, título de la página).  
- `<body>` → Contiene todo el contenido visible de la página.  

### Estructura y contenido

- `<h1>` → Título principal (heading de nivel 1).  
- `<h2>`, `<h3>` ... `<h6>` → Subtítulos de menor nivel.  
- `<p>` → Párrafo de texto.  
- `<a>` → Enlace a otra página o recurso.  
- `<img>` → Imagen en la página.  
- `<ul>` → Lista no ordenada (viñetas).  
- `<ol>` → Lista ordenada (numerada).  
- `<li>` → Elemento dentro de una lista.  

### Formularios

- `<input>` → Campo de entrada (texto, checkbox, radio, etc.).  
- `<button>` → Botón clicable.  
- `<label>` → Etiqueta descriptiva para un campo de formulario.  
- `<form>` → Agrupa y organiza los campos de un formulario.  

---

## CSS (Cascading Style Sheets)

CSS define la **apariencia visual** de los elementos HTML.

### Selectores básicos

- `p { ... }` → Selecciona todos los párrafos.  
- `.clase { ... }` → Selecciona todos los elementos con esa clase.  
- `#id { ... }` → Selecciona el elemento con ese id.  

### Propiedades comunes

- `color` → Color del texto.  
- `background-color` → Color de fondo.  
- `padding` → Espacio interno dentro de un elemento.  
- `margin` → Espacio externo alrededor de un elemento.  
- `font-size` → Tamaño de la fuente del texto.  
- `border` → Bordes de un elemento.  

---

## JavaScript (JS)

JavaScript añade **interactividad y dinamismo** a la página.

### Conceptos básicos

- **Variables**: Guardan información para reutilizar.  
  ```js
  let nombre = "Juan";
  ```
- **Funciones**: Agrupan código para ejecutarlo fácilmente.  
  ```js
  function saludar() {
      alert("¡Hola!");
  }
  ```
- **Eventos**: Permiten reaccionar a acciones del usuario (clics, teclas, etc.).  
  ```js
  document.getElementById("boton").addEventListener("click", saludar);
  ```

---

## Resumen

- **HTML** define la estructura y contenido.  
- **CSS** define el estilo y presentación.  
- **JavaScript** añade interactividad.  

Estos tres lenguajes son la base del desarrollo web moderno 🚀

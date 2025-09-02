# Libreta de Contactos — Desafíos 01 y 02

Este README describe dos desafíos iniciales para el mini‑proyecto **Libreta de contactos** (HTML + CSS + JS, sin backend). El objetivo es que el/la estudiante diagnostique problemas comunes y aplique buenas prácticas de validación en formularios.

---

## 🧩 Contexto
La app muestra un formulario para añadir contactos (nombre, email, teléfono) y una lista que se actualiza en el navegador. No hay base de datos: los datos viven en memoria (y, opcionalmente, se pueden persistir con `localStorage` más adelante).

Estructura sugerida:
```
contact-book/
├─ index.html
├─ styles.css
└─ app.js
```

Cómo ejecutar: abre `index.html` directamente en tu navegador (doble clic o `Open With Live Server` en VS Code).

---

## ✅ Desafío 01 — Corregir el nombre/ruta del archivo JS
**Problema:** la aplicación no agrega contactos porque el archivo JavaScript **no se está cargando**.  
**Causa típica:** el nombre o la ruta en el `<script src="...">` no coincide con el archivo real (`app.js`).

**Tu misión:**
1. Abre `index.html` y verifica la línea del script:
   ```html
   <script src="app.js"></script>
   ```
2. Asegúrate de que el archivo **exista** y el nombre **coincida exactamente** (incluyendo mayúsculas/minúsculas y carpeta, si aplica).
3. Abre la consola del navegador (F12) y comprueba que **no** aparezcan errores como *Failed to load resource*.

**Criterios de aceptación:**
- La consola **no** muestra errores de carga del script.
- Al enviar el formulario con datos válidos, el contacto aparece en la lista.

**Tips (opcional):**
- Agrega `console.log("app.js cargado");` al inicio de `app.js` para confirmar su carga.
- Asegúrate de que el `<script>` esté al **final** del `<body>` o usa `defer` si lo pones en el `<head>`.

---

## ✅ Desafío 02 — Implementar validación del formato de email
**Problema:** actualmente se permite cualquier texto en el campo email.  
**Objetivo:** implementar una validación que solo acepte emails con formato razonable.

**Tu misión:**
1. Implementa la función `validateEmail(email)` en `app.js` (ver bloque TODO más abajo).
2. Úsala en el `submit` del formulario para **bloquear** el alta si el email no es válido.
3. Muestra un mensaje de error amigable y no borres el formulario si el email es inválido.

**Criterios de aceptación:**
- Emails como `ana@example.com` o `user.name+tag@sub.domain.co` **se aceptan**.
- Entradas como `user@`, `@domain.com`, `user@domain`, `user domain.com`, `user@domain..com` **se rechazan**.
- El mensaje de error es claro (por ejemplo: “El email no parece válido.”).

**Pistas (no obligatorias):**
- Puedes empezar con una validación mínima, p. ej. revisar que existan partes antes y después de `@` y al menos un punto en el dominio.
- Si usas expresión regular, empieza simple (no intentes RFC completo al inicio).

---

## 📝 Bloques TODO para implementar en `app.js`

Inserta/ubica estos bloques en tu archivo `app.js`:

```js
// === TODO[Desafío 02] — Implementa la validación de email ===
/**
 * Debe devolver true si `email` tiene un formato válido; false en caso contrario.
 * Requisitos mínimos sugeridos:
 *  - Un texto antes de '@'
 *  - Un dominio con al menos un punto (ej: dominio.com)
 *  - No permitir espacios
 *  - Evitar '..' en el dominio
 */
function validateEmail(email) {
  // TODO: implementar validación real del formato de email
  // Sugerencia inicial (mejora libremente):
  // - Usa una expresión regular sencilla o divide por '@' y valida partes.
  return false; // ← cámbialo por la condición real
}

// === Uso dentro del submit del formulario ===
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const phone = inputPhone.value.trim();

  // Validaciones mínimas
  if (!name || !email || !phone) {
    showMessage("Por favor, completa todos los campos.", "error");
    return;
  }

  // TODO[Desafío 02]: reemplaza esta línea por tu validación real
  if (!validateEmail(email)) {
    showMessage("El email no parece válido.", "error");
    return;
  }

  // Si todo está OK, agregar el contacto
  addContact({ name, email, phone });
  showMessage("Contacto añadido correctamente.");
  form.reset();
  inputName.focus();
});
```

> **Nota:** Si tu navegador no soporta `replaceAll`, usa expresiones regulares con `replace(/.../g, ...)` en utilidades como `escapeHtml`.

---

## 🔍 Pruebas rápidas sugeridas

Prueba con estos valores para verificar tu validación:

**Válidos:**
- `ana@example.com`
- `juan.perez@empresa.co`
- `user.name+tag@sub.domain.org`

**Inválidos:**
- `user@`
- `@domain.com`
- `user@domain`
- `user domain.com`
- `user@domain..com`

---

## ✅ Entregables
- `index.html` con el `<script src="app.js">` correcto.
- `app.js` con la función `validateEmail(email)` implementada y utilizada en el submit.
- Captura de pantalla de la consola sin errores al cargar y añadir un contacto válido.

¡Listo! Con estos dos desafíos, practicas diagnóstico de problemas reales y validación de formularios en el front. ¡A por ello! 🚀

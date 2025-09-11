/*
Archivo: app.js
Datos en memoria (array). Se renderizan en el DOM. No hay backend.
Incluye múltiples TODOs para que el estudiante practique.
*/

document.addEventListener("DOMContentLoaded", () => {
    // Estado en memoria (simulación de "BD")
    // Sugerimos un id autoincremental para simplificar
    let contacts = [];
    let nextId = 1;
  
    // SELECTORES
    const form = document.getElementById("contactForm");
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputPhone = document.getElementById("phone");
    const formMsg = document.getElementById("formMsg");
  
    const listEl = document.getElementById("contactList");
    const emptyEl = document.getElementById("emptyState");
    const searchEl = document.getElementById("search");
    const sortEl = document.getElementById("sortBy");
  
    // --------- RENDER ----------
  
    function renderList(items) {
      listEl.innerHTML = "";
  
      if (!items.length) {
        emptyEl.style.display = "block";
        return;
      }
      emptyEl.style.display = "none";
  
      items.forEach(contact => {
        const li = document.createElement("li");
        li.className = "contact";
        li.dataset.id = contact.id;
  
        li.innerHTML = `
          <div>
            <div class="contact-header">
              <span class="contact-name">${escapeHtml(contact.name)}</span>
            </div>
            <div class="contact-meta">
              <span>${escapeHtml(contact.email)}</span>
              <span>${escapeHtml(contact.phone)}</span>
            </div>
          </div>
          <div class="contact-actions">
            <button class="btn-ghost" data-action="edit">Editar</button>
            <button class="btn-danger" data-action="delete">Eliminar</button>
          </div>
        `;
  
        listEl.appendChild(li);
      });
    }
  
    // --------- UTIL ----------
  
    function showMessage(text, type = "info") {
      formMsg.textContent = text;
      formMsg.style.color = type === "error" ? "#b91c1c" : "#111827";
    }
  
    function clearForm() {
      form.reset();
      inputName.focus();
    }
  
    function escapeHtml(str) {
      return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    }
  
    // --------- CRUD BÁSICO ----------
  
    function addContact({ name, email, phone }) {
      // TODO-VALIDACION: comprobar duplicados por email o teléfono, validar longitudes, etc.
      const newContact = {
        id: nextId++,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        createdAt: Date.now()
      };
      contacts.push(newContact);
      rerender();
      return newContact;
    }
  
    function deleteContact(id) {
      contacts = contacts.filter(c => c.id !== id);
      rerender();
    }
  
    function updateContact(id, data) {
      const idx = contacts.findIndex(c => c.id === id);
      if (idx === -1) return;
      contacts[idx] = { ...contacts[idx], ...data };
      rerender();
    }
  
    // --------- BUSCAR + ORDENAR ----------
  
    function getFilteredAndSorted() {
      let result = [...contacts];
  
      // TODO-BUSQUEDA: filtrar por nombre, email o teléfono
      const q = (searchEl.value || "").toLowerCase().trim();
      if (q) {
        result = result.filter(c =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.phone.toLowerCase().includes(q)
        );
      }
  
      
      const [by, dir] = (sortEl.value || "createdAt-desc").split("-");
      result.sort((a, b) => {
        if (by === "createdAt") {
          return dir === "asc" ? a.createdAt - b.createdAt : b.createdAt - a.createdAt;
        }
        if (by === "name") {
          return dir === "asc"
            ? a.name.localeCompare(b.name, "es", { sensitivity: "base" })
            : b.name.localeCompare(a.name, "es", { sensitivity: "base" });
        }
        return 0;
      });
  
      return result;
    }
  
    function rerender() {

      renderList(getFilteredAndSorted());
    }
  
    // --------- EVENTOS FORM ----------
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = inputName.value;
      const email = inputEmail.value;
      const phone = inputPhone.value;
        
    // TODO: Implementar una validación para impedir guardar contactos con información incompleta así como 
    //   verificar el formato del correo electrónico
    
      addContact({ name, email, phone });
      showMessage("Contacto añadido correctamente.");
      clearForm();
    });
  
    // --------- EVENTOS LISTA (delegación) ----------
  
    listEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
  
      const li = e.target.closest(".contact");
      const id = Number(li.dataset.id);
      const action = btn.dataset.action;
  
      if (action === "delete") {
        deleteContact(id);
      }
  
      if (action === "edit") {
        enterEditMode(li, id);
      }
    });
  
    // --------- EDICIÓN INLINE ----------
  
    function enterEditMode(li, id) {
      const contact = contacts.find(c => c.id === id);
      if (!contact) return;
  
      // Reemplazamos el contenido por inputs
      li.innerHTML = `
        <div class="contact-edit">
          <input type="text" id="editName" value="${escapeHtml(contact.name)}" />
          <input type="email" id="editEmail" value="${escapeHtml(contact.email)}" />
          <input type="tel" id="editPhone" value="${escapeHtml(contact.phone)}" />
          <div class="contact-actions">
            <button class="btn-ghost" data-action="save">Guardar</button>
            <button class="btn-danger" data-action="cancel">Cancelar</button>
          </div>
        </div>
      `;
  
      li.querySelector('[data-action="save"]').addEventListener("click", () => {
        const name = li.querySelector("#editName").value.trim();
        const email = li.querySelector("#editEmail").value.trim();
        const phone = li.querySelector("#editPhone").value.trim();
  
        // TODO-VALIDACION: validar campos al editar (formato email/teléfono)
        if (!name || !email || !phone) {
          showMessage("Completa todos los campos para guardar.", "error");
          return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
          showMessage("El email no parece válido.", "error");
          return;
        }
  
        updateContact(id, { name, email, phone });
        showMessage("Contacto actualizado.");
      });
  
      li.querySelector('[data-action="cancel"]').addEventListener("click", () => {
        rerender();
      });
    }
  
    // --------- BUSQUEDA / ORDEN: listeners ----------
  
    searchEl.addEventListener("input", rerender);
    sortEl.addEventListener("change", rerender);

    // --------- SEED INICIAL (opcional para pruebas) ----------
    contacts = [
      { id: nextId++, name: "Ana Pérez", email: "ana@example.com", phone: "+49 111 222 333", createdAt: Date.now() - 50000 },
      { id: nextId++, name: "Bruno Díaz", email: "bruno@example.com", phone: "+49 444 555 666", createdAt: Date.now() - 30000 },
      { id: nextId++, name: "Carla López", email: "carla@example.com", phone: "+49 777 888 999", createdAt: Date.now() - 10000 },
    ];
  
    rerender();
  });
  
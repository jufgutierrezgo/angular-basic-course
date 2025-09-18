import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  // standalone: true,
  template: `
    <h1>Ejemplo simple de Deferrable Views</h1>

    @defer (on timer(3000)) {
      <p>✅ Este mensaje apareció después de 3 segundos.</p>
    } @placeholder {
      <p>⏳ Esperando 3 segundos…</p>
    } @loading {
      <p>📦 Cargando contenido diferido…</p>
    } @error {
      <p>❌ Ocurrió un error al cargar.</p>
    }
  `,
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch(err => console.error(err));

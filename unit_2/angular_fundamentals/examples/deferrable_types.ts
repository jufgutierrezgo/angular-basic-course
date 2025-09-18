import { Component, signal } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
 
@Component({

  selector: 'app-root',

  standalone: true,

  template: `
<h1>Ejemplos de Deferrable Views</h1>
 
    <!-- Hover -->
<div #hoverArea style="border:1px solid gray; padding:10px; margin-bottom:15px;">
<strong>Pasa el mouse aquí:</strong>

      @defer (on hover(hoverArea)) {
<p>🖱️ Cargado al hacer hover.</p>

      } @placeholder {
<p>⏳ Esperando hover…</p>

      }
</div>
 
    <!-- Interaction -->
<button #btn style="margin-bottom:15px;">

      Haz clic para cargar contenido diferido
</button>

    @defer (on interaction(btn)) {
<p>👍 Cargado al hacer click en el botón.</p>

    } @placeholder {
<p>⏳ Esperando interacción…</p>

    }
 
    <!-- Viewport -->
<div style="margin-top:500px; border:1px solid blue; padding:10px;">
<strong>Scroll hacia aquí:</strong>

      @defer (on viewport) {
<p>👀 Cargado al entrar en el viewport.</p>

      } @placeholder {
<p>⏳ Esperando que entres al viewport…</p>

      }
</div>
 
    <!-- Condición -->
<div style="margin-top:20px; border:1px solid green; padding:10px;">
<button (click)="activar()">Activar condición</button>

      @defer (when condicion()) {
<p>✅ Cargado porque la condición es true.</p>

      } @placeholder {
<p>⏳ Esperando condición…</p>

      }
</div>

  `,

})

export class AppComponent {

  condicion = signal(false);

  activar() {

    this.condicion.set(true);

  }

}
 
bootstrapApplication(AppComponent).catch(err => console.error(err));
 
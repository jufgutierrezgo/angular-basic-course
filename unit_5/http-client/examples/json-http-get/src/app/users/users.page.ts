import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>👥 Lista de Usuarios</h2>
    <button (click)="loadUsers()">Cargar Usuarios</button>

    <ul>
      <li *ngFor="let user of users">
        {{ user.name }} — {{ user.email }}
      </li>
    </ul>
  `,
})
export class UsersPage implements OnInit {
  private svc = inject(UsersService);
  users: any[] = [];

  ngOnInit() {
    // Se pueden cargar automáticamente al iniciar el componente
    this.loadUsers();
  }

  loadUsers() {
    this.svc.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error cargando usuarios:', err),
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Ejemplo de endpoint público (JSONPlaceholder)
const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root', // lo hace accesible globalmente
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // Obtener lista de usuarios
  getUsers(): Observable<any> {
    return this.http.get(API_URL);
  }

  // Agregar un nuevo usuario
  addUser(user: any): Observable<any> {
    return this.http.post(API_URL, user);
  }

  // Actualizar usuario
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, user);
  }

  // Eliminar usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicio {
  private localStorageKey = 'currentUser';

  constructor() {}

  login(usuario: Usuario) {
    // Guardar el usuario en el local storage
    localStorage.setItem(this.localStorageKey, JSON.stringify(usuario));
  }

  registrar(usuario: Usuario) {
    // Guardar el usuario en el local storage
    localStorage.setItem(this.localStorageKey, JSON.stringify(usuario));
  }

  logout() {
    // Eliminar el usuario del local storage al cerrar sesión
    localStorage.removeItem(this.localStorageKey);
  }

  getCurrentUser(): Usuario | null {
    // Obtener el usuario actual del local storage
    const userString = localStorage.getItem(this.localStorageKey);
    return userString ? JSON.parse(userString) : null;
  }
}

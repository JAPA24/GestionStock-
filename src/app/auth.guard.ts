import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioServicio } from './services/usuarioservicio.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioServicio, private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.usuarioService.getCurrentUser();
    if (currentUser) {
      // El usuario está autenticado, permite el acceso a la ruta
      return true;
    } else {
      // El usuario no está autenticado, redirige al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}

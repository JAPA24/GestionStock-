import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServicio } from '../services/usuarioservicio.service';
import { Usuario } from '../models/usuario.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = { username: '', password: '' };
  error = '';

  constructor(private usuarioService: UsuarioServicio, private router: Router) {}

  login() {
    const currentUser = this.usuarioService.getCurrentUser();
    if (currentUser && currentUser.username === this.usuario.username && currentUser.password === this.usuario.password) {
      // Redirige al usuario a la página de productos si los datos coinciden
      this.router.navigate(['/products']);
    } else {
      // Muestra un mensaje de error si los datos no coinciden
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
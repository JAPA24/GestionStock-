import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServicio } from '../services/usuarioservicio.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  usuario: Usuario = { username: '', password: '' };

  constructor(private usuarioService: UsuarioServicio, private router: Router) {}

  registrar() {
    this.usuarioService.registrar(this.usuario);
    // Redirige al usuario a la página de inicio después del registro exitoso
    this.router.navigate(['/login']); // Cambia '/home' por la ruta que desees
  }
}
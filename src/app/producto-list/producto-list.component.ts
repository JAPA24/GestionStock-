import { Component, OnInit } from '@angular/core';
import { IProducto } from '../models/producto.model';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Productoservicio } from '../services/productoservicio.service';
import { UsuarioServicio } from '../services/usuarioservicio.service';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit {


  listaProducto: IProducto[] = []

  constructor(private _apiService: Productoservicio,private usuarioService: UsuarioServicio,private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this._apiService.getAllProducts().subscribe({
      next: data => {
        console.log(data)
        this.listaProducto = data
      }, error: error => {
        console.log(error)
      }
    });
  }

  logout(): void {
    this.usuarioService.logout(); // Llama al método de logout del servicio de usuario
    this.router.navigate(['/login']); // Redirige al componente de login después de cerrar sesión
  }

}

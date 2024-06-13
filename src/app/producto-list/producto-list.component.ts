import { Component, OnInit, inject } from '@angular/core';
import { IProducto } from '../models/producto.model';
import { Router, RouterLink } from '@angular/router';
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
  
  product: IProducto = {
    _id:'',
    name: '',
    description: '',
    price: 0,
    image: '',
    amount:0,
    category: 1
  };
  
  listaProducto: IProducto[] = []
  static product: any;
  index : IProducto[] = this.listaProducto;
  constructor(private _apiService: Productoservicio,private usuarioService: UsuarioServicio,private router: Router) { 
  }

  ngOnInit(): void {
    this.getAllProducts()
    this.reloadPage(); 
  }

  reloadPage(): void {
    if ( this.index != this.listaProducto ) {
      location.reload();
    }
  }

  getAllProducts() {
    this._apiService.getAllProducts().subscribe({
      next: data => {
        console.log(data);
        this.listaProducto = data
      }, error: error => {
        console.log(error)
      }
    });
  }

  static getProducts (data: any)  : IProducto {
    this.product = data;
    console.log(this.product);
    return this.product;
  }

  editProduct(product: IProducto) {
    this.router.navigate(['/edit', product._id], { state: { product } });
  }

deleteProduct(product: IProducto) {
  this.router.navigate(['/eliminar', product._id], { state: { product } });}


  logout(): void {
    this.usuarioService.logout(); // Llama al método de logout del servicio de usuario
    this.router.navigate(['/login']); // Redirige al componente de login después de cerrar sesión
  }

}
import { Component } from '@angular/core';
import { Productoservicio } from '../services/productoservicio.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IProducto } from '../models/producto.model';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {


  newProduct: IProducto = { id: 0, title: '', description: '', price: 0, image: '' }; // Define newProduct como tipo IProducto

  constructor(private productoServicio: Productoservicio, private router: Router) {}

  onSubmit(): void {
    if (this.validateForm()) {
      this.productoServicio.crearProducto(this.newProduct).subscribe(
        () => {
          console.log('Producto creado exitosamente');
          // Redirige al componente de productos después de crear exitosamente un producto
          this.router.navigate(['/products']);
        },
        error => {
          console.error('Error al crear el producto:', error);
        }
      );
    } else {
      console.error('Formulario inválido. Por favor, completa todos los campos.');
    }
  }

  private validateForm(): boolean {
    return (
      this.newProduct.title.trim().length > 0 &&
      this.newProduct.price > 0 &&
      this.newProduct.description.trim().length > 0 &&
      this.newProduct.image.trim().length > 0
    );
  }
}
  



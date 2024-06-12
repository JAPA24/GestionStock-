import { Component } from '@angular/core';
import { Productoservicio } from '../services/productoservicio.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {


    newProduct: any = {};
  
    constructor(private productoServicio: Productoservicio) {}
  
    onSubmit(): void {
      if (this.newProduct.title && this.newProduct.price && this.newProduct.description && this.newProduct.category && this.newProduct.image) {
        this.productoServicio.crearProducto(this.newProduct).subscribe(
          () => {
            console.log('Producto creado exitosamente');
            // Aquí puedes agregar lógica adicional, como redirigir al usuario a otra página
          },
          error => {
            console.error('Error al crear el producto:', error);
          }
        );
      } else {
        console.error('Formulario inválido. Por favor, completa todos los campos.');
      }
    }
  }


